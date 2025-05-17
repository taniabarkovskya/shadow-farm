import { useCartStore } from "../../app/store";
import { ToastContainer, toast, Slide } from "react-toastify";

export const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const notifyBuy = () =>
    toast.success("Ваше замовлення підтвержено!", {
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
  
  const notifyEmpty = () =>
  toast.info("Корзина очищена", {
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
  
  const handleDelete = (item) => {
    removeFromCart(item.id);
    notifyDelete();
  }

  const handleBuy = () => {
    clearCart();
    notifyBuy();
  }

  const handleEmpty = () => {
    clearCart();
    notifyEmpty();
  }

  return (
    <div className="p-8 text-gray-900">
      <h1 className="text-shadow-lg text-4xl font-bold mb-12 text-center">Кошик</h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-8">
          <img
            className="w-96 h-96 rounded-full border-4 border-transparent shadow-2xl/30 hover:border-black transition duration-300 linear"
            src="/images/emptyCart.png"
            alt="Empty cart"
          />
          <p className="text-center font-semibold text-lg text-gray-200 text-shadow-2xs">
            Ваш кошик порожній, але Ви ще можете це виправити!
          </p>
        </div>
      ) : (
        <div className="space-y-4 max-w-2xl mx-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2 bg-gray-500 p-4"
            >
              <div>
                <h2 className="text-xl text-gray-900 font-bold">{item.name}</h2>
                <p className="text-sm text-gray-100">{item.description}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700 font-medium cursor-pointer transition duration-300 linear"
                onClick={() => handleDelete(item)}
              >
                Видалити
              </button>
            </div>
          ))}
          <div className="text-center mt-6 flex justify-between">
            <button
              className="bg-gray-500 font-semibold text-white px-6 py-2 rounded-xl hover:bg-gray-700 cursor-pointer transition duration-300 linear"
              onClick={handleBuy}
            >
              Підтвердити замовлення
            </button>
            <button
              className="bg-red-400 font-semibold text-white px-6 py-2 rounded-xl hover:bg-red-700 cursor-pointer transition duration-300 linear"
              onClick={handleEmpty}
            >
              Очистити кошик
            </button>
          </div>
        </div>
      )}
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
