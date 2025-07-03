import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const targetAudience = [
    {
      icon: "🚀",
      description:
        "Для тех, у кого горят дедлайны, а для мусора не осталось времени. Может просто ленивые, но мы не осуждаем.",
    },
    {
      icon: "🤴",
      description:
        "Для парочек, где надо успеть поработать и посмотреть сериал, а мусор сам не телепортируется в мусорный контейнер.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      description:
        "Для семьи, где есть дети, но они еще маленькие, чтобы вынести мусор или родители не умеют заставлять.",
    },
    {
      icon: "👵",
      description:
        "Для бабушек, которые сильнее пакета с отходами, но не обязаны это доказывать. Оставьте время для посиделок на скамейке во дворе.",
    },
    {
      icon: "♿️",
      description:
        "Для тех, кому сложно дойти до контейнера – но легко позвонить нам. Маломобильные граждане у нас в приоритете.",
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Вынос мусора –{" "}
            <span className="text-green-600">теперь наша проблема</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Еноты-профессионалы справятся с любым мусором! Мы понимаем ваши
            потребности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.map((audience, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <CardContent className="text-center p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {audience.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
