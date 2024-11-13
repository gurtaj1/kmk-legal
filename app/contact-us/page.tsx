"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-kmk-originalBlue">
              Contact Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-2" />
                  <span>info@kmklegal.co.uk</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" />
                  <span>+447389109307</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2" />
                  <span>Luton</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUsPage;
