import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
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
      <Hero />
      <Highlights />
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
