import { Orbitron, Raleway } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

import "../../styles/header.css";
import "../../styles/footer.css";

import "../../styles/introduction.css";
import "../../styles/about.css";
import "../../styles/projects.css";
import "../../styles/contact.css";

import Header from "../../components/header";
import Footer from "../../components/footer";

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron',
  display: 'swap', 
});

const raleway = Raleway({
   subsets: ["latin"],
   variable: '--font-raleway',
   display: 'swap'
});

export const metadata: Metadata = {
  authors: [
    {
      name: "Matheus Rodrigues Araujo",
      url: "https://matheuswebcoder.vercel.app",
    },
  ],
  creator: "Matheus Rodrigues Araujo",
  title: "MatheusWebCoder - Front-End Developer",
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
    "Web Development"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://matheuswebcoder.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  category: "technology",
  openGraph: {
    type: "website",
    title: "MatheusWebCoder - Front-End Developer",
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
    google: "0JFUc9cYBnpMRju-7iqgXnL-Ipvl_239-Dpq19X2S5o",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${raleway.variable}`}>
      <body>
        <Header />
        <main className="gap-10 pt-20 md:pt-0 md:gap-60 lg:pt-0 grid grid-flow-row md:auto-rows-[1fr_1fr_1fr_1fr] ">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "MatheusWebCoder",
              jobTitle: "Front-End Developer",
              url: "https://matheuswebcoder.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/matheus-rodrigues-araujo",
                "https://github.com/Matheus-Rodrigues-Araujo",
                "https://www.instagram.com/_matheus_rodrigues_araujo_/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
