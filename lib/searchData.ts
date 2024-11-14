export type SearchItem = {
  title: string;
  description: string;
  url: string;
  category: string;
};

export const searchData: SearchItem[] = [
  {
    title: "Conveyancing Services",
    description: "Expert legal support for property transactions",
    url: "/services/conveyancing",
    category: "Services",
  },
  {
    title: "Matrimonial & Family Law",
    description:
      "Comprehensive legal support for all matrimonial and family matters",
    url: "/services/family-law",
    category: "Services",
  },
  {
    title: "About Us",
    description: "Learn more about our team and our mission",
    url: "/about",
    category: "About",
  },
  {
    title: "Contact Us",
    description: "Get in touch with us for any inquiries or appointments",
    url: "/contact",
    category: "Contact",
  },
  {
    title: "Team",
    description: "Meet our team of experienced professionals",
    url: "/about/team",
    category: "About",
  },
  // Add all your pages here
];
