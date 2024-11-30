"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/app/globals/framer-variants";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageLoadTransitionWrapper from "@/components/ui/page-load-transition-wrapper";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";
import { showToast } from "@/lib/toast-utils";

const validationSchema = Yup.object({
  area: Yup.string().required("Please select an area of law"),
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  surname: Yup.string()
    .required("Surname is required")
    .min(2, "Surname must be at least 2 characters"),
  phone: Yup.string().required("Contact number is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  enquiry: Yup.string()
    .required("Please enter your enquiry")
    .min(10, "Please provide more detail"),
  contactPreference: Yup.string(),
  source: Yup.string(),
});

const initialValues = {
  area: "",
  firstName: "",
  surname: "",
  phone: "",
  email: "",
  enquiry: "",
  contactPreference: "",
  source: "",
};

const ContactPage = () => {
  return (
    <PageLoadTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-kmk-blueberry/20 text-[#333333]">
        {/* Hero Section */}
        <section className="relative py-16">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
            }}
          />
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column - Text content */}
              <div className="space-y-6">
                <h1 className="text-6xl font-bold text-kmk-logoBlue">
                  Contact Us
                </h1>
                <div className="prose max-w-none">
                  <p className="text-lg mb-6">
                    We&apos;re here to help with all your legal needs. Get in
                    touch with our team of experts today.
                  </p>
                  <div className="w-full h-px bg-gray-200 my-6"></div>
                  <p className="text-lg mb-6">
                    Details about how we operate. Our commitment to providing
                    excellent legal services and support to our clients.
                  </p>
                </div>
              </div>

              {/* Right column - Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/contact-us.jpg"
                  alt="Contact Us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Office Details Section */}
        <section className="relative py-16">
          <div
            className="absolute inset-0 bg-gray-50"
            style={{
              clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
            }}
          />
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold text-kmk-logoBlue mb-8">
              Office Details
            </h2>

            {/* Office Image */}
            <div className="mb-8 rounded-xl overflow-hidden">
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src="/our-office.jpg"
                      alt="Contact Us"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps and Office Location */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.976404973131!2d-0.45930437066449703!3d51.90688349000813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876360018f62c49%3A0x33fa5303edefd681!2sLuton!5e0!3m2!1sen!2suk!4v1732039563773!5m2!1sen!2suk"
                ></iframe>
              </div>
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
                  <h3 className="font-semibold text-xl mb-2">Get in Touch</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Phone: 01234 567890</p>
                    <p>Email: info@kmklegal.com</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-16">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)",
            }}
          />
          <div className="container mx-auto px-4 relative">
            <h2 className="text-6xl font-bold text-kmk-logoBlue mb-8 text-center">
              Get in touch with us
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                const loadingToastId = toast.loading("Sending your enquiry...");

                try {
                  setSubmitting(true);

                  const templateParams = {
                    area: values.area,
                    firstName: values.firstName,
                    surname: values.surname,
                    phone: values.phone,
                    email: values.email,
                    enquiry: values.enquiry,
                    contactPreference:
                      values.contactPreference || "Not specified",
                    source: values.source || "Not specified",
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
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="max-w-2xl mx-auto space-y-6">
                  {/* Area of Law Select */}
                  <motion.div
                    className="space-y-2"
                    variants={buttonVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <label htmlFor="area" className="text-sm font-medium">
                      What is the nature of your enquiry?*
                    </label>
                    <Field
                      as="select"
                      id="area"
                      name="area"
                      className={`w-full p-2 border border-gray-300 rounded-md bg-white focus:border-kmk-logoBlue focus:ring-1 focus:ring-kmk-logoBlue transition-colors hover:border-kmk-logoBlue ${
                        errors.area && touched.area ? "border-red-500" : ""
                      }`}
                    >
                      <option value="">-- Select an area of law --</option>
                      <option value="conveyancing">Conveyancing</option>
                      <option value="family">Family Law</option>
                      <option value="commercial">Commercial Property</option>
                      <option value="children">Children Law</option>
                      <option value="estate">Estate Planning</option>
                      <option value="trusts">Trusts</option>
                    </Field>
                    {errors.area && touched.area && (
                      <p className="text-red-500 text-sm">{errors.area}</p>
                    )}
                  </motion.div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      variants={buttonVariants}
                      whileHover="whileHover"
                      whileTap="whileTap"
                    >
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name*
                      </label>
                      <Field
                        as={Input}
                        id="firstName"
                        name="firstName"
                        className={`${
                          errors.firstName && touched.firstName
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="text-red-500 text-sm">
                          {errors.firstName}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      variants={buttonVariants}
                      whileHover="whileHover"
                      whileTap="whileTap"
                    >
                      <label htmlFor="surname" className="text-sm font-medium">
                        Surname*
                      </label>
                      <Field
                        as={Input}
                        id="surname"
                        name="surname"
                        className={`${
                          errors.surname && touched.surname
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      {errors.surname && touched.surname && (
                        <p className="text-red-500 text-sm">{errors.surname}</p>
                      )}
                    </motion.div>
                  </div>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      variants={buttonVariants}
                      whileHover="whileHover"
                      whileTap="whileTap"
                    >
                      <label htmlFor="phone" className="text-sm font-medium">
                        Contact Number*
                      </label>
                      <Field
                        as={Input}
                        id="phone"
                        name="phone"
                        type="tel"
                        className={`${
                          errors.phone && touched.phone ? "border-red-500" : ""
                        }`}
                      />
                      {errors.phone && touched.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      variants={buttonVariants}
                      whileHover="whileHover"
                      whileTap="whileTap"
                    >
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address*
                      </label>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        className={`${
                          errors.email && touched.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </motion.div>
                  </div>

                  {/* Enquiry Details */}
                  <motion.div
                    className="space-y-2"
                    variants={buttonVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <label htmlFor="enquiry" className="text-sm font-medium">
                      What is your enquiry?*
                    </label>
                    <Field
                      as={Textarea}
                      id="enquiry"
                      name="enquiry"
                      rows={4}
                      className={`${
                        errors.enquiry && touched.enquiry
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {errors.enquiry && touched.enquiry && (
                      <p className="text-red-500 text-sm">{errors.enquiry}</p>
                    )}
                  </motion.div>

                  {/* Contact Preference */}
                  <motion.div
                    className="space-y-2"
                    variants={buttonVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <label
                      htmlFor="contactPreference"
                      className="text-sm font-medium"
                    >
                      Preferred method of contact?
                    </label>
                    <Field
                      as="select"
                      id="contactPreference"
                      name="contactPreference"
                      className="w-full p-2 border border-gray-300 rounded-md bg-white focus:border-kmk-logoBlue focus:ring-1 focus:ring-kmk-logoBlue"
                    >
                      <option value="">-- Please choose an option --</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </Field>
                  </motion.div>

                  {/* How did you hear about us */}
                  <motion.div
                    className="space-y-2"
                    variants={buttonVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <label htmlFor="source" className="text-sm font-medium">
                      How did you hear about us?
                    </label>
                    <Field
                      as="select"
                      id="source"
                      name="source"
                      className="w-full p-2 border border-gray-300 rounded-md bg-white focus:border-kmk-logoBlue focus:ring-1 focus:ring-kmk-logoBlue"
                    >
                      <option value="">-- Please choose an option --</option>
                      <option value="google">Google</option>
                      <option value="referral">Referral</option>
                      <option value="social">Social Media</option>
                      <option value="other">Other</option>
                    </Field>
                  </motion.div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                    className="w-full bg-kmk-logoBlue text-white hover:bg-kmk-blueberry"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </div>
    </PageLoadTransitionWrapper>
  );
};

export default ContactPage;
