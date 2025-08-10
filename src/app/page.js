import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import InfoText from "@/components/InfoText";
import RandevuForm from "@/components/RandevuForm";
import GuvenlikVeHijyen from "@/components/GuvenlikVeHijyen";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <InfoText/>
    <RandevuForm/>
    <GuvenlikVeHijyen/>
    <Footer/>
    </>
  );
}
