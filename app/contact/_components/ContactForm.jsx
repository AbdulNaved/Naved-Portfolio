"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_2opwl6d",
        "template_ncjjaie",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "-8PXX24sNkJ7I-bWQ"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // Reset the form
          setFormData(initialFormData);
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-md backdrop-filter backdrop-blur-lg border border-white bg-opacity-100">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-white font-semibold text-2xl">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              type="text"
              className="input-style"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-white font-semibold text-2xl"
            >
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              type="email"
              className="input-style"
              placeholder="username@gmail.com"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-white font-semibold text-2xl"
            >
              Subject
            </label>
            <input
              name="subject"
              value={formData.subject}
              type="text"
              className="input-style"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-white font-semibold text-2xl  "
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              className="input-style resize-none h-48 "
              cols={77}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            className={
              "group relative flex w-fit items-center text-slate-800 justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105"
            }
            type="submit"
            disabled={isSubmitting} // Disable button while submitting
          >
            <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
            <span className="relative flex items-center justify-center gap-2">
              {isSubmitting ? "Submitting..." : "Submit"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

