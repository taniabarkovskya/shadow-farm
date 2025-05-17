import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [],
  toggleCartItem: (item) =>
    set((state) => {
      const itemExists = state.cart.find((cartItem) => cartItem.id === item.id);

      if (itemExists) {
        return {
          cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
        };
      } else {
        return {
          cart: [...state.cart, item],
        };
      }
    }),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(item => item.id !== id) })),
  clearCart: () => set({ cart: [] })
}))