import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const tariffs = [
    {
      name: "Базовый",
      price: "150",
      emoji: "🗑️",
      description: "Для небольших объёмов мусора",
      features: [
        "До 2 пакетов мусора",
        "Вынос до контейнера",
        "Быстрое выполнение",
        "Гарантия качества",
      ],
      popular: false,
    },
    {
      name: "Стандартный",
      price: "250",
      emoji: "📦",
      description: "Самый популярный тариф",
      features: [
        "До 5 пакетов мусора",
        "Крупногабаритные вещи",
        "Вынос с любого этажа",
        "Уборка после выноса",
        "Приоритетное обслуживание",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "400",
      emoji: "🧹",
      description: "Для генеральной уборки",
      features: [
        "Неограниченный объём",
        "Разборка мебели",
        "Сортировка мусора",
        "Полная уборка площадки",
        "Срочное выполнение",
        "Скидка на регулярное обслуживание",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 px-4 bg-gradient-to-br from-green-50 to-purple-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши <span className="text-green-600">тарифы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Честные цены без скрытых платежей. Выберите подходящий тариф!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tariffs.map((tariff, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 ${tariff.popular ? "ring-2 ring-green-500 scale-105" : ""}`}
            >
              {tariff.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{tariff.emoji}</div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {tariff.name}
                </CardTitle>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {tariff.price} ₽
                </div>
                <p className="text-gray-600 text-sm">{tariff.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {tariff.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${tariff.popular ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"} text-white`}
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-orange-100 px-6 py-3 rounded-full">
            <span className="text-2xl mr-2">🎯</span>
            <span className="text-orange-800 font-semibold">
              Все цены указаны окончательно, без доплат!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
