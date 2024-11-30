"use client";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";
import { showToast } from "@/lib/toast-utils";
import { toast } from "sonner";

const validationSchema = Yup.object().shape({
  transactionType: Yup.string().required("Please select a transaction type"),
  currentPropertyValue: Yup.number()
    .min(1, "Property value must be greater than 0")
    .required("Property value is required"),
  currentPropertyType: Yup.string().required("Please select a property type"),
  leaseholdManagementPackCost: Yup.number().when("currentPropertyType", {
    is: "leasehold",
    then: () => Yup.number().required("Management pack cost is required"),
    otherwise: () => Yup.number().nullable(),
  }),
  newPropertyValue: Yup.number()
    .min(1, "Property value must be greater than 0")
    .required("Property value is required"),
  newPropertyType: Yup.string().required("Please select a property type"),
  services: Yup.array().min(1, "Please select at least one service"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required"),
});

const initialValues = {
  transactionType: "buying-selling",
  currentPropertyValue: "",
  currentPropertyType: "freehold",
  leaseholdManagementPackCost: 300,
  newPropertyValue: "",
  newPropertyType: "freehold",
  services: [],
  email: "",
  name: "",
  phone: "",
};

const getSchemeDescription = (scheme: keyof typeof descriptions): string => {
  const descriptions = {
    new_build:
      "New build conveyancing requires further steps and an extra legal fee.",
    right_to_buy:
      "Buying a home through the Right to Buy Scheme will cost extra in legal fees.",
    shared_ownership:
      "Buying a home through the Shared Ownership Scheme means your solicitor will charge extra in legal fees.",
    stamp_duty_return:
      "Even if you're below the Stamp Duty threshold, you'll need to inform HMRC about the property purchase within 14 days of completion day.",
    transfer_of_equity:
      "If you are adding or removing a person from the title, you'll have to pay an extra fee.",
  };
  return descriptions[scheme] || "";
};

const ConveyancingPricingPage = () => {
  const handleSubmit = async (
    values: typeof initialValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    const loadingToastId = toast.loading("Calculating your quote...");

    try {
      setSubmitting(true);

      const templateParams = {
        transactionType: values.transactionType,
        currentPropertyValue: values.currentPropertyValue,
        currentPropertyType: values.currentPropertyType,
        leaseholdManagementPackCost:
          values.leaseholdManagementPackCost || "N/A",
        newPropertyValue: values.newPropertyValue,
        newPropertyType: values.newPropertyType,
        services: values.services.join(", "),
        email: values.email,
        name: values.name,
        phone: values.phone,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast.dismiss(loadingToastId);
      showToast.success("Your quote request has been sent successfully!");
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

  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30">
        <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
          <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-kmk-blueberry p-8 text-white text-center">
                <h1 className="text-3xl font-bold mb-4">
                  Conveyancing Fees Calculator
                </h1>
                <p className="text-white/80">
                  If you are buying, selling, or remortgaging a property, you
                  will have to pay conveyancing fees. Use our conveyancing fees
                  calculator to be provided with an estimated cost depending on
                  your circumstances.
                </p>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, isSubmitting }) => (
                  <Form className="p-8 space-y-8">
                    {/* Transaction Type Section */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-800 text-center">
                        Are you buying, selling or both?
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          {
                            value: "buying-selling",
                            label: "Buying and Selling",
                            icon: "↔️",
                          },
                          {
                            value: "buying",
                            label: "Buying Only",
                            icon: "🏠",
                          },
                          {
                            value: "selling",
                            label: "Sale Only",
                            icon: "🏷️",
                          },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className={`relative flex flex-col items-center p-6 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                              values.transactionType === option.value
                                ? "border-kmk-blueberry bg-kmk-blueberry/5"
                                : "border-gray-200"
                            }`}
                          >
                            <Field
                              type="radio"
                              name="transactionType"
                              value={option.value}
                              className="sr-only"
                            />
                            <span className="text-3xl mb-2">{option.icon}</span>
                            <span className="text-center font-medium">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Current Property Section */}
                    {(values.transactionType === "buying-selling" ||
                      values.transactionType === "selling") && (
                      <div className="space-y-6 border-t pt-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                          Your current property
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              How much is the property worth?
                            </label>
                            <Field
                              name="currentPropertyValue"
                              type="number"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Is the property leasehold or freehold?
                            </label>
                            <Field
                              as="select"
                              name="currentPropertyType"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                            >
                              <option value="freehold">Freehold</option>
                              <option value="leasehold">Leasehold</option>
                            </Field>
                          </div>
                        </div>

                        {values.currentPropertyType === "leasehold" && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Leasehold management information pack cost
                            </label>
                            <p className="text-sm text-gray-500 mb-2">
                              A vital pack for selling a leasehold, it provides
                              important information on ground rent and service
                              charges.
                            </p>
                            <Field
                              name="leaseholdManagementPackCost"
                              type="number"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* New Property Section */}
                    {(values.transactionType === "buying-selling" ||
                      values.transactionType === "buying") && (
                      <div className="space-y-6 border-t pt-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                          Your new property
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              How much is the new property worth?
                            </label>
                            <Field
                              name="newPropertyValue"
                              type="number"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Is the new property leasehold or freehold?
                            </label>
                            <Field
                              as="select"
                              name="newPropertyType"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kmk-blueberry focus:ring-kmk-blueberry"
                            >
                              <option value="freehold">Freehold</option>
                              <option value="leasehold">Leasehold</option>
                            </Field>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Services Section */}
                    <div className="space-y-6 border-t pt-6 bg-gray-50">
                      <div className="container mx-auto px-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                          What conveyancing services will you need?
                        </h2>
                        <p className="text-sm text-gray-600 mb-6">
                          We have preselected services we think you will need
                          based on your property information.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Searches Column */}
                          <div className="space-y-4">
                            <h3 className="font-semibold text-gray-700">
                              Searches
                            </h3>
                            {values.transactionType !== "selling" && (
                              <label className="block">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="full_searches"
                                  className="sr-only peer"
                                />
                                <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                  <div className="flex-1">
                                    <span className="block font-medium text-gray-700">
                                      Full searches
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                      These are enquiries carried out by your
                                      solicitor and are vital in finding out
                                      more on the property.
                                    </span>
                                  </div>
                                </div>
                              </label>
                            )}

                            {values.transactionType !== "selling" && (
                              <label className="block">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="bankruptcy_search"
                                  className="sr-only peer"
                                />
                                <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                  <div className="flex-1">
                                    <span className="block font-medium text-gray-700">
                                      Bankruptcy search
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                      A common search to prove you are not
                                      bankrupt. Your solicitor will order this
                                      and provide your mortgage lender with the
                                      results.
                                    </span>
                                  </div>
                                </div>
                              </label>
                            )}

                            {values.transactionType === "selling" && (
                              <label className="block">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="land_registry_title_deeds"
                                  className="sr-only peer"
                                />
                                <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                  <div className="flex-1">
                                    <span className="block font-medium text-gray-700">
                                      Land Registry title deeds copy
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                      Your solicitor will need to get these to
                                      prove you own the property.
                                    </span>
                                  </div>
                                </div>
                              </label>
                            )}

                            <label className="block">
                              <Field
                                type="checkbox"
                                name="services"
                                value="anti_money_laundering_checks"
                                className="sr-only peer"
                              />
                              <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                <div className="flex-1">
                                  <span className="block font-medium text-gray-700">
                                    Anti-money laundering checks
                                  </span>
                                  <span className="block text-sm text-gray-500">
                                    Another common search. This will show your
                                    solicitor where your deposit came from.
                                  </span>
                                </div>
                              </div>
                            </label>
                          </div>

                          {/* Fees Column */}
                          <div className="space-y-4">
                            <h3 className="font-semibold text-gray-700">
                              Fees
                            </h3>
                            <label className="block">
                              <Field
                                type="checkbox"
                                name="services"
                                value="electronic_money_transfer"
                                className="sr-only peer"
                              />
                              <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                <div className="flex-1">
                                  <span className="block font-medium text-gray-700">
                                    Electronic money transfer
                                  </span>
                                  <span className="block text-sm text-gray-500">
                                    A bank transfer fee will be charged by the
                                    bank to transfer sums of money over £60,000.
                                  </span>
                                </div>
                              </div>
                            </label>

                            {values.transactionType !== "selling" && (
                              <label className="block">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="land_registry_registration_services_fees"
                                  className="sr-only peer"
                                />
                                <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                  <div className="flex-1">
                                    <span className="block font-medium text-gray-700">
                                      Land Registry registration services fees
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                      If the property isn&apos;t registered with
                                      the Land Registry, you will have to pay a
                                      fee to register it.
                                    </span>
                                  </div>
                                </div>
                              </label>
                            )}

                            {/* Leasehold-specific fees for buying */}
                            {values.transactionType !== "selling" &&
                              values.newPropertyType === "leasehold" && (
                                <>
                                  <label className="block">
                                    <Field
                                      type="checkbox"
                                      name="services"
                                      value="notice_of_charge_fee"
                                      className="sr-only peer"
                                    />
                                    <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                      <div className="flex-1">
                                        <span className="block font-medium text-gray-700">
                                          Notice of charge fee
                                        </span>
                                        <span className="block text-sm text-gray-500">
                                          If you are using a mortgage to buy the
                                          leasehold, you&apos;ll need to notify
                                          the landlord of a change in lender.
                                        </span>
                                      </div>
                                    </div>
                                  </label>

                                  <label className="block">
                                    <Field
                                      type="checkbox"
                                      name="services"
                                      value="notice_of_transfer_fee"
                                      className="sr-only peer"
                                    />
                                    <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                      <div className="flex-1">
                                        <span className="block font-medium text-gray-700">
                                          Notice of transfer fee
                                        </span>
                                        <span className="block text-sm text-gray-500">
                                          A notice must be sent to the landlord
                                          of the leasehold property informing
                                          them of the change of ownership.
                                        </span>
                                      </div>
                                    </div>
                                  </label>
                                </>
                              )}

                            {/* Leasehold-specific fees for selling */}
                            {(values.transactionType === "selling" ||
                              values.transactionType === "buying-selling") &&
                              values.currentPropertyType === "leasehold" && (
                                <label className="block">
                                  <Field
                                    type="checkbox"
                                    name="services"
                                    value="leasehold_property_supplement_fee"
                                    className="sr-only peer"
                                  />
                                  <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                    <div className="flex-1">
                                      <span className="block font-medium text-gray-700">
                                        Leasehold property supplement fee
                                      </span>
                                      <span className="block text-sm text-gray-500">
                                        If you&apos;re selling a leasehold, your
                                        solicitor will charge extra as this
                                        involves more work.
                                      </span>
                                    </div>
                                  </div>
                                </label>
                              )}

                            <label className="block">
                              <Field
                                type="checkbox"
                                name="services"
                                value="mortgaged_property_supplement_fee"
                                className="sr-only peer"
                              />
                              <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                <div className="flex-1">
                                  <span className="block font-medium text-gray-700">
                                    Mortgaged property supplement fee
                                  </span>
                                  <span className="block text-sm text-gray-500">
                                    If you&apos;re buying or selling with a
                                    mortgage, your solicitor will charge a fee
                                    for this to cover the extra work involved.
                                  </span>
                                </div>
                              </div>
                            </label>
                          </div>

                          {/* Schemes Column */}
                          {values.transactionType !== "selling" && (
                            <div className="space-y-4">
                              <h3 className="font-semibold text-gray-700">
                                Schemes
                              </h3>
                              <label className="block">
                                <Field
                                  type="checkbox"
                                  name="services"
                                  value="help_to_buy_isa"
                                  className="sr-only peer"
                                />
                                <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                  <div className="flex-1">
                                    <span className="block font-medium text-gray-700">
                                      Help to Buy ISA
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                      Your solicitor will have extra work if
                                      you&apos;re buying a home using the Help
                                      to Buy ISA, therefore charging a
                                      supplement fee.
                                    </span>
                                  </div>
                                </div>
                              </label>

                              {/* Add other scheme options */}
                              {[
                                "new_build",
                                "right_to_buy",
                                "shared_ownership",
                                "stamp_duty_return",
                                "transfer_of_equity",
                              ].map((scheme) => (
                                <label key={scheme} className="block">
                                  <Field
                                    type="checkbox"
                                    name="services"
                                    value={scheme}
                                    className="sr-only peer"
                                  />
                                  <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-white transition-colors peer-checked:border-kmk-blueberry peer-checked:bg-kmk-blueberry/5">
                                    <div className="flex-1">
                                      <span className="block font-medium text-gray-700">
                                        {scheme
                                          .split("_")
                                          .map(
                                            (word) =>
                                              word.charAt(0).toUpperCase() +
                                              word.slice(1)
                                          )
                                          .join(" ")}
                                      </span>
                                      <span className="block text-sm text-gray-500">
                                        {getSchemeDescription(scheme)}
                                      </span>
                                    </div>
                                  </div>
                                </label>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Calculate Button */}
                    <div className="text-center pt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-gradient-to-r from-kmk-blueberry to-kmk-purple text-white rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                      >
                        Calculate Costs
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </ScrollMotionWrapper>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default ConveyancingPricingPage;
