import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "🗑️",
      title: "Стандартный мусор",
      description: "Бытовые отходы, упаковка, пищевые остатки",
      features: ["До 2 пакетов", "Быстрая уборка", "Аккуратно"],
    },
    {
      icon: "📦",
      title: "Крупногабаритный",
      description: "Коробки, старая мебель, техника",
      features: ["Любые размеры", "Безопасно", "С разборкой"],
    },
    {
      icon: "♻️",
      title: "Раздельный сбор",
      description: "Сортировка по типам для переработки",
      features: ["Экологично", "Сортировка", "Ответственно"],
    },
    {
      icon: "🧹",
      title: "Генеральная уборка",
      description: "Полная очистка от накопившегося мусора",
      features: ["Весь мусор", "Глубокая уборка", "Результат"],
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши <span className="text-green-600">услуги</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Еноты-профессионалы справятся с любым мусором! Выбирайте подходящий
            тариф
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center text-sm text-green-600"
                    >
                      <Icon name="Check" size={16} className="mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
