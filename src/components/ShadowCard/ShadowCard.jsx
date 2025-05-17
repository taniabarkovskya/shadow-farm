import { useCartStore } from "../../app/store";
import { ToastContainer, toast, Slide } from "react-toastify";

export const ShadowCard = ({ shadow }) => {
  const toggleCartItem = useCartStore((state) => state.toggleCartItem);
  const cart = useCartStore((state) => state.cart);
  const isInCart = cart.includes(shadow);

  const notifyAdd = () =>
    toast.success("Товар додано", {
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
  
  const notifyDelete = () =>
  toast.error("Товар видалено", {
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
  
  const handleClick = (item) => {
    toggleCartItem(item);
    if (isInCart) {
      notifyDelete();
    } else {
      notifyAdd();
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 text-center hover:shadow-2xl/30 transition duration-300 linear">
      <img
        src={shadow.image}
        alt={shadow.name}
        className="rounded-md mb-4 mx-auto"
      />
      <h3 className="text-lg font-semibold text-gray-800">{shadow.name}</h3>
      <p className="text-gray-600">{shadow.description}</p>
      <button
        className="mt-4 bg-gray-700 font-bold text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-300 linear"
        onClick={() => handleClick(shadow)}
      >
        {isInCart ? "Видалити з кошика" : "Додати в кошик"}
      </button>
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
