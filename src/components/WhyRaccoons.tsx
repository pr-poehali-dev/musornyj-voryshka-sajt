import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const WhyRaccoons = () => {
  const reasons = [
    {
      emoji: "🧼",
      title: "Чистоплотность",
      description:
        "Еноты любят чистоту и порядок - после нас не останется следов",
    },
    {
      emoji: "💪",
      title: "Ловкость",
      description:
        "Еноты очень ловкие и справятся даже с самыми неудобными пакетами",
    },
    {
      emoji: "😊",
      title: "Дружелюбие",
      description:
        "Еноты милые и дружелюбные - общение с нами приносит только радость",
    },
    {
      emoji: "🎯",
      title: "Точность",
      description:
        "Еноты точно знают, где находится каждый контейнер в вашем дворе",
    },
  ];

  return (
    <section
      id="why-raccoons"
      className="py-16 px-4 bg-gradient-to-br from-purple-50 to-green-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему именно <span className="text-purple-600">еноты</span>?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Еноты - природные эксперты по "воровству" мусора! Теперь они делают
            это легально и профессионально 🦝
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 animate-pulse">
                  {reason.emoji}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-100 px-6 py-3 rounded-full">
            <Icon name="Heart" size={20} className="text-green-600 mr-2" />
            <span className="text-green-800 font-semibold">
              Еноты пришли, чтобы решить проблему раз и навсегда!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRaccoons;
