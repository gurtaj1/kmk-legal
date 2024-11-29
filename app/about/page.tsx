"use client";

import { motion } from "framer-motion";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Image from "next/image";
import Link from "next/link";
import ThreeStepGrid from "@/components/ui/three-step-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { cardVariants, buttonVariants } from "@/app/globals/framer-variants";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";

const teamMembers = [
  {
    title: "John Smith",
    image: "/headshot-placeholder.jpg",
    description:
      "Senior Partner - 15 years experience in commercial property law",
  },
  {
    title: "Sarah Johnson",
    image: "/headshot-placeholder.jpg",
    description:
      "Family Law Specialist - Expert in matrimonial and children law",
  },
  {
    title: "David Williams",
    image: "/headshot-placeholder.jpg",
    description: "Conveyancing Lead - Over 20 years in residential property",
  },
];

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  phone: Yup.string(),
  area: Yup.string(),
  message: Yup.string()
    .required("Please enter a message")
    .min(5, "Message needs to be longer"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  area: "",
  message: "",
};

const AboutPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-kmk-blueberry/20 text-[#333333]">
        {/* Hero Section with Background Image */}
        <section className="relative h-[400px]">
          <div className="absolute inset-0">
            <Image
              src="/home-hero.jpg"
              alt="About Us Hero"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="relative container mx-auto h-full flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-white mb-4">About Us</h1>
            <p className="text-lg leading-relaxed mb-6 text-white text-center max-w-2xl">
              At KMK Legal, we pride ourselves on delivering exceptional legal
              services with a personal touch. Our team of experienced
              professionals is dedicated to providing comprehensive legal
              solutions tailored to your specific needs.
            </p>
            <p className="text-lg leading-relaxed text-white text-center max-w-2xl">
              With decades of combined experience across various areas of law,
              we understand the complexities of legal challenges and work
              tirelessly to achieve the best possible outcomes for our clients.
            </p>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <div
          id="meet-our-team"
          className="scroll-mt-navbarMobile md:scroll-mt-navbar"
        >
          <ThreeStepGrid features={teamMembers} title="Meet Our Team" />
        </div>

        {/* Our Ethos Section */}
        <section
          className="relative py-16 scroll-mt-navbarMobile md:scroll-mt-navbar"
          id="ethos"
        >
          <div
            className="absolute inset-0 bg-gray-50"
            style={{
              clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
            }}
          />
          <div className="container mx-auto relative">
            <h2 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
              Our Ethos
            </h2>
            <div className="prose max-w-3xl mx-auto">
              <p className="text-center mb-6">
                We believe in delivering justice with compassion, integrity, and
                excellence. Our commitment goes beyond legal representation – we
                strive to be your trusted partner in navigating life&apos;s
                legal challenges.
              </p>
              <p className="text-center">
                Our values of transparency, professionalism, and client-focused
                service guide everything we do. We understand that each
                client&apos;s situation is unique, and we take pride in offering
                personalized solutions that address your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment to Excellence Section */}
        <section
          className="py-16 scroll-mt-navbarMobile md:scroll-mt-navbar"
          id="excellence"
        >
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="/excellence.jpg"
                alt="Commitment to Excellence"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-6xl font-bold mb-8 text-kmk-logoBlue">
                Commitment to Excellence
              </h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Our commitment to excellence drives everything we do. We
                  continuously strive to provide the highest quality legal
                  services and maintain the highest professional standards in
                  all our dealings.
                </p>
                <p className="mb-4">
                  With decades of combined experience and a dedication to
                  staying at the forefront of legal developments, we ensure that
                  our clients receive exceptional service and expert guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section
          className="relative py-16 scroll-mt-navbarMobile md:scroll-mt-navbar"
          id="review"
        >
          <div
            className="absolute inset-0 bg-gray-50"
            style={{
              clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
            }}
          />
          <div className="container mx-auto relative">
            <h2 className="text-6xl font-bold text-center mb-12 text-kmk-logoBlue">
              Leave us a Review
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  className="w-full max-w-md rounded-lg"
                >
                  <Link
                    href="https://g.page/r/YOUR-GOOGLE-REVIEW-LINK"
                    className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-[300px]"
                  >
                    <div className="flex flex-col items-center space-y-4 h-full justify-center">
                      <Image
                        src="/google-review-logo.png"
                        alt="Google Review"
                        width={256}
                        height={256}
                      />
                      <span className="text-xl font-semibold text-kmk-logoBlue">
                        Google Review
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </div>

              <div className="flex flex-col items-center">
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  className="w-full max-w-md rounded-lg"
                >
                  <Link
                    href="https://www.reviewsolicitors.co.uk/YOUR-PROFILE"
                    className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-[300px]"
                  >
                    <div className="flex flex-col items-center space-y-4 h-full justify-center">
                      <Image
                        src="/review-solicitors-logo.png"
                        alt="Review Solicitor"
                        width={256}
                        height={256}
                      />
                      <span className="text-xl font-semibold text-kmk-logoBlue">
                        ReviewSolicitors
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Not Happy Section */}
        <section
          className="py-16 scroll-mt-navbarMobile md:scroll-mt-navbar"
          id="complaints"
        >
          <div className="container mx-auto">
            <h2 className="text-6xl font-bold text-center mb-8 text-kmk-logoBlue">
              Not Happy with Something?
            </h2>
            <div className="prose max-w-3xl mx-auto text-center">
              <p className="mb-8">
                We value your feedback and are committed to providing the best
                possible service. If you&apos;re not completely satisfied, we
                want to hear from you.
              </p>
              <div className="text-left">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    console.log("Form submitted:", values);
                    resetForm();
                    setSubmitting(false);
                  }}
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
                          <label htmlFor="name" className="text-sm font-medium">
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
                          <Field
                            as={Input}
                            id="phone"
                            name="phone"
                            type="tel"
                            className="transition-colors hover:border-kmk-logoBlue focus:border-kmk-logoBlue"
                          />
                        </motion.div>
                        <motion.div
                          className="space-y-2"
                          variants={buttonVariants}
                          whileHover="whileHover"
                          whileTap="whileTap"
                        >
                          <label htmlFor="area" className="text-sm font-medium">
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
                          Message*
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
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default AboutPage;
