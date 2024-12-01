"use client";

import { motion } from "framer-motion";
import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  FieldInputProps,
  FormikProps,
} from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import LogoWithTextColor from "@/components/svg/logo-with-text-color";
import SmartCarousel from "@/components/ui/smart-carousel";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import ScrollMotionWrapper from "@/components/ui/scroll-motion-wrapper";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";
import { showToast } from "@/lib/toast-utils";
import ServiceCard from "@/components/ui/service-card";

import { buttonVariants } from "@/app/globals/framer-variants";
import { formatPhoneNumber } from "@/lib/format-utils";
import { kmkHexColors } from "@/constants";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),
  phone: Yup.string().matches(
    /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/,
    "Please enter a valid UK phone number"
  ),
  area: Yup.string(),
  message: Yup.string()
    .required("Please enter a message")
    .min(5, "Message needs to be longer"),
  subscribe: Yup.boolean(),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  area: "",
  message: "",
  subscribe: false,
};

const serviceLinks = [
  {
    href: "/services/conveyancing",
    title: "Conveyancing",
    image: "/residential-conveyancing.jpg",
    description:
      "Expert property law services for buying and selling properties.",
  },
  {
    href: "/services/commercial-property",
    title: "Commercial Property",
    image: "/commercial-conveyancing.jpg",
    description: "Comprehensive legal support for business property matters.",
  },
  {
    href: "/services/family-law",
    title: "Family Law",
    image: "/family-law.jpg",
    description: "Sensitive handling of family legal matters and disputes.",
  },
  {
    href: "/services/children-law",
    title: "Children Law",
    image: "/children-law.jpg",
    description: "Expert representation in children law cases.",
  },
  {
    href: "/services/estate-planning",
    title: "Estate Planning",
    image: "/estate-planning.jpg",
    description: "Professional will writing and estate planning services.",
  },
  {
    href: "/services/trusts",
    title: "Trusts",
    image: "/trust-law.jpg",
    description: "Specialist advice on trust formation and management.",
  },
];

const Page = () => {
  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    const loadingToastId = toast.loading("Sending your enquiry...");

    try {
      setSubmitting(true);

      const templateParams = {
        currentPage: "home page",
        name: values.name,
        email: values.email,
        phone: values.phone,
        area: values.area,
        message: values.message,
        subscribe: values.subscribe ? "Yes" : "No",
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      toast.dismiss(loadingToastId);

      showToast.success("Your enquiry has been sent successfully!");
      resetForm();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.dismiss(loadingToastId);
      showToast.error(
        "Sorry, there was a problem sending your enquiry. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-kmk-blueberry/10 to-kmk-blueberry/30 text-[#333333] overflow-x-hidden">
        {/* Hero Section */}
        <section
          className="py-12 bg-muted relative"
          style={{
            backgroundImage: "url('/home-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-kmk-logoBlue/30" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="mb-4">
              <LogoWithTextColor
                className="w-32 sm:w-44 md:w-60 h-full pt-3"
                mFill={kmkHexColors.logoGrey}
                kFill={"#fff"}
              />
            </div>
            <p className="text-xl text-white/80 mb-8">
              Providing expert legal services for over 25 years
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-none text-white bg-black/20 rounded-xl backdrop-blur-sm shadow-[0_0_40px_10px_rgba(0,0,0,0.2)]">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-semibold mb-4">Our Ethos</h2>
                  <p className="mb-3">
                    We believe in delivering justice with compassion, integrity,
                    and excellence. Our commitment goes beyond legal
                    representation – we strive to be your trusted partner in
                    navigating life&apos;s legal challenges.
                  </p>
                  <div className="text-sm font-medium">
                    &quot;Justice with a personal touch&quot;
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-4 flex flex-col justify-center">
                <motion.div
                  variants={buttonVariants}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <Link href="#contact">
                    <Button className="w-full bg-kmk-logoGrey text-white hover:bg-kmk-gold hover:text-black">
                      Arrange a Callback
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <Link href="/quote-calculator">
                    <Button className="w-full bg-kmk-blueberry text-white hover:bg-kmk-emeraldGreen hover:text-white">
                      Get a Free Quote
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
              <h2 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
                Our Services
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceLinks.map((service) => (
                  <ServiceCard
                    key={service.href}
                    href={service.href}
                    title={service.title}
                    image={service.image}
                    description={service.description}
                  />
                ))}
              </div>
            </ScrollMotionWrapper>
          </div>
        </section>
        <section className="py-12 relative">
          {/* <div className="absolute inset-0 bg-muted transform skew-y-2" />
           */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-muted/60 to-muted"
            style={{
              clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)",
            }}
          />
          <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <h2 className="text-6xl font-bold text-center mb-8">
                Accreditations & Awards
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-background rounded-lg p-4 aspect-square flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-muted rounded" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollMotionWrapper>
        </section>

        <section className="py-12 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
              <h2 className="text-6xl text-kmk-logoBlue font-bold text-center mb-8">
                Client Testimonials
              </h2>
              <SmartCarousel
                items={[...Array(6)].map((_, i) => (
                  <Card key={i} className="mx-2">
                    <CardContent className="p-6">
                      <p className="mb-4">
                        &quot;Excellent service and professional advice
                        throughout the whole process.&quot;
                      </p>
                      <p className="font-semibold">Client Name</p>
                      <p className="text-sm text-muted-foreground">
                        Service Used: Conveyancing
                      </p>
                    </CardContent>
                  </Card>
                ))}
                slidesToShow={3}
                autoplay={true}
                autoplayInterval={5000}
                boxShadowColor="dental-teal"
              />
            </ScrollMotionWrapper>
          </div>
        </section>

        <section
          className="py-12 relative scroll-mt-navbarMobile md:scroll-mt-navbar"
          id="contact"
        >
          <div
            className="absolute inset-0 bg-gradient-to-tr from-kmk-emeraldGreen/60 to-muted"
            style={{
              clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 100%)",
            }}
          />
          <ScrollMotionWrapper transitionOpacity transitionY transitionScale>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info Column */}
                <div className="lg:col-span-1 space-y-6">
                  <h2 className="text-3xl font-bold text-kmk-logoBlue">
                    Contact Us
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Our Office</h3>
                      <address className="not-italic text-muted-foreground">
                        KMK Legal
                        <br />
                        123 Law Street
                        <br />
                        Cityville, CV1 2AB
                        <br />
                        United Kingdom
                      </address>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">
                        Get in Touch
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>Phone: +447389109307</p>
                        <p>Email: info@kmklegal.com</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">
                        Opening Hours
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Column */}
                <div className="lg:col-span-2">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched, isSubmitting }) => (
                      <Form className="grid gap-4 bg-white p-6 rounded-lg shadow-sm">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <motion.div
                            className="space-y-2"
                            variants={buttonVariants}
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <label
                              htmlFor="name"
                              className="text-sm font-medium"
                            >
                              Name*
                            </label>
                            <Field
                              as={Input}
                              id="name"
                              name="name"
                              className={`transition-colors hover:border-kmk-logoBlue focus:border-kmk-logoBlue ${
                                errors.name && touched.name
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                            {errors.name && touched.name && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                              </p>
                            )}
                          </motion.div>

                          <motion.div
                            className="space-y-2"
                            variants={buttonVariants}
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email*
                            </label>
                            <Field
                              as={Input}
                              id="email"
                              name="email"
                              type="email"
                              className={`transition-colors hover:border-kmk-logoBlue focus:border-kmk-logoBlue ${
                                errors.email && touched.email
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                            {errors.email && touched.email && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                              </p>
                            )}
                          </motion.div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <motion.div
                            className="space-y-2"
                            variants={buttonVariants}
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <label
                              htmlFor="phone"
                              className="text-sm font-medium"
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
                                <Input
                                  {...field}
                                  id="phone"
                                  type="tel"
                                  placeholder=""
                                  className={`transition-colors hover:border-kmk-logoBlue focus:border-kmk-logoBlue ${
                                    errors.phone && touched.phone
                                      ? "border-red-500"
                                      : ""
                                  }`}
                                  value={field.value}
                                  onChange={(e) => {
                                    const input = e.target;
                                    const selectionStart = input.selectionStart;
                                    const rawValue = e.target.value;

                                    // Allow the raw input first
                                    form.setFieldValue("phone", rawValue);

                                    // Then format it
                                    const formattedNumber = formatPhoneNumber(
                                      rawValue,
                                      field.value
                                    );
                                    if (formattedNumber !== rawValue) {
                                      form.setFieldValue(
                                        "phone",
                                        formattedNumber
                                      );
                                    }

                                    // Restore cursor position
                                    setTimeout(() => {
                                      if (input.selectionStart) {
                                        input.setSelectionRange(
                                          selectionStart,
                                          selectionStart
                                        );
                                      }
                                    }, 0);
                                  }}
                                />
                              )}
                            </Field>
                            {errors.phone && touched.phone && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.phone}
                              </p>
                            )}
                          </motion.div>

                          <motion.div
                            className="space-y-2"
                            variants={buttonVariants}
                            whileHover="whileHover"
                            whileTap="whileTap"
                          >
                            <label
                              htmlFor="area"
                              className="text-sm font-medium"
                            >
                              Area of Law
                            </label>
                            <Field
                              as={Input}
                              id="area"
                              name="area"
                              className="transition-colors hover:border-kmk-logoBlue focus:border-kmk-logoBlue"
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          className="space-y-2"
                          variants={buttonVariants}
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <label
                            htmlFor="message"
                            className="text-sm font-medium"
                          >
                            Message
                          </label>
                          <Field
                            as={Textarea}
                            id="message"
                            name="message"
                            className={`transition-colors hover:border-kmk-logoBlue focus:border-kmk-logoBlue ${
                              errors.message && touched.message
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                          {errors.message && touched.message && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.message}
                            </p>
                          )}
                        </motion.div>

                        <motion.div
                          className="flex items-center gap-2"
                          variants={buttonVariants}
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Field
                            as={Checkbox}
                            id="subscribe"
                            name="subscribe"
                          />
                          <label htmlFor="subscribe" className="text-sm">
                            Subscribe to our updates
                          </label>
                        </motion.div>

                        <motion.div
                          variants={buttonVariants}
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <Button
                            type="submit"
                            className="w-full"
                            disabled={
                              isSubmitting || Object.keys(errors).length > 0
                            }
                          >
                            {isSubmitting ? "Sending..." : "Send Enquiry"}
                          </Button>
                        </motion.div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </ScrollMotionWrapper>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default Page;
