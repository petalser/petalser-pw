import Hero from "@/components/Hero";
import ActionButton from "@/components/ActionButton";
import CreedSection from "@/components/CreedSection";
import BlurryLettersWrapper from "@/components/BlurryLettersWrapper";
import SmoothenedCard from "@/components/SmothenedCard";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

const STATES_HEADER_TEXT = "Just like hardware, software can be in different conditions:"

const STATES_CONTENT = [
  { title: "Updated", text: "Looks modern, works fast. It is secure and efficient." },
  { title: "Outdated", text: "Not the latest trend, but still doing its job." },
  { title: "Deprecated", text: "It works… but nobody knows why or for how long." },
  { title: "Obsolete", text: "Does not work anymore. So... There is a lot of work. Let's start" }
]

const SERVICES_HEADER_TEXT = "What we can do together to keep your software fresh and reliable:"

const SERVICES_CONTENT = [
  { title: "Build", text: "Design and develop brand new websites or apps tailored to your needs." },
  { title: "Fix", text: "Find and squash bugs that slow you down or break functionality." },
  { title: "Update", text: "Refresh visuals, improve performance, and modernize outdated code." },
  { title: "Expand", text: "Add new features, integrations, or tools to grow with your business." }
]


export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen">
      <Hero />
      <ActionButton />
      <BlurryLettersWrapper>
        <CreedSection />
        <SmoothenedCard>
          <Cards headerText={STATES_HEADER_TEXT} content={STATES_CONTENT} />
        </SmoothenedCard>
        <SmoothenedCard>
          <Cards headerText={SERVICES_HEADER_TEXT} content={SERVICES_CONTENT} hasFakeError={false} />
        </SmoothenedCard>
      </BlurryLettersWrapper>
      <Footer />s
    </div>
  );
}
