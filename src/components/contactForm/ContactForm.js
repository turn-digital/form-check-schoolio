import React, { useState, useRef } from "react";
import { sendContactForm } from "../../services/index";

const isBrowser = window !== undefined;

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {
    e.preventDefault();
    const res = await sendContactForm({
      schoolName: schoolName,
      email: e.target[0].value,
    });
    if (res === 0) {
      setMessage("Thank you for your email");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

  let schoolName = "";

  if (isBrowser) {
    schoolName = window.location.host;
  }

  return (
    <div className="container max-w-2xl text-center">
      <div>
        {message}
        <div>
          <span onClick={() => setMessage("")}>&times;</span>
        </div>
        <form ref={formRef} onSubmit={submitContact}>
          <input required placeholder="Email Address*" type={"email"} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
