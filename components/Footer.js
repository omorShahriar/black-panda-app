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
    return <SiFacebook size={30} />;
  }
  if (platform == "instagram") {
    return <SiInstagram size={30} />;
  }
  if (platform == "linkedin") {
    return <SiLinkedin size={30} />;
  }
  if (platform == "youtube") {
    return <SiYoutube size={30} />;
  }
  if (platform == "twitter") {
    return <SiTwitter size={30} />;
  }
};

const Footer = async () => {
  const footerData = await getFooterData();

  return (
    <footer className="border-t-2 border-t-gray-300 dark:border-t-zinc-700 py-8 ">
      <Container>
        <div className="flex gap-16 justify-between items-center">
          <div className="flex gap-16">
            {footerData.sections.map((section) => (
              <div key={section.id} className="flex flex-col gap-y-4">
                <h2 className="mb-4 mt-4 text-2xl">{section.label}</h2>
                {section.links.map((link) => (
                  <Link key={link.id} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex gap-8">
            {footerData.socialLinks.map((socialLink) => (
              <a
                key={socialLink.id}
                href={socialLink.url}
                target="_blank"
                rel="noreferrer"
                className=" inline-block "
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
