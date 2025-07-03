import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6 animate-bounce">🦝💼</div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-green-600">Мусорный Воришка</span>
            <br />
            <span className="text-purple-600">легально ворует мусор!</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Избавляем от лишних хлопот! Выносим бытовой мусор от двери квартиры
            до контейнера быстро и аккуратно 🗑️
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8"
            >
              <Icon name="Trash2" size={20} className="mr-2" />
              Заказать вывоз мусора
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>

          <div className="flex justify-center items-center mt-12 space-x-8 text-gray-600">
            <div className="flex items-center">
              <Icon name="Clock" size={20} className="mr-2 text-green-600" />
              <span>Быстро</span>
            </div>
            <div className="flex items-center">
              <Icon name="Shield" size={20} className="mr-2 text-green-600" />
              <span>Надёжно</span>
            </div>
            <div className="flex items-center">
              <Icon name="Heart" size={20} className="mr-2 text-green-600" />
              <span>С заботой</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
