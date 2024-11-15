"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import LogoColor from "@/components/svg/logo-color";

import { cardVariants, buttonVariants } from "@/app/globals/framer-variants";
import SmartCarousel from "@/components/ui/smart-carousel";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="py-12 bg-muted relative"
        style={{
          backgroundImage: "url('/home-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-start align-middle">
            <LogoColor className="w-20 h-10" mFill="#fff" />
            <h1 className="text-4xl font-bold mb-2 text-white">KMK LEGAL</h1>
          </div>
          <p className="text-xl text-white/80 mb-8">
            Providing expert legal services for over 25 years
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/95">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Slogans</h2>
                <ul className="space-y-2">
                  <li>&quot;Justice You Can Trust&quot;</li>
                  <li>&quot;Your Rights, Our Priority&quot;</li>
                  <li>&quot;Excellence in Legal Care&quot;</li>
                  <li>&quot;Partners in Justice&quot;</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/95">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Ethos</h2>
                <p className="text-muted-foreground mb-3">
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
                <Button className="w-full">Arrange a Callback</Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Button variant="outline" className="w-full">
                  Get a Free Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-kmk-logoBlue">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/conveyancing" className="h-full">
              <motion.div
                className="rounded-xl h-full"
                variants={cardVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Card className="h-full bg-kmk-blueberry/20 hover:bg-kmk-emeraldGreen/50 group">
                  <CardContent className="p-6 flex flex-col h-full text-kmk-logoBlue">
                    <h3 className="text-xl font-semibold mb-2">Conveyancing</h3>
                    <div className="rounded-xl overflow-hidden h-48 mb-4">
                      <img
                        src="/residential-conveyancing.jpg"
                        alt="Conveyancing"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <p className="text-muted-foreground text-black">
                      Expert property law services for buying and selling
                      properties.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
            <Link href="/services/commercial-property" className="h-full">
              <motion.div
                className="rounded-xl h-full"
                variants={cardVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Card className="h-full bg-kmk-blueberry/20 hover:bg-kmk-emeraldGreen/50 group">
                  <CardContent className="p-6 flex flex-col h-full text-kmk-logoBlue">
                    <h3 className="text-xl font-semibold mb-2">
                      Commercial Property
                    </h3>
                    <div className="rounded-xl overflow-hidden h-48 mb-4">
                      <img
                        src="/commercial-conveyancing.jpg"
                        alt="Commercial Property"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <p className="text-muted-foreground text-black">
                      Comprehensive legal support for business property matters.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
            <Link href="/services/family-law" className="h-full">
              <motion.div
                className="rounded-xl h-full"
                variants={cardVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Card className="h-full bg-kmk-blueberry/20 hover:bg-kmk-emeraldGreen/50 group">
                  <CardContent className="p-6 flex flex-col h-full text-kmk-logoBlue">
                    <h3 className="text-xl font-semibold mb-2">Family Law</h3>
                    <div className="rounded-xl overflow-hidden h-48 mb-4">
                      <img
                        src="/family-law.jpg"
                        alt="Family Law"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <p className="text-muted-foreground text-black">
                      Sensitive handling of family legal matters and disputes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
            <Link href="/services/children-law" className="h-full">
              <motion.div
                className="rounded-xl h-full"
                variants={cardVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Card className="h-full bg-kmk-blueberry/20 hover:bg-kmk-emeraldGreen/50 group">
                  <CardContent className="p-6 flex flex-col h-full text-kmk-logoBlue">
                    <h3 className="text-xl font-semibold mb-2">Children Law</h3>
                    <div className="rounded-xl overflow-hidden h-48 mb-4">
                      <img
                        src="/children-law.jpg"
                        alt="Children Law"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <p className="text-muted-foreground text-black">
                      Expert representation in children law cases.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
            <Link href="/services/estate-planning" className="h-full">
              <motion.div
                className="rounded-xl h-full"
                variants={cardVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Card className="h-full bg-kmk-blueberry/20 hover:bg-kmk-emeraldGreen/50 group">
                  <CardContent className="p-6 flex flex-col h-full text-kmk-logoBlue">
                    <h3 className="text-xl font-semibold mb-2">
                      Estate Planning
                    </h3>
                    <div className="rounded-xl overflow-hidden h-48 mb-4">
                      <img
                        src="/estate-planning.jpg"
                        alt="Estate Planning"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <p className="text-muted-foreground text-black">
                      Professional will writing and estate planning services.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
            <Link href="/services/trusts" className="h-full">
              <motion.div
                className="rounded-xl h-full"
                variants={cardVariants}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Card className="h-full bg-kmk-blueberry/20 hover:bg-kmk-emeraldGreen/50 group">
                  <CardContent className="p-6 flex flex-col h-full text-kmk-logoBlue">
                    <h3 className="text-xl font-semibold mb-2">Trusts</h3>
                    <div className="rounded-xl overflow-hidden h-48 mb-4">
                      <img
                        src="/trust-law.jpg"
                        alt="Trusts"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <p className="text-muted-foreground text-black">
                      Specialist advice on trust formation and management.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
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
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Client Testimonials
          </h2>
          <SmartCarousel
            items={[...Array(6)].map((_, i) => (
              <Card key={i} className="mx-2">
                <CardContent className="p-6">
                  <p className="mb-4">
                    &quot;Excellent service and professional advice throughout
                    the whole process.&quot;
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
        </div>
      </section>
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Form Column */}
            <div className="lg:col-span-2">
              <form className="grid gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    className="space-y-2"
                    variants={buttonVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      required
                      className="transition-colors hover:border-kmk-logoBlue focus:border-kmk-logoBlue"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    variants={buttonVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="transition-colors hover:border-kmk-logoBlue focus:border-kmk-logoBlue"
                    />
                  </motion.div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    className="space-y-2"
                    variants={buttonVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
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
                    <Input
                      id="area"
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
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    className="transition-colors hover:border-kmk-logoBlue focus:border-kmk-logoBlue"
                  />
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  variants={buttonVariants}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <Checkbox id="subscribe" />
                  <label htmlFor="subscribe" className="text-sm">
                    Subscribe to our updates
                  </label>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <Button type="submit" className="w-full">
                    Send Enquiry
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
