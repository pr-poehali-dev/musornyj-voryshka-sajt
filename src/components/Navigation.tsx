import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🦝</span>
            <span className="text-xl font-bold text-green-600">
              Мусорный Воришка
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#why-raccoons"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Почему еноты
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Как работаем
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Контакты
            </a>
          </div>

          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
