export default function ContactForm() {
  return (
    <div className="contact-form mt-8 md:mt-0 flex flex-col sm:mx-auto w-full ">
      <form className="space-y-20">
        <div>
          <label className="block font-medium leading-6 text-white">
            Username
          </label>
          <div className="mt-10">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name..."
              className="form-input block w-full rounded-md border-0 p-3 h-[50px] text-white shadow-sm
              ring-1 ring-inset ring-purple placeholder:text-white focus:ring-2
              focus:ring-inset focus:ring-purple text-[4rem] outline-0 sm:leading-6 md:p-12 bg-light-dark
              "
            />
          </div>
        </div>

        <div>
          <label className="block font-medium leading-6 text-white">
            Email
          </label>
          <div className="mt-10">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email..."
              className="form-input block w-full rounded-md border-0  h-[50px] text-white shadow-sm
                         ring-1 ring-inset ring-purple placeholder:text-white focus:ring-2
                         focus:ring-inset focus:ring-purple text-[4rem] sm:leading-6  md:p-12 bg-light-dark
                         "
            />
          </div>
        </div>

        <div>
          <label className="block font-medium leading-6 text-white">
            Message
          </label>
          <div className="mt-10">
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              className="form-input block  h-[200px] w-full rounded-md border-0 p-3 text-white shadow-sm
              ring-1 ring-inset ring-purple placeholder:text-white focus:ring-2
              focus:ring-inset focus:ring-purple text-[4rem] outline-0 sm:leading-6 md:p-12 bg-light-dark
              "
            />
          </div>
        </div>

        <div className="submit-btn-container mx-auto flex justify-between gap-5 md:gap-0">
          <p className="text-[4.5rem] md:text-[5rem] text-purple">
            Hit me up so we can talk!
          </p>
          <button
            type="submit"
            className="submit-btn flex p-14 md:p-20 bg-pink justify-center rounded-md text-[3.2rem] md:text-[5rem]
                       font-400 uppercase leading-6 text-white shadow-sm"
          >
            Hit me up
          </button>
        </div>
      </form>
    </div>
  );
}
