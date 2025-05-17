import { useCartStore } from "../../app/store";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const cart = useCartStore((state) => state.cart);

  const baseStyle =
    "ring-2 ring-gray-800 text-xl font-bold bg-gray-800 p-4 rounded-md hover:bg-black hover:text-gray-600 transition duration-300 linear";
  const activeStyle = "ring-white";

  return (
    <nav className="bg-gray-900 text-white py-8 px-24 flex justify-between">
      <NavLink
        className="text-3xl font-bold hover:text-black transition duration-300 linear"
        to="/"
      >
        Ферма Тіней
      </NavLink>
      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}
        >
          Головна
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}
        >
          Каталог
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}
        >
          Контакти
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${baseStyle} relative ${isActive ? activeStyle : ""}`
          }
        >
          Кошик
          {!!cart.length && (
            <span className="absolute flex justify-center items-center right-1 top-1 text-sm w-5 h-5 bg-gray-900 rounded-full">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};
