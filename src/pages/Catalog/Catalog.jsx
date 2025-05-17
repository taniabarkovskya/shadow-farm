import { ShadowCard } from "../../components/ShadowCard"


const shadows = [
  { id: 1, name: "Тінь №1: Базова", description: "Базова, під Ваші натуральні розміри", image: "/images/shadowAdult.png", price:"" },
  { id: 2, name: "Тінь №2: Кастомна", description: "Будь-якого кольру та розміру, як тільки забажаєте", image: "/images/shadowCustom.png" },
  { id: 3, name: "Тінь №3: Дитяча", description: "Вона зростатиме разом з дитиною", image: "/images/shadowChild.png" },
]

export const Catalog = () => {
  return (
    <div className="p-6">
      <h2 className="text-shadow-lg text-3xl font-bold text-gray-800 mb-4">Наші тіні</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {shadows.map(shadow => (
          <ShadowCard key={shadow.id} shadow={shadow} />
        ))}
      </div>
    </div>
  )
}