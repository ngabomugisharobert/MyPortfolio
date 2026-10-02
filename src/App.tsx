import { AiProcess } from "./components/AiProcess";
import { Domains } from "./components/Domains";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Leadership } from "./components/Leadership";
import { Mobile } from "./components/Mobile";
import { Nav } from "./components/Nav";
import { Timeline } from "./components/Timeline";
import { Writing } from "./components/Writing";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <Intro />
        <Leadership />
        <AiProcess />
        <Mobile />
        <Timeline />
        <Domains />
        <Writing />
      </main>
      <Footer />
    </>
  );
}
