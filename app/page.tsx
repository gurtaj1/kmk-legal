"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

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
          <h1 className="text-4xl font-bold mb-4 text-white">
            Your Trusted Legal Partner
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Providing expert legal services for over 25 years
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/95">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="space-y-2">
                  <li>✓ Expert legal advice</li>
                  <li>✓ Personalized service</li>
                  <li>✓ Proven track record</li>
                  <li>✓ Competitive rates</li>
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
                  navigating life's legal challenges.
                </p>
                <div className="text-sm font-medium">
                  "Justice with a personal touch"
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4 flex flex-col justify-center">
              <Button className="w-full">Arrange a Callback</Button>
              <Button variant="outline" className="w-full">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Conveyancing</h3>
                <p className="text-muted-foreground">
                  Expert property law services for buying and selling
                  properties.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Commercial Property
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive legal support for business property matters.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Family Law</h3>
                <p className="text-muted-foreground">
                  Sensitive handling of family legal matters and disputes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Civil Law</h3>
                <p className="text-muted-foreground">
                  Expert representation in civil litigation cases.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Estate Planning</h3>
                <p className="text-muted-foreground">
                  Professional will writing and estate planning services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Trusts</h3>
                <p className="text-muted-foreground">
                  Specialist advice on trust formation and management.
                </p>
              </CardContent>
            </Card>
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
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i}>
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
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="area" className="text-sm font-medium">
                    Area of Law
                  </label>
                  <Input id="area" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" required />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="subscribe" />
                <label htmlFor="subscribe" className="text-sm">
                  Subscribe to our updates
                </label>
              </div>
              <Button type="submit" className="w-full">
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
