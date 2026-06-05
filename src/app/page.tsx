import OfficialBanner from "@/components/OfficialBanner";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import VIPExperience from "@/components/VIPExperience";
import EventDetails from "@/components/EventDetails";
import TequilaSpotlight from "@/components/TequilaSpotlight";
import LiveMusic from "@/components/LiveMusic";
import Gallery from "@/components/Gallery";
import EmailSignup from "@/components/EmailSignup";
import TicketsCTA from "@/components/TicketsCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <OfficialBanner />
      <Hero />
      <Highlights />
      <VIPExperience />
      <EventDetails />
      <TequilaSpotlight />
      <LiveMusic />
      <Gallery />
      <EmailSignup />
      <TicketsCTA />
      <Footer />
    </main>
  );
}
