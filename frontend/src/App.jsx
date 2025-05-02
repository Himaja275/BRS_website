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

function App() {
  return (
    <div className="urbanist">
      <ScrollToAnchor />
      <Frontpage />
      <Features/>
      {/* <div className="flex gap-14 flex-col items-center justify-center py-32" id="features">
        <div className="flex flex-col gap-2 items-center justify-center">
        <div
          className="orange_heading opacity-0 animate-slide-up"
          style={{ animationDuration: "1s", animationDelay: "0s" }}
        >Benifits</div>
          <div
          className="black_heading opacity-0 animate-slide-up"
          style={{ animationDuration: "1s", animationDelay: "0.3s" }}
        >Why Choose BRS Academy?</div>
        </div>
        <div className="relative opacity-0 animate-slide-up" style={{ animationDuration: "1s", animationDelay: "0.6s" }}>
          <div className="relative z-10">
            <Benifits />
          </div>
          <img
            className="absolute -top-2/5 -left-[5%] h-60 opacity-30 bouncing-image -rotate-6"
            src={king}
            alt=""
          />
        </div>
      </div> */}
      <div className="bg-[#f6f6f6] py-8 pb-28 flex flex-col gap-10 relative">
      <div className="w-[80%] xl:w-[90%] mx-auto flex flex-col items-center text-center gap-4 lg:flex-row lg:justify-between lg:items-end lg:text-left relative">
          <div className="w-3/4 xl:w-2/5 relative">
            <div className="orange_heading">Training Programs</div>
            <div className="black_heading">
              Online Chess Coaching From India's Best Coaches
            </div>
          </div>
          <div>
            <img
              className="absolute xl:static h-30 opacity-30 xl:h-60 bouncing-image rotate-6 
                -top-32 right-0 xl:top-auto xl:right-auto sm:-left-16"
              src={queen}
              alt=""
            />
          </div>
          <div>
            <NavLink to="/#contact-us"><Button text="Get Started Now"/></NavLink>
          </div>
        </div>
        <div>
          <Levels />
        </div>
        <div>
          <img
            className="absolute -bottom-[15%] left-1/5 h-60 opacity-30 bouncing-image -rotate-6"
            src={king}
            alt=""
          />
        </div>
      </div>
      <div className="my-64 flex flex-col">
        <Acheivements />
        <div className="flex flex-col gap-10 items-center justify-center">
          <div
            className="black_heading w-1/6 text-center flex justify-center items-center"
            style={{ fontSize: "2.7rem" }}
          >
            Students Achievements
          </div>
          <div>
            <NavLink to="/gallery"><Button
              text="View Gallery"
            /></NavLink>
          </div>
        </div>
        {/* <div><img className="absolute bottom-0 left-0 h-80 opacity-30 bouncing-image rotate-6" src={ horse} alt="" /></div> */}
      </div>
      <div className="bg-[#f6f6f6] py-24" id="about">
        <div className="container max-w-6xl mx-auto flex flex-col gap-10 relative">
          <div>
            <img
              className="absolute -top-[27%] right-0 h-80 opacity-30 bouncing-image rotate-6"
              src={horse}
              alt=""
            />
          </div>
          <div>
            <div className="orange_heading">About</div>
            <div className="black_heading">The Story Behind BRS Academy</div>
          </div>
          <div>
            <About />
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto py-36 max-w-6xl flex flex-col gap-12">
        <div>
          <div className="orange_heading">Coaches</div>
          <div className="black_heading">Meet Our Expert Coaches</div>
          <div className="mt-4 font-[Outfit] font-light text-[22px]">
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
            className="absolute -top-[10%] right-1/4 h-64 opacity-30 bouncing-image -rotate-12"
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
      <div><DemoHoverWrapper/></div>
    </div>
  );
}

export default App;
