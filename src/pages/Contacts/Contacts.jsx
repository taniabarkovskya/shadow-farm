import { useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const notify = () =>
    toast.success("Ваш запит успішно надіслано!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });

  const notifyError = () =>
    toast.error("Ой! Сталась помилка, спробуйте ще", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  
  const notifyErrorEmpty = () =>
    toast.warning("Всі поля мають бути заповнені", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!name || !email || !message) {
      notifyErrorEmpty();
      return;
    }

    handleReset();
    notify();
  };

  const handleError = (event) => {
    event.preventDefault();
    notifyError();
  };

  return (
    <div className="flex flex-col p-10 bg-gray-700 text-gray-200 rounded-md">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-300">
        Звʼяжіться з нами
      </h2>

      <div className="mb-10 max-w-2xl mx-auto text-center">
        <p className="mb-2">📍 Адреса: Місто НоуШадоу, вул. Передмістна 13</p>
        <p className="mb-2">
          📞 Телефон:{" "}
          <a href="tel:+380123456789" className="text-blue-200 hover:underline">
            +380 12 345 6789
          </a>
        </p>
        <p className="mb-2">
          📧 Email:{" "}
          <a
            href="mailto:shadows@farm.com"
            className="text-blue-200 hover:underline"
          >
            shadows@farm.com
          </a>
        </p>
        <p className="mb-2">🕒 Години роботи: Пн–Пт, 9:00–20:00</p>
      </div>

      <form
        className=" w-xl mx-auto bg-gray-500 p-6 rounded-2xl shadow-md space-y-4"
        onSubmit={handleSubmit}
        onError={handleError}
      >
        <div>
          <label
            htmlFor="name"
            className="block font-semibold mb-1 text-gray-900"
          >
            Ваше імʼя
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            className="w-full border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Введіть імʼя"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-semibold mb-1 text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="w-full border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block font-semibold mb-1 text-gray-900"
          >
            Повідомлення
          </label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            className="w-full border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Чим можемо допомогти?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-700 font-bold text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-300 linear"
        >
          Надіслати
        </button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </div>
  );
};
