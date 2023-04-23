import Hero from "@/components/Hero";
import AppNav from "@/components/AppNav";
import Content from "@/components/Content";
import Faq from "@/components/Faq";
import Brand from "@/components/Brand";
import AppHeader from "@/components/AppHeader";

export default function Home() {
  return (
    <>
      <AppHeader title={"NewbAPI: ShortURL API"} desc={"Shorten your links and amplify your impact with our ShortURL API"} og={"/assets/shorturlapi-newbapi.png"}/>
      <AppNav />
      <Hero />
      <Content />
      <Faq />
      <Brand />
    </>
  )
}
