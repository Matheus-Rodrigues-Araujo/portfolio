import { Orbitron, Raleway } from "next/font/google";
import { Metadata } from "next";
import Header from "../../components/header";
import Footer from "../../components/footer";

import './globals.css'
import '../../styles/introduction.css'
import '../../styles/about.css'
import '../../styles/projects.css'
import '../../styles/contact.css'
import '../../styles/header.css'

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const jsonLd = {
  "@context": "https://matheuswebcoder.vercel.app",
  "@type": "Person",
  name: "MatheusWebCoder - Front-End Developer",
  image: "/logo.svg",
  description:
    "Welcome to my portfolio! I'm Matheus, a skilled front-end developer proficient in JavaScript, TypeScript, React, Next.js, and more. Explore my projects.",
};

export const metadata: Metadata = {
  title: {
    default: "Portfolio | MatheusWebCoder - Front-End Developer",
    template: "Portfolio |MatheusWebCoder - Front-End Developer",
  },
  generator: "Next.js",
  applicationName: "MatheusWebCoder",
  referrer: "origin-when-cross-origin",
  authors: [
    {
      name: "Matheus Rodrigues Araujo",
      url: "https://matheuswebcoder.vercel.app",
    },
  ],
  creator: "Matheus Rodrigues Araujo",
  publisher: "Matheus Rodrigues Araujo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  description:
    "Welcome to my portfolio! I'm Matheus, a skilled front-end developer proficient in JavaScript, TypeScript, React, Next.js, and more. Explore my projects.",
  icons: {
    icon: "/logo.svg",
  },
  keywords: [
    "Matheus",
    "portfolio de MatheusWebCoder",
    "portfolio de frontend",
    "Desenvolvedor",
    "Programador",
    "MatheusWebCoder",
    "Desenvolvimento Web",
    "Desenvolvedor Front-End",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "UI/UX",
    "Version Control",
    "Git",
    "GitHub",
    "Agile Methodologies",
    "Scrum",
    "Code Optimization",
    "SEO Optimization",
    "Performance Optimization",
    "Progressive Web Apps",
    "Single Page Applications",
    "API Integration",
    "User Authentication",
    "RESTful APIs",
    "Frontend",
    "Frontend Developer",
    "Portfolio",
    "Portfólio",
    "JavaScript",
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "SQL",
    "NoSQL",
    "MongoDB",
    "MySQL",
    "Node.js",
    "Express.js",
    "Bootstrap",
    "Jest",
    "Web Development",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://matheuswebcoder.vercel.app"),
  alternates: {
    canonical: "/",
  },
  category: "technology",
  openGraph: {
    type: "website",
    title: "Portfolio | MatheusWebCoder - Front-End Developer",
    description:
      "Welcome to my portfolio! I'm Matheus, a skilled front-end developer proficient in JavaScript, TypeScript, React, Next.js, and more. Explore my projects.",
    url: "https://matheuswebcoder.vercel.app",
    siteName: "MatheusWebCoder",
    images: {
      url: "https://matheuswebcoder.vercel.app/logo.svg",
      width: 800,
      height: 600,
    },
  },
  verification: {
    google: "_1aY2_CMIIoL8pn4_5u0D1krdCCwkTF49ciJcFthFg4",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className={`${orbitron.variable} ${raleway.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
