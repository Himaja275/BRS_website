import "./App.css";
import Frontpage from "./components/pages/Frontpage.jsx";
import Levels from "./components/pages/levels.jsx";
import Acheivements from "./components/pages/Acheivements.jsx";
import About from "./components/pages/About.jsx";
import Coaches from "./components/pages/Coaches.jsx";
import Faqs from "./components/pages/Faqs.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import Benifits from "./components/pages/Benifits.jsx";
import king from "./assets/why_brs/king.avif";
import queen from "./assets/levels/queen.avif";
import Button from "./components/Button.jsx";
import horse from "./assets/why_brs/horse.avif";
import ScrollToAnchor from "./components/ScrollToAnchor.jsx";
import { NavLink } from "react-router-dom";
import BookDemo from "./components/BookDemo.jsx";
import DemoHoverTooltip from "./components/DemoHoverTooltip.jsx";
import DemoHoverWrapper from "./components/DemoHoverWrapper.jsx";
import Features from "./components/pages/Features.jsx";
import LevelsPage from "./components/pages/LevelsPage.jsx";
import { useEffect, useRef, useState } from "react";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCoachVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (coachesRef.current) {
      observer.observe(coachesRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const coachesRef = useRef(null);
  const [coachVisible, setCoachVisible] = useState(false);
  const delay = 0.4;

  return (
    <div className="urbanist">
      <ScrollToAnchor />
      <Frontpage />
      <Features />
      <LevelsPage />
      <div className="lg:my-64 m-20 flex flex-col">
        <Acheivements />
        {/* <div><img className="absolute bottom-0 left-0 h-80 opacity-30 bouncing-image rotate-6" src={ horse} alt="" /></div> */}
      </div>
      <div className="bg-[#f6f6f6] py-24" id="about" ref={containerRef}>
        <div className="lg:max-w-[1250px] w-[90%] mx-auto flex flex-col gap-10 relative">
          <div>
            <img
              className="absolute xl:-top-[23%] md:-top-[12%] sm:-top-[8%] -top-[6%] right-0 h-40 xl:h-80 opacity-30 bouncing-image rotate-6"
              src={horse}
              alt=""
            />
          </div>
          <div className="text-center xl:text-left">
            <div
              className={visible ? "orange_heading fade-up" : "orange_heading"}
            >
              About
            </div>
            <div className="black_heading">The Story Behind BRS Academy</div>
          </div>
          <div>
            <About visible={visible} />
          </div>
        </div>
      </div>
      <div
        className="w-[85%] mx-auto py-36 max-w-6xl flex flex-col gap-12"
        ref={coachesRef}
      >
        <div className="text-center xl:text-left">
          <div
            className={
              coachVisible ? "orange_heading fade-up" : "orange_heading"
            }
            style={coachVisible ? { animationDelay: `${0 * delay}s` } : {}}
          >
            Coaches
          </div>
          <div
            className={coachVisible ? "black_heading fade-up" : "black_heading"}
            style={coachVisible ? { animationDelay: `${1 * delay}s` } : {}}
          >
            Meet Our Expert Coaches
          </div>
          <div
            className={
              coachVisible
                ? "mt-4 font-[Outfit] font-light text-[18px] md:text-[22px] text-left fade-up"
                : "mt-4 font-[Outfit] font-light text-[18px] md:text-[22px] text-left"
            }
            style={coachVisible ? { animationDelay: `${1.2 * delay}s` } : {}}
          >
            At BRS Chess Academy, our coaches are the backbone of our success.
            Each coach brings a wealth of experience, a passion for teaching,
            and a commitment to nurturing every student's potential. From
            international-level players to experienced educators, our team is
            dedicated to guiding students on their chess journey.
          </div>
          <div className="font-[Outfit] font-semibold heading text-[#003a69] text-center mt-8">
            *Click on the images to know more
          </div>
        </div>
        <div>
          <Coaches />
        </div>
      </div>
      <div className="bg-[#f6f6f6] py-28 relative">
        <div>
          <img
            className="hidden lg:block absolute -top-[10%] right-1/4 h-64 opacity-30 -rotate-12 bouncing-image"
            src={queen}
            alt=""
          />
          <img
            className="absolute left-10 top-[45%] h-64 opacity-30 bouncing-image -rotate-12"
            src={king}
            alt=""
          />
          <img
            className="absolute right-10 top-[55%] h-80 opacity-30 bouncing-image rotate-6"
            src={horse}
            alt=""
          />
        </div>
        <div className="relative z-10">
          <Faqs />
        </div>
      </div>
      <div className="py-14" id="contact-us">
        <ContactUs />
      </div>
      {/* <NavLink to="/#contact-us"><div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <BookDemo/>
      </div></NavLink>
      <div><DemoHoverTooltip/></div> */}
      <div>
        <DemoHoverWrapper />
      </div>
    </div>
  );
}

export default App;
