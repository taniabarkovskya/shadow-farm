import { useCartStore } from "../../app/store";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <nav className="bg-gray-900 text-white py-8 px-24 flex justify-between">
      <Link
        className="text-3xl font-bold hover:text-black transition duration-300 linear"
        to="/"
      >
        Ферма Тіней
      </Link>
      <div className="space-x-4">
        <Link
          className="text-xl font-bold bg-gray-800 p-4 rounded-md hover:bg-black hover:text-gray-600 transition duration-300 linear"
          to="/"
        >
          Головна
        </Link>
        <Link
          className="text-xl font-bold bg-gray-800 p-4 rounded-md hover:bg-black hover:text-gray-600 transition duration-300 linear"
          to="/catalog"
        >
          Каталог
        </Link>
        <Link
          className="text-xl font-bold bg-gray-800 p-4 rounded-md hover:bg-black hover:text-gray-600 transition duration-300 linear"
          to="/contacts"
        >
          Контакти
        </Link>
        <Link
          className="text-xl font-bold bg-gray-800 p-4 rounded-md hover:bg-black hover:text-gray-600 transition duration-300 linear relative"
          to="/cart"
        >
          Кошик
          {!!cart.length && <span className="absolute flex justify-center items-center right-1 top-1 text-sm w-5 h-5 bg-gray-900 rounded-full">{cart.length}</span>}
        </Link>
      </div>
    </nav>
  );
};
