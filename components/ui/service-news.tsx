import { Card, CardContent } from "@/components/ui/card";

interface ServiceNewsProps {
  title: string;
  latestNews: string[];
  upcomingEvents: string[];
  additionalInformation: string[];
}

const ServiceNews = ({
  title,
  latestNews,
  upcomingEvents,
  additionalInformation,
}: ServiceNewsProps) => {
  return (
    <section
      className="py-16 scroll-mt-navbarMobile md:scroll-mt-navbar"
      id="latest-news"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-kmk-logoBlue mb-8">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Latest News</h3>
              <ul className="space-y-2">
                {latestNews.map((news, index) => (
                  <li key={index}>{news}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
                <ul className="space-y-2">
                  {upcomingEvents.map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Additional Information
                </h3>
                <ul className="space-y-2">
                  {additionalInformation.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceNews;
