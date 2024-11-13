"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Home, Briefcase, Star } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/home-hero.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ textShadow: "1px 1px 2px #fff" }}
          >
            Expert Property Law
            <br />
            Services in England
          </h1>
          <Button
            asChild
            size="lg"
            className="mb-4 bg-[#013220] hover:bg-kmk-originalBlue text-white"
          >
            <Link href="/quote-calculator">Get a Quote</Link>
          </Button>
          <p className="text-xl md:text-2xl text-white">
            Your trusted partner for all your property needs
          </p>
        </div>
      </section>

      {/* Quality of Service Section */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-kmk-originalBlue">
            Exceptional Legal Services
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            At KMK Legal, we pride ourselves on delivering top-notch
            conveyancing services. Our team of experienced solicitors ensures a
            smooth and efficient property transaction process.
          </p>
          <p className="mb-4 font-semibold text-kmk-originalBlue">
            Already have a quote? Contact us today!
          </p>
          <Button
            asChild
            className="bg-[#013220] hover:bg-kmk-originalBlue text-white"
          >
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Services Graphic Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-white border border-kmk-originalBlue">
              <CardHeader>
                <Home className="w-12 h-12 mx-auto mb-2 text-[#013220]" />
                <CardTitle className="text-kmk-originalBlue">Buying</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Expert guidance for property purchases</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-kmk-originalBlue">
              <CardHeader>
                <Briefcase className="w-12 h-12 mx-auto mb-2 text-[#013220]" />
                <CardTitle className="text-kmk-originalBlue">Selling</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Smooth process for property sales</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-kmk-originalBlue">
              <CardHeader>
                <Home className="w-12 h-12 mx-auto mb-2 text-[#013220]" />
                <Briefcase className="w-12 h-12 mx-auto mb-2 text-[#013220]" />
                <CardTitle className="text-kmk-originalBlue">Both?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive services for buying and selling</p>
              </CardContent>
            </Card>
          </div>
          <Button
            asChild
            size="lg"
            className="mb-4 bg-[#013220] hover:bg-kmk-originalBlue text-white"
          >
            <Link href="/quote-calculator">Get a Free Quote Now</Link>
          </Button>
          <div className="flex justify-center space-x-4 mb-4">
            <Button
              asChild
              variant="outline"
              className="border-kmk-originalBlue text-kmk-originalBlue hover:bg-kmk-originalBlue hover:text-white"
            >
              <Link href="/purchase-info">Purchase Info</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-kmk-originalBlue text-kmk-originalBlue hover:bg-kmk-originalBlue hover:text-white"
            >
              <Link href="/sale-info">Sale Info</Link>
            </Button>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-kmk-originalBlue text-kmk-originalBlue hover:bg-kmk-originalBlue hover:text-white"
          >
            <Link href="/linked-purchase-sale-info">
              Linked Purchase and Sale Info
            </Link>
          </Button>
        </div>
      </section>

      {/* Smooth Process Section */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="container mx-auto">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Beautiful home with nature background"
            width={1200}
            height={400}
            className="w-full h-64 object-cover mb-8 rounded-lg"
          />
          <h2 className="text-3xl font-bold text-center mb-8 text-kmk-originalBlue">
            Your Smooth Property Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border border-kmk-originalBlue">
              <CardHeader>
                <CardTitle className="text-kmk-originalBlue">
                  1. Do It Online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Convenient online process for all your property transactions
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-kmk-originalBlue">
              <CardHeader>
                <CardTitle className="text-kmk-originalBlue">
                  2. Stay in the Loop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Regular updates and transparent communication throughout</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-kmk-originalBlue">
              <CardHeader>
                <CardTitle className="text-kmk-originalBlue">
                  3. Move Sooner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Efficient processes to help you move into your new home faster
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-kmk-originalBlue">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white border border-kmk-originalBlue">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Residential Conveyancing"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="mt-4 text-kmk-originalBlue">
                  Residential Conveyancing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Expert legal assistance for buying, selling, or remortgaging
                  residential properties in the UK market.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  asChild
                  className="bg-[#013220] hover:bg-kmk-originalBlue text-white"
                >
                  <Link href="/quote-calculator">Get a Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-kmk-originalBlue text-kmk-originalBlue hover:bg-kmk-originalBlue hover:text-white"
                >
                  <Link href="/residential-conveyancing">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-white border border-kmk-originalBlue">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Commercial Conveyancing"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="mt-4 text-kmk-originalBlue">
                  Commercial Conveyancing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Comprehensive legal services for commercial property
                  transactions in the UK, including leases and property
                  development.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  asChild
                  className="bg-[#013220] hover:bg-kmk-originalBlue text-white"
                >
                  <Link href="/quote-calculator">Get a Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-kmk-originalBlue text-kmk-originalBlue hover:bg-kmk-originalBlue hover:text-white"
                >
                  <Link href="/commercial-conveyancing">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-kmk-originalBlue">
            What Our Clients Say
          </h2>
          <Carousel>
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((review) => (
                <CarouselItem
                  key={review}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="bg-white border border-kmk-originalBlue">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="w-5 h-5 text-[#FFD700]" />
                        <Star className="w-5 h-5 text-[#FFD700]" />
                        <Star className="w-5 h-5 text-[#FFD700]" />
                        <Star className="w-5 h-5 text-[#FFD700]" />
                        <Star className="w-5 h-5 text-[#FFD700]" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        "Excellent service from KMK Legal. They made our
                        property purchase smooth and stress-free."
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-[#333333]">John Doe</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-kmk-originalBlue">
            Find Us
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8088025254456!2d-0.4137013840820206!3d51.87967397970151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48764144b18d4d2d%3A0x44436b0c5b275f8c!2sLuton!5e0!3m2!1sen!2suk!4v1635000000000!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KMK Legal Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
