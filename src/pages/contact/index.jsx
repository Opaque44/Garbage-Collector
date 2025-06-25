import React from "react";
import ContactForm from "./layout/contactForm";
import RightSide from "./layout/rightSide";

const Contact = () => {
  return (
    <div>
      <div className="flex  flex-col-reverse items-center md:flex-row">
        <RightSide />
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
