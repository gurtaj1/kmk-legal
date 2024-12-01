"use client";

import { Formik, Form, Field, FieldInputProps, FormikProps } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";
import { showToast } from "@/lib/toast-utils";
import { toast } from "sonner";
import { FormikHelpers } from "formik";
import { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { formatPhoneNumber } from "@/lib/format-utils";

interface AddressLookupResult {
  postcode: string;
  town: string;
  region: string;
  line1: string;
  line2?: string;
}

interface IdealPostcodesResult {
  postcode: string;
  post_town: string;
  county: string;
  line_1: string;
  line_2?: string;
}

const validationSchema = Yup.object()
  .shape({
    // Step 1
    quoteType: Yup.string().required("Please select a quote type"),
    purchaseType: Yup.string().when("quoteType", {
      is: "purchase",
      then: () => Yup.string().required("Please select a purchase type"),
    }),

    // Step 2
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address"
      ),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/,
        "Please enter a valid UK phone number"
      ),
    numberOfBuyers: Yup.number().when("quoteType", {
      is: (val: string) => ["purchase", "transfer-of-equity"].includes(val),
      then: () => Yup.number().min(1).required("Number of buyers is required"),
    }),

    // Step 3
    address: Yup.string().required("Address is required"),
    propertyValue: Yup.number()
      .min(1, "Property value must be greater than 0")
      .required("Property value is required"),
    propertyType: Yup.string().required("Please select a property type"),

    // Step 4 - Purchase specific
    isBuyingAsCompany: Yup.boolean().when("quoteType", {
      is: "purchase",
      then: () => Yup.boolean().required(),
    }),
    buyersOutsideUK: Yup.boolean().when("quoteType", {
      is: "purchase",
      then: () => Yup.boolean().required(),
    }),
    multipleProperties: Yup.boolean().when("quoteType", {
      is: "purchase",
      then: () => Yup.boolean().required(),
    }),
    previouslyOwned: Yup.boolean().when("quoteType", {
      is: "purchase",
      then: () => Yup.boolean().required(),
    }),
    mainResidence: Yup.boolean().when("quoteType", {
      is: "purchase",
      then: () => Yup.boolean().required(),
    }),
    usingMortgage: Yup.boolean().when("quoteType", {
      is: "purchase",
      then: () => Yup.boolean().required(),
    }),
    giftedDeposit: Yup.boolean().when("quoteType", {
      is: "purchase",
      then: () => Yup.boolean().required(),
    }),

    // Step 4 - Sale specific
    hasCurrentMortgage: Yup.boolean().when("quoteType", {
      is: "sale",
      then: () => Yup.boolean().required(),
    }),

    // Step 4 - Remortgage specific
    remortgageValue: Yup.number().when(["quoteType", "hasCurrentMortgage"], {
      is: (quoteType: string, hasCurrentMortgage: boolean) =>
        quoteType === "remortgage" && hasCurrentMortgage === true,
      then: () =>
        Yup.number()
          .required("Remortgage value is required")
          .min(1, "Remortgage value must be greater than 0"),
      otherwise: () => Yup.number().notRequired(),
    }),

    // Step 4 - Transfer of Equity specific
    transferRole: Yup.string().when("quoteType", {
      is: "transfer-of-equity",
      then: () =>
        Yup.string().required("Please select your role in the transfer"),
    }),
    considerationValue: Yup.number().when("quoteType", {
      is: "transfer-of-equity",
      then: () =>
        Yup.number()
          .required("Consideration value is required")
          .min(0, "Consideration value must be 0 or greater"),
    }),
  })
  .defined();

const initialValues = {
  // Step 1
  quoteType: "",
  purchaseType: "",

  // Step 2
  name: "",
  email: "",
  phone: "",
  numberOfBuyers: 1,

  // Step 3
  address: "",
  propertyValue: "",
  propertyType: "freehold",

  // Step 4 - Purchase specific
  isBuyingAsCompany: false,
  buyersOutsideUK: false,
  multipleProperties: false,
  previouslyOwned: false,
  mainResidence: true,
  usingMortgage: false,
  giftedDeposit: false,

  // Step 4 - Sale specific
  hasCurrentMortgage: false,

  // Step 4 - Remortgage specific
  remortgageValue: "",

  // Transfer of Equity specific
  transferRole: "",
  considerationValue: "",
};

const IDEAL_POSTCODES_API_KEY =
  process.env.NEXT_PUBLIC_IDEAL_POSTCODES_API_KEY!;

const ConveyancingPricingPage = () => {
  const [postcode, setPostcode] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [addressResults, setAddressResults] = useState<AddressLookupResult[]>(
    []
  );
  const [showAddressField, setShowAddressField] = useState(false);

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    const loadingToastId = toast.loading("Calculating your quote...");

    try {
      setSubmitting(true);
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.QUOTE_TEMPLATE_ID,
        values,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast.dismiss(loadingToastId);
      showToast.success("We will contact you shortly with a quote");
      resetForm();
    } catch (error) {
      console.error("Failed to send quote request:", error);
      toast.dismiss(loadingToastId);
      showToast.error(
        "Sorry, there was a problem sending your quote request. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const debouncedSearch = useCallback((searchTerm: string) => {
    const search = debounce(async (term: string) => {
      if (term.length < 3) return;
      setIsSearching(true);
      setShowAddressField(false);
      try {
        const response = await fetch(
          `https://api.ideal-postcodes.co.uk/v1/addresses?api_key=${IDEAL_POSTCODES_API_KEY}&query=${term}`
        );
        const data = await response.json();

        if (data.code === 2000) {
          const addresses = data.result.hits.map(
            (result: IdealPostcodesResult) => ({
              postcode: result.postcode,
              town: result.post_town,
              region: result.county,
              line1: result.line_1,
              line2: result.line_2,
            })
          );

          setAddressResults(addresses);
        }
      } catch (error) {
        showToast.error("Error looking up address");
        console.error(error);
      }
      setIsSearching(false);
    }, 300);

    search(searchTerm);
  }, []);

  const handleAddressSelect = (
    address: AddressLookupResult,
    setFieldValue: (field: string, value: string) => void
  ) => {
    setFieldValue(
      "address",
      `${address.line1}${address.line2 ? `, ${address.line2}` : ""}, ${
        address.town
      }, ${address.region}, ${address.postcode}`
    );
    setShowAddressField(true);
    setAddressResults([]);
    setPostcode("");
  };

  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-kmk-blueberry p-8 text-white text-center">
                <h1 className="text-3xl font-bold mb-4">Conveyancing Quote</h1>
                <p className="text-white/80">
                  Get an quote for your conveyancing needs. We&apos;ll provide
                  you with a detailed breakdown of costs based on your specific
                  requirements.
                </p>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  isSubmitting,
                  isValid,
                  dirty,
                  setFieldValue,
                }) => {
                  return (
                    <Form className="p-8 space-y-8">
                      {/* Step 1: Quote Type */}
                      <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                          Step 1: What is the quote for?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[
                            {
                              value: "purchase",
                              label: "Purchase",
                              icon: "🏠",
                            },
                            { value: "sale", label: "Sale", icon: "🏷️" },
                            {
                              value: "remortgage",
                              label: "Remortgage",
                              icon: "💰",
                            },
                            {
                              value: "transfer-of-equity",
                              label: "Transfer of Equity",
                              icon: "📝",
                            },
                          ].map((option) => (
                            <label
                              key={option.value}
                              className={`relative flex flex-col items-center p-6 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                                values.quoteType === option.value
                                  ? "border-kmk-blueberry bg-kmk-blueberry/5"
                                  : "border-gray-200"
                              }`}
                            >
                              <Field
                                type="radio"
                                name="quoteType"
                                value={option.value}
                                className="sr-only"
                              />
                              <span className="text-3xl mb-2">
                                {option.icon}
                              </span>
                              <span className="text-center font-medium">
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>

                        {/* Purchase Type Sub-selection */}
                        {values.quoteType === "purchase" && (
                          <div className="mt-6 space-y-4">
                            <h3 className="text-lg font-medium text-gray-700">
                              Select purchase type:
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {[
                                {
                                  value: "standard",
                                  label: "Standard Purchase",
                                },
                                {
                                  value: "shared-ownership",
                                  label: "Shared Ownership",
                                },
                                { value: "new-build", label: "New Build" },
                              ].map((option) => (
                                <label
                                  key={option.value}
                                  className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                                    values.purchaseType === option.value
                                      ? "border-kmk-blueberry bg-kmk-blueberry/5"
                                      : "border-gray-200"
                                  }`}
                                >
                                  <Field
                                    type="radio"
                                    name="purchaseType"
                                    value={option.value}
                                    className="sr-only"
                                  />
                                  <span className="text-center font-medium">
                                    {option.label}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Step 2: Client Details */}
                      {values.quoteType && (
                        <div className="space-y-6 border-t pt-6">
                          <h2 className="text-xl font-semibold text-gray-800">
                            Step 2: Client Details
                          </h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Name / Company Name
                              </label>
                              <Field
                                id="name"
                                name="name"
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                              />
                              {errors.name && touched.name && (
                                <p className="mt-1 text-sm text-red-600">
                                  {errors.name}
                                </p>
                              )}
                            </div>

                            {/* Email Field */}
                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Email Address
                              </label>
                              <Field
                                id="email"
                                name="email"
                                type="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                              />
                              {errors.email && touched.email && (
                                <p className="mt-1 text-sm text-red-600">
                                  {errors.email}
                                </p>
                              )}
                            </div>

                            {/* Phone Field */}
                            <div>
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Phone Number
                              </label>
                              <Field name="phone">
                                {({
                                  field,
                                  form,
                                }: {
                                  field: FieldInputProps<string>;
                                  form: FormikProps<typeof initialValues>;
                                }) => (
                                  <input
                                    {...field}
                                    type="tel"
                                    id="phone"
                                    placeholder=""
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                                    onChange={(e) => {
                                      const input = e.target;
                                      const selectionStart =
                                        input.selectionStart;
                                      const formattedNumber = formatPhoneNumber(
                                        e.target.value,
                                        field.value
                                      );
                                      form.setFieldValue(
                                        "phone",
                                        formattedNumber
                                      );

                                      // Restore cursor position on next tick
                                      setTimeout(() => {
                                        input.setSelectionRange(
                                          selectionStart,
                                          selectionStart
                                        );
                                      }, 0);
                                    }}
                                  />
                                )}
                              </Field>
                              {errors.phone && touched.phone && (
                                <p className="mt-1 text-sm text-red-600">
                                  {errors.phone}
                                </p>
                              )}
                            </div>

                            {/* Number of Buyers Field - Only show for purchase or transfer of equity */}
                            {(values.quoteType === "purchase" ||
                              values.quoteType === "transfer-of-equity") && (
                              <div>
                                <label
                                  htmlFor="numberOfBuyers"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Number of Buyers
                                </label>
                                <Field
                                  id="numberOfBuyers"
                                  name="numberOfBuyers"
                                  type="number"
                                  min="1"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                                />
                                {errors.numberOfBuyers &&
                                  touched.numberOfBuyers && (
                                    <p className="mt-1 text-sm text-red-600">
                                      {errors.numberOfBuyers}
                                    </p>
                                  )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Step 3: Property Details */}
                      {values.quoteType && (
                        <div className="space-y-6 border-t pt-6">
                          <h2 className="text-xl font-semibold text-gray-800">
                            Step 3: Property Details
                          </h2>
                          <div className="space-y-6">
                            {/* Address search section */}
                            <div className="space-y-6">
                              <div className="relative">
                                <label
                                  htmlFor="address-search"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Select Address
                                </label>
                                <div className="relative">
                                  <input
                                    id="address-search"
                                    type="text"
                                    value={postcode}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setPostcode(value);
                                      if (!value.trim()) {
                                        setAddressResults([]);
                                      } else {
                                        debouncedSearch(value);
                                      }
                                    }}
                                    placeholder="Start typing your postcode or address..."
                                    className="input input-bordered w-full"
                                  />
                                  {isSearching && (
                                    <div className="absolute inset-y-0 right-3 flex items-center">
                                      <div className="animate-spin h-4 w-4 border-2 border-kmk-blueberry border-t-transparent rounded-full" />
                                    </div>
                                  )}
                                </div>

                                {/* Address dropdown */}
                                {addressResults.length > 0 && (
                                  <div
                                    className="absolute z-50 w-full bg-white border rounded-md shadow-lg"
                                    style={{
                                      maxHeight: "300px",
                                      overflowY: "auto",
                                      top: "calc(100% + 4px)",
                                    }}
                                    onWheel={(e) => {
                                      e.stopPropagation();
                                      const element = e.currentTarget;
                                      if (
                                        element.scrollHeight >
                                        element.clientHeight
                                      ) {
                                        e.preventDefault();
                                        element.scrollTop += e.deltaY;
                                      }
                                    }}
                                  >
                                    {addressResults.map((address, index) => (
                                      <button
                                        key={index}
                                        type="button"
                                        onClick={() =>
                                          handleAddressSelect(
                                            address,
                                            setFieldValue
                                          )
                                        }
                                        className="w-full px-4 py-3 text-left hover:bg-gray-100 border-b last:border-b-0"
                                      >
                                        <div className="text-sm">
                                          {`${address.line1}${
                                            address.line2
                                              ? `, ${address.line2}`
                                              : ""
                                          }, ${address.town}, ${
                                            address.postcode
                                          }`}
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Selected address field */}
                              {showAddressField && (
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Address</span>
                                  </label>
                                  <Field
                                    as="textarea"
                                    name="address"
                                    rows={3}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kmk-blueberry focus:ring-kmk-blueberry p-3"
                                    disabled
                                  />
                                  {errors.address && touched.address && (
                                    <p className="mt-1 text-sm text-red-600">
                                      {errors.address}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Property Value Field */}
                              <div>
                                <label
                                  htmlFor="propertyValue"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  {values.quoteType === "sale"
                                    ? "Sale Price"
                                    : values.quoteType === "purchase"
                                    ? "Purchase Price"
                                    : "Property Value"}
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">
                                      £
                                    </span>
                                  </div>
                                  <Field
                                    id="propertyValue"
                                    name="propertyValue"
                                    type="number"
                                    min="0"
                                    step="1"
                                    className="block w-full rounded-md border-gray-300 pl-7 focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                                  />
                                </div>
                                {errors.propertyValue &&
                                  touched.propertyValue && (
                                    <p className="mt-1 text-sm text-red-600">
                                      {errors.propertyValue}
                                    </p>
                                  )}
                              </div>

                              {/* Property Type Field */}
                              <div>
                                <label
                                  htmlFor="propertyType"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Property Type
                                </label>
                                <div className="mt-1">
                                  <div className="space-y-2">
                                    {[
                                      { value: "freehold", label: "Freehold" },
                                      {
                                        value: "leasehold",
                                        label: "Leasehold",
                                      },
                                    ].map((option) => (
                                      <label
                                        key={option.value}
                                        className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                                          values.propertyType === option.value
                                            ? "border-kmk-blueberry bg-kmk-blueberry/5"
                                            : "border-gray-200"
                                        }`}
                                      >
                                        <Field
                                          type="radio"
                                          name="propertyType"
                                          value={option.value}
                                          className="sr-only"
                                        />
                                        <span className="flex items-center">
                                          <span className="text-sm font-medium text-gray-900">
                                            {option.label}
                                          </span>
                                        </span>
                                      </label>
                                    ))}
                                  </div>
                                </div>
                                {errors.propertyType &&
                                  touched.propertyType && (
                                    <p className="mt-1 text-sm text-red-600">
                                      {errors.propertyType}
                                    </p>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Additional Questions */}
                      {values.quoteType && (
                        <div className="space-y-6 border-t pt-6">
                          <h2 className="text-xl font-semibold text-gray-800">
                            Step 4: Additional Questions
                          </h2>

                          {/* Purchase Questions */}
                          {values.quoteType === "purchase" && (
                            <div className="space-y-4">
                              {[
                                {
                                  name: "isBuyingAsCompany",
                                  label: "Are you buying as a company?",
                                },
                                {
                                  name: "buyersOutsideUK",
                                  label:
                                    "Do any of the purchasers reside outside the UK?",
                                },
                                {
                                  name: "multipleProperties",
                                  label:
                                    "Will the purchase of the property result in owning two or more properties?",
                                },
                                {
                                  name: "previouslyOwned",
                                  label:
                                    "Have you ever owned or part owned another property?",
                                },
                                {
                                  name: "mainResidence",
                                  label:
                                    "Will this property be your main residence?",
                                },
                                {
                                  name: "usingMortgage",
                                  label: "Are you buying using a mortgage?",
                                },
                                {
                                  name: "giftedDeposit",
                                  label: "Is any part of your deposit gifted?",
                                },
                              ].map((question) => (
                                <label
                                  key={question.name}
                                  className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                                    values[question.name as keyof typeof values]
                                      ? "border-kmk-blueberry bg-kmk-blueberry/5"
                                      : "border-gray-200"
                                  }`}
                                >
                                  <Field
                                    type="checkbox"
                                    name={question.name}
                                    className="h-4 w-4 text-kmk-blueberry border-gray-300 rounded focus:ring-kmk-blueberry mr-3"
                                  />
                                  <span className="text-sm font-medium text-gray-900">
                                    {question.label}
                                  </span>
                                </label>
                              ))}
                            </div>
                          )}

                          {/* Sale Questions */}
                          {values.quoteType === "sale" && (
                            <div className="space-y-4">
                              <label
                                className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                                  values.hasCurrentMortgage
                                    ? "border-kmk-blueberry bg-kmk-blueberry/5"
                                    : "border-gray-200"
                                }`}
                              >
                                <Field
                                  type="checkbox"
                                  name="hasCurrentMortgage"
                                  className="h-4 w-4 text-kmk-blueberry border-gray-300 rounded focus:ring-kmk-blueberry mr-3"
                                />
                                <span className="text-sm font-medium text-gray-900">
                                  Do you have a current mortgage?
                                </span>
                              </label>
                            </div>
                          )}

                          {/* Remortgage Questions */}
                          {values.quoteType === "remortgage" && (
                            <div className="space-y-6">
                              {/* Current Mortgage Question */}
                              <label
                                className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                                  values.hasCurrentMortgage
                                    ? "border-kmk-blueberry bg-kmk-blueberry/5"
                                    : "border-gray-200"
                                }`}
                              >
                                <Field
                                  type="checkbox"
                                  name="hasCurrentMortgage"
                                  className="h-4 w-4 text-kmk-blueberry border-gray-300 rounded focus:ring-kmk-blueberry mr-3"
                                />
                                <span className="text-sm font-medium text-gray-900">
                                  Do you have a current mortgage?
                                </span>
                              </label>

                              {/* Remortgage Value */}
                              <div>
                                <label
                                  htmlFor="remortgageValue"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  How much is the remortgage value?
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">
                                      £
                                    </span>
                                  </div>
                                  <Field
                                    id="remortgageValue"
                                    name="remortgageValue"
                                    type="number"
                                    min="0"
                                    step="1"
                                    className="block w-full rounded-md border-gray-300 pl-7 focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                                  />
                                </div>
                                {errors.remortgageValue &&
                                  touched.remortgageValue && (
                                    <p className="mt-1 text-sm text-red-600">
                                      {errors.remortgageValue}
                                    </p>
                                  )}
                              </div>
                            </div>
                          )}

                          {/* Transfer of Equity Questions */}
                          {values.quoteType === "transfer-of-equity" && (
                            <div className="space-y-6">
                              {/* Current Mortgage Question */}
                              <label
                                className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                                  values.hasCurrentMortgage
                                    ? "border-kmk-blueberry bg-kmk-blueberry/5"
                                    : "border-gray-200"
                                }`}
                              >
                                <Field
                                  type="checkbox"
                                  name="hasCurrentMortgage"
                                  className="h-4 w-4 text-kmk-blueberry border-gray-300 rounded focus:ring-kmk-blueberry mr-3"
                                />
                                <span className="text-sm font-medium text-gray-900">
                                  Do you have a current mortgage?
                                </span>
                              </label>

                              {/* Transfer Role Selection */}
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Are you the transferor or transferee?
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {[
                                    {
                                      value: "transferor",
                                      label: "Transferor (giving away share)",
                                    },
                                    {
                                      value: "transferee",
                                      label: "Transferee (receiving share)",
                                    },
                                  ].map((option) => (
                                    <label
                                      key={option.value}
                                      className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                                        values.transferRole === option.value
                                          ? "border-kmk-blueberry bg-kmk-blueberry/5"
                                          : "border-gray-200"
                                      }`}
                                    >
                                      <Field
                                        type="radio"
                                        name="transferRole"
                                        value={option.value}
                                        className="sr-only"
                                      />
                                      <span className="text-sm font-medium text-gray-900">
                                        {option.label}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                                {errors.transferRole &&
                                  touched.transferRole && (
                                    <p className="mt-1 text-sm text-red-600">
                                      {errors.transferRole}
                                    </p>
                                  )}
                              </div>

                              {/* Property Value */}
                              <div>
                                <label
                                  htmlFor="propertyValue"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  What is the property value?
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">
                                      £
                                    </span>
                                  </div>
                                  <Field
                                    id="propertyValue"
                                    name="propertyValue"
                                    type="number"
                                    min="0"
                                    step="1"
                                    className="block w-full rounded-md border-gray-300 pl-7 focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                                  />
                                </div>
                                {errors.propertyValue &&
                                  touched.propertyValue && (
                                    <p className="mt-1 text-sm text-red-600">
                                      {errors.propertyValue}
                                    </p>
                                  )}
                              </div>

                              {/* Consideration Value */}
                              <div>
                                <label
                                  htmlFor="considerationValue"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  What is the consideration value?
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">
                                      £
                                    </span>
                                  </div>
                                  <Field
                                    id="considerationValue"
                                    name="considerationValue"
                                    type="number"
                                    min="0"
                                    step="1"
                                    className="block w-full rounded-md border-gray-300 pl-7 focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                                  />
                                </div>
                                {errors.considerationValue &&
                                  touched.considerationValue && (
                                    <p className="mt-1 text-sm text-red-600">
                                      {errors.considerationValue}
                                    </p>
                                  )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="pt-6 border-t">
                        <button
                          type="submit"
                          disabled={isSubmitting || !(isValid && dirty)}
                          className="w-full py-3 bg-kmk-blueberry text-white rounded-lg hover:bg-kmk-blueberry/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting
                            ? "Submitting..."
                            : !(isValid && dirty)
                            ? "Please fill in all required fields"
                            : "Get Quote"}
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default ConveyancingPricingPage;
