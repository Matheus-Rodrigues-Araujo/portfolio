"use server";
import ContactForm from "../forms/contactForm";
import DynamicGif from "../components/dynamicGIF";
import DynamicContactLinks from "../components/dynamicContactLinks";

export default async function Contact() {
  return (
    <section className="contact bg-dark py-20" id="contact">
      <h2 className="text-[10rem] md:text-[12rem] font-bold">Contact</h2>

      <div className="contact-container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="flex justify-between flex-col">
          <div className="flex flex-col gap-5">
            <h3 className="text-[7rem] text-purple font-200 ">
              Let's grap a coffee!
            </h3>
            <p className="text-[4.5rem] md:text-[5rem] text-light-gray w-50">
              The time has come to transform your ideas into concrete actions!
            </p>

            <DynamicContactLinks/>
          </div>
          <DynamicGif />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
