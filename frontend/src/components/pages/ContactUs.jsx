import React, {useState, useRef, useEffect} from "react";
import ContactForm from "../ContactForm.jsx";
import contact from "../../assets/contact.avif";

const ContactUs = () => {
  useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisible(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);
  return (
    <div
      className="h-full bg-cover bg-center rounded-3xl lg:mx-12 mx-5 md:p-9 p-4 flex flex-col gap-12"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 30%),url(${contact})`,
      }} ref= {containerRef}
    >
      <div className="lg:ml-28 lg:text-left text-center">
        <div className={visible?"text-[#ed8d3e] text-base font-[Outfit] font-semibold fade-up":"text-[#ed8d3e] text-base font-[Outfit] font-semibold"}>
          Get in touch
        </div>
        <div className="text-white font-bold text-4xl font-sans lg:text-left text-center">
          Contact Us
        </div>
      </div>
      <div className="flex lg:justify-end justify-center">
        <div className="xl:w-2/5 lg:w-[50%] md:w-[75%] w-[100%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
