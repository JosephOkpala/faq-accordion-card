import React, { useState } from "react";
import "./faq.css";
import "../App.css";
import hero from "../images/illustration-woman-online-desktop.svg";

const Faq = () => {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };

  return (
    <div className="faq-container">
      <div className="faq">
        <div className="faq-image">
          <img src={hero} alt="hero" />
        </div>
        <div className="faq-text">
          <div className="header-faq">
            <h1>FAQ</h1>
          </div>
          <div className="accordion">
            {data.map((item, i) => (
              <div className="items">
                <div className="title" onClick={() => toggle(i)}>
                  <h4>{item.question}</h4>
                  <span>{active === i ? "-" : "+"}</span>
                </div>
                <div className={active === i ? "answer show" : "answer"}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    question: "How many team members can I invite?",
    answer: "You can invite as many team members as you would like to.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2gb. All files in your account must fit your alloted space.",
  },
  {
    question: "How do I reset my password?",
    answer: 'You can reset your passsword by clicking on the "reset password".',
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time",
  },
  {
    question: "Do you provide additional support?",
    answer: "Yes we do, contact the support team if you need help",
  },
];

export default Faq;
