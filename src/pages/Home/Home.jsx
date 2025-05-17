import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="text-center p-8 flex flex-col justify-center items-center min-h-screen">
      <div className="flex-grow text-center">
        <h2 className="text-shadow-lg text-6xl font-bold mt-32 mb-12 text-gray-900">Ласкаво просимо на Ферму Тіней</h2>
        <p className="text-shadow-lg text-xl text-gray-200">
          Ми вирощуємо персональні тіні для кожного — містичні, стильні та унікальні.
        </p>
      </div>
      
      <p className="text-center text-sm mt-auto text-gray-200">Не знайшли що шукали? <Link to="/contacts" className="hover:text-black transition duration-300 linear">Ми допоможемо!</Link> </p>
    </div>
  )
}
