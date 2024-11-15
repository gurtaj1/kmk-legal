'use client'

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Card, CardContent } from "@/components/ui/card"

export function BlockPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="tel:01582123456" className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              01582 123 456
            </Link>
            <Link href="mailto:info@uklegal.co.uk" className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              info@uklegal.co.uk
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px]"
            />
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-primary rounded-full" />
              <span className="text-2xl font-bold">Legal Company</span>
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <nav className="grid gap-2">
                        <Link href="/about" className="text-sm">Company Overview</Link>
                        <Link href="/team" className="text-sm">Our Team</Link>
                      </nav>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <nav className="grid gap-2">
                        <Link href="/resources" className="text-sm">Legal Resources</Link>
                        <Link href="/news" className="text-sm">Latest News</Link>
                      </nav>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 bg-muted">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-4">Your Trusted Legal Partner</h1>
            <p className="text-xl text-center text-muted-foreground mb-8">Providing expert legal services for over 25 years</p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
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
              <div className="space-y-4">
                <Button className="w-full">Arrange a Callback</Button>
                <Button variant="outline" className="w-full">Get a Free Quote</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Conveyancing</h3>
                  <p className="text-muted-foreground">Expert property law services for buying and selling properties.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Commercial Property</h3>
                  <p className="text-muted-foreground">Comprehensive legal support for business property matters.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Family Law</h3>
                  <p className="text-muted-foreground">Sensitive handling of family legal matters and disputes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Civil Law</h3>
                  <p className="text-muted-foreground">Expert representation in civil litigation cases.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Estate Planning</h3>
                  <p className="text-muted-foreground">Professional will writing and estate planning services.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Trusts</h3>
                  <p className="text-muted-foreground">Specialist advice on trust formation and management.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Accreditations & Awards</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-background rounded-lg p-4 aspect-square flex items-center justify-center">
                  <div className="w-16 h-16 bg-muted rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <p className="mb-4">"Excellent service and professional advice throughout the whole process."</p>
                    <p className="font-semibold">Client Name</p>
                    <p className="text-sm text-muted-foreground">Service Used: Conveyancing</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <form className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="area" className="text-sm font-medium">Area of Law</label>
                    <Input id="area" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" required />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="subscribe" />
                  <label htmlFor="subscribe" className="text-sm">Subscribe to our updates</label>
                </div>
                <Button type="submit" className="w-full">Send Enquiry</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container py-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 bg-primary rounded-full" />
                <span className="text-xl font-bold">Legal Company</span>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="grid gap-2 text-sm">
              <Link href="/legal-notice" className="hover:underline">Legal Notice</Link>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link>
              <Link href="/terms" className="hover:underline">Website Terms & Conditions</Link>
              <Link href="/accessibility" className="hover:underline">Accessibility</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Legal Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}