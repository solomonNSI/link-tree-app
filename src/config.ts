import AppLogo from "./assets/icons/app-logo.svg";
import Official from "./assets/icons/official.svg";
import Twitter from "./assets/icons/twitter.svg";
import LinkedIn from "./assets/icons/linkedin.svg";
// import Medium from "./assets/icons/medium.svg";
import Youtube from "./assets/icons/youtube.svg";
import Discord from "./assets/icons/discord.svg";
import GitHub from "./assets/icons/github.svg";
import Email from "./assets/icons/email.svg";

const config = {
  logoUrl: AppLogo,
  favicon: "../favicon.ico",
  title: "Solomon's Link Tree",
  description:
    "My links with Spheron!",
  links: [
    {
      key: "twitter",
      label: "Twitter",
      iconUrl: Twitter,
      redirectUrl: "https://twitter.com/Solomon-nsi",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      iconUrl: LinkedIn,
      redirectUrl: "https://www.linkedin.com/in/suleyhan-m",
    },
    // {
    //   "key": "medium",
    //   "label": "Medium",
    //   "iconUrl": Medium,
    //   "redirectUrl": "",
    // },
  ],
};

export default config;
