import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
  SiTwitter,
} from "react-icons/si";
import { getFooterData } from "@/lib/api";
import Link from "next/link";
import Container from "./Container";

const generateSocialIcon = (platform) => {
  if (platform == "facebook") {
    return <SiFacebook />;
  }
  if (platform == "instagram") {
    return <SiInstagram />;
  }
  if (platform == "linkedin") {
    return <SiLinkedin />;
  }
  if (platform == "youtube") {
    return <SiYoutube />;
  }
  if (platform == "twitter") {
    return <SiTwitter />;
  }
};

const Footer = async () => {
  const footerData = await getFooterData();

  return (
    <footer className="border-t-2 border-t-gray-300 dark:border-t-zinc-700 py-8 ">
      <Container>
        <div className="flex gap-8 md:gap-16 flex-col md:flex-row justify-between items-center">
          <div className="flex gap-8 md:gap-16 flex-col md:flex-row text-center md:text-right">
            {footerData.sections.map((section) => (
              <div
                key={section.id}
                className="flex flex-col md:gap-y-4 gap-y-2"
              >
                <h2 className="mb-4 mt-4 text-2xl">{section.label}</h2>
                {section.links.map((link) => (
                  <Link key={link.id} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex gap-8 ">
            {footerData.socialLinks.map((socialLink) => (
              <a
                key={socialLink.id}
                href={socialLink.url}
                target="_blank"
                rel="noreferrer"
                className=" inline-block h-6 w-6 md:h-8 md:w-8"
              >
                {generateSocialIcon(socialLink.platform)}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <p className="text-center ">
            {" "}
            &copy; {new Date().getFullYear()} Black-Panda. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
