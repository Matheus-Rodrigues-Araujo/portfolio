export default function ContactForm() {
  return (
    <div className="contact-form mt-2 sm:mx-auto w-full lg:w-[80%]">
      <form className="space-y-20">
        <div>
          <label className="block text-[5rem] font-medium leading-6 text-white">
            Username
          </label>
          <div className="mt-10">
            <input
              id="userName"
              name="username"
              autoComplete="username"
              className="form-input block w-full rounded-md border-0 p-3 text-light-green shadow-sm
              ring-1 ring-inset ring-light-green placeholder:text-light-green focus:ring-2
              focus:ring-inset focus:ring-light-green text-[4rem] outline-0 sm:leading-6 md:p-12 bg-light-dark
              "
            />
          </div>
        </div>

        <div>
          <label className="block text-[5rem] font-medium leading-6 text-white">
            Email
          </label>
          <div className="mt-10">
            <input
              id="email"
              name="email"
              className="form-input block w-full rounded-md border-0 p-3 text-light-green shadow-sm
                         ring-1 ring-inset ring-light-green placeholder:text-light-green focus:ring-2
                         focus:ring-inset focus:ring-light-green text-[4rem] outline-0 sm:leading-6 md:p-12 bg-light-dark
                         "
            />
          </div>
        </div>

        <div>
          <label className="block text-[5rem] font-medium leading-6 text-white">
            Message
          </label>
          <div className="mt-10">
            <textarea
              id="message"
              name="message"
              className="form-input block  h-[200px] w-full rounded-md border-0 p-3 text-light-green shadow-sm
              ring-1 ring-inset ring-light-green placeholder:text-light-green focus:ring-2
              focus:ring-inset focus:ring-light-green text-[4rem] outline-0 sm:leading-6 md:p-12 bg-light-dark
              "
            />
          </div>
        </div>

        <div className="submit-btn-container h-full">
          <button
            type="submit"
            className="submit-btn flex w-full p-20 bg-light-green justify-center rounded-md text-[5rem]
                       font-semibold uppercase leading-6 text-white shadow-sm"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
