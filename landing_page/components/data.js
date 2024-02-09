import {
  FaceSmileIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  WalletIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "What are our benefits?",
  desc: "Rake It has a lot of benefits why you should choose us over other data scraping tools. ",
  image: benefitOneImg,
  bullets: [
    {
      title: "We keep our customers happy, always!",
      desc: "Our top priority is to keep our customers happy and satisfied. We are always here to help you out. Have a question? Just ask us.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Pay for what you use",
      desc: "You only pay for what you use. No hidden charges or fees. We are transparent with our pricing.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "One click data scraping",
      desc: "Scraping someone's data is just one click away. Just enter the username and click scrape. That's it!",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "What else?",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "No minimum spend",
      desc: "If you are just starting out or if you're already a big player, you can start with any amount you want. No minimum spend required.",
      icon: <WalletIcon />,
    },
    {
      title: "Seamless Integration",
      desc: "Would you like to use our tool as an API? We have a seamless integration with all the popular programming languages.",
      icon: <CodeBracketIcon />,
    },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};


export {benefitOne, benefitTwo};
