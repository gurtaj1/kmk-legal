import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import SmartCarousel from "@/components/ui/smart-carousel";
import { cardVariants } from "@/app/globals/framer-variants";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  profileUrl: string;
};

type Testimonial = {
  text: string;
  author: string;
  rating?: number;
};

interface ExpertiseAndTeamSectionProps {
  title: string;
  description: string;
  specialties: string[];
  testimonials: Testimonial[];
  teamMembers: TeamMember[];
}

const ExpertiseAndTeamSection = ({
  title,
  description,
  specialties,
  testimonials,
  teamMembers,
}: ExpertiseAndTeamSectionProps) => {
  return (
    <section
      className="py-16 bg-gray-50 scroll-mt-navbarMobile md:scroll-mt-navbar"
      id="expertise"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-full">
          {/* Left Column - Expertise and Testimonials */}
          <div className="space-y-8 min-w-0">
            <div className="prose prose-lg max-w-full min-w-0">
              <h2 className="text-3xl font-bold text-kmk-logoBlue mb-6">
                {title}
              </h2>
              <p className="text-lg mb-4 break-words">{description}</p>
              <p className="text-lg mb-4">Our dedicated team specialises in:</p>
              <ul className="list-disc pl-6 space-y-2">
                {specialties.map((specialty, index) => (
                  <li key={index} className="break-words">
                    {specialty}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-kmk-logoBlue mb-6">
                What Our Clients Say
              </h3>
              <SmartCarousel
                items={testimonials.map((testimonial, index) => (
                  <div
                    className="p-4 sm:p-6 bg-white rounded-lg shadow"
                    key={`testimonial-slide-${index}`}
                  >
                    <p className="mb-4 break-words">{testimonial.text}</p>
                    <p className="font-semibold break-words">
                      {testimonial.author}
                    </p>
                  </div>
                ))}
                slidesToShow={1}
                autoplay={true}
              />
            </div>
          </div>

          {/* Right Column - Team Members */}
          <div>
            <h2 className="text-3xl font-bold text-kmk-logoBlue mb-6">
              Our Team
            </h2>
            <div className="grid gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 w-full rounded-lg"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <Link href={member.profileUrl} className="w-full">
                    <Card className="hover:shadow-lg transition-shadow w-full">
                      <CardContent className="p-6 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden">
                            <Image
                              src={member.imageSrc}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">
                              {member.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAndTeamSection;
