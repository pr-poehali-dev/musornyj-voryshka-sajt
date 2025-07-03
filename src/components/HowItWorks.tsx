import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: "CreditCard",
      title: "Выбираете тариф",
      description: "Выбираете удобный Вам тарифный план – подписка на месяц",
    },
    {
      number: 2,
      icon: "Wallet",
      title: "Оплачиваете",
      description: "Оплачиваете удобным для вас способом",
    },
    {
      number: 3,
      icon: "Package",
      title: "Получаете пакеты",
      description:
        "Мы приносим специализированные мусорные пакеты на время месячной подписки",
    },
    {
      number: 4,
      icon: "MessageCircle",
      title: "Добавляем в чат-бот",
      description: "Добавляем Вас в удобный чат-бот в Telegram или WhatsApp",
    },
    {
      number: 5,
      icon: "Calendar",
      title: "Отмечаете дни",
      description: "В чат-боте отмечаете дни, когда вам нужно вынести мусор",
    },
    {
      number: 6,
      icon: "Home",
      title: "Оставляете мусор",
      description: "Оставляете мусор в специальных пакетах возле двери",
    },
    {
      number: 7,
      icon: "Truck",
      title: "Курьер забирает",
      description:
        "Курьер в маске енота в течение часа забирает Ваш пакет и выносит до ближайшего мусорного контейнера",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Как мы <span className="text-green-600">работаем</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой процесс в 7 шагов - и ваш мусор больше не проблема!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Card className="w-full h-48 hover:shadow-lg transition-shadow mb-4">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-green-600 font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                  <Icon
                    name={step.icon}
                    size={32}
                    className="text-green-600 mb-3"
                  />
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {step.title}
                  </h3>
                </CardContent>
              </Card>
              <p className="text-gray-600 text-sm max-w-32">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute mt-24 ml-40">
                  <Icon name="ArrowRight" size={24} className="text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-orange-100 px-6 py-3 rounded-full">
            <span className="text-2xl mr-2">🦝</span>
            <span className="text-orange-800 font-semibold">
              Весь процесс занимает всего несколько минут!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
