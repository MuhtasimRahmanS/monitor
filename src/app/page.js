import Banner from "@/Component/Banner";
import Banner2 from "@/Component/Banner2";
import Contact from "@/Component/Contact";
import Create_Account from "@/Component/Create_Account";
import Download from "@/Component/Download";
import Faq from "@/Component/Faq";
import Feature from "@/Component/Feature";
import Review from "@/Component/Review";

export default function Home() {
  return (
    <div>
      <Banner />
      <Banner2 />
      <Feature />
      <Faq />
      <Create_Account />
      <Review />
      <Download />
      <Contact />
    </div>
  );
}
