"use client";
import { useReducer, useState } from "react";
import dynamic from "next/dynamic";
const Notification = dynamic(() => import('../components/notification'))

const initialState = {
  formData: {
    name: "",
    email: "",
    message: "",
  },
  errors: {
    name: "",
    email: "",
    message: "",
  },
};

function formReducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.name]: action.value,
        },
        errors: {
          ...state.errors,
          [action.name]: "",
        },
      };
    case "ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.name]: action.message,
        },
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function ContactForm() {
  const [showNotification, setShowNotification] = useState(false)
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { formData, errors } = state;

  const displayNotification = () => {
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch({ type: "CHANGE", name, value });
  };

  const validateForm = () => {
    let valid = true;

    if (!formData.name.trim()) {
      dispatch({
        type: "ERROR",
        name: "name",
        message: "Username is required",
      });
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      dispatch({
        type: "ERROR",
        name: "email",
        message: "Invalid email address",
      });
      valid = false;
    }

    if (!formData.message.trim()) {
      dispatch({
        type: "ERROR",
        name: "message",
        message: "Message is required",
      });
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { name, email, message } = formData;
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      //@ts-ignore
      "Content-Type": "application/json",
    }).then(() => {
      dispatch({type: "RESET"})
      displayNotification()
    });
  };

  return (
    <div className="relative contact-form mt-8 md:mt-0 flex flex-col sm:mx-auto w-full ">
      <form className="space-y-20" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium leading-6 text-white">
            Username
          </label>
          <div className="mt-10">
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name..."
              className="form-input block w-full rounded-md border-0 h-[50px] text-white shadow-sm
              ring-1 ring-inset ring-purple placeholder:text-white focus:ring-2
              focus:ring-inset focus:ring-purple text-[4rem] outline-0 sm:leading-6 p-12 bg-light-dark
              "
            />
            {errors.name && (
              <p className="text-red-500 text-[4rem] mt-1">{errors.name}</p>
            )}
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
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email..."
              className="form-input block w-full rounded-md border-0  h-[50px] text-white shadow-sm
                         ring-1 ring-inset ring-purple placeholder:text-white focus:ring-2
                         focus:ring-inset focus:ring-purple text-[4rem] sm:leading-6 p-12 bg-light-dark
                         "
            />
            {errors.email && (
              <p className="text-red-500 text-[4rem] mt-1">{errors.email}</p>
            )}
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
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message..."
              className="form-input block  h-[200px] w-full rounded-md border-0  text-white shadow-sm
              ring-1 ring-inset ring-purple placeholder:text-white focus:ring-2
              focus:ring-inset focus:ring-purple text-[4rem] outline-0 sm:leading-6 p-12 bg-light-dark
              "
            />
            {errors.message && (
              <p className="text-red-500 text-[4rem] mt-1">{errors.message}</p>
            )}
          </div>
        </div>

        <div className="submit-btn-container mx-auto flex max-[400px]:flex-col-reverse flex-row justify-between gap-5 md:gap-0">
          <p className="text-[4.5rem] md:text-[5rem] text-white">
            Hit me up so we can talk!
          </p>
          <button
            type="submit"
            className="submit-btn flex p-14 md:p-20 bg-purple justify-center rounded-md text-[5rem]
                       font-400 leading-6 text-white shadow-sm"
          >
            Hit me up
          </button>
        </div>
      </form>
      {showNotification && <Notification/>}
    </div>
  );
}
