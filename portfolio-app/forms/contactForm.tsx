export default function ContactForm() {
  return (
    <div className="contact-form mt-8 md:mt-0 flex flex-col sm:mx-auto w-full ">
      <form className="space-y-20">
        <div>
          <label className="font-orbitron block text-[5rem] font-medium leading-6 text-white">
            Username
          </label>
          <div className="mt-10">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className="form-input block w-full rounded-md border-0 p-3 h-[50px] text-purple shadow-sm
              ring-1 ring-inset ring-purple placeholder:text-purple focus:ring-2
              focus:ring-inset focus:ring-purple text-[4rem] outline-0 sm:leading-6 md:p-12 bg-light-dark
              "
            />
          </div>
        </div>

        <div>
          <label className="font-orbitron block text-[5rem] font-medium leading-6 text-white">
            Email
          </label>
          <div className="mt-10">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="form-input block w-full rounded-md border-0  h-[50px] text-purple shadow-sm
                         ring-1 ring-inset ring-purple placeholder:text-purple focus:ring-2
                         focus:ring-inset focus:ring-purple text-[4rem] sm:leading-6  md:p-12 bg-light-dark
                         "
            />
          </div>
        </div>

        <div>
          <label className="font-orbitron block text-[5rem] font-medium leading-6 text-white">
            Message
          </label>
          <div className="mt-10">
            <textarea
              id="message"
              name="message"
              className="form-input block  h-[200px] w-full rounded-md border-0 p-3 text-purple shadow-sm
              ring-1 ring-inset ring-purple placeholder:text-purple focus:ring-2
              focus:ring-inset focus:ring-purple text-[4rem] outline-0 sm:leading-6 md:p-12 bg-light-dark
              "
            />
          </div>
        </div>

        <div className="submit-btn-container mx-auto flex justify-between gap-5 md:gap-0">
          <p className="font-raleway text-[4.5rem] md:text-[5rem] text-purple font-light">
            Hit me up so we can talk!
          </p>
          <button
            type="submit"
            className="submit-btn flex p-14 md:p-20 bg-purple justify-center rounded-md text-[5rem] md:text-[5rem]
                       font-400 uppercase leading-6 text-white shadow-sm"
          >
            Hit me up
          </button>
        </div>
      </form>
    </div>
  );
}
