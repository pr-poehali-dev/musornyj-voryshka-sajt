import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Заказать <span className="text-purple-600">вывоз мусора</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Заполните форму, и наши еноты свяжутся с вами в течение 5 минут!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-green-100">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <span className="text-2xl mr-2">📞</span>
                  Заказать прямо сейчас
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Как к вам обращаться?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Адрес
                    </label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Улица, дом, квартира"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Описание мусора
                    </label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Опишите что нужно вынести..."
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-purple-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon
                      name="Phone"
                      size={20}
                      className="text-purple-600 mr-2"
                    />
                    Контакты
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Icon
                        name="Phone"
                        size={16}
                        className="text-gray-500 mr-3"
                      />
                      <span>+7 (999) 123-45-67</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="MessageCircle"
                        size={16}
                        className="text-gray-500 mr-3"
                      />
                      <span>WhatsApp, Telegram</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Mail"
                        size={16}
                        className="text-gray-500 mr-3"
                      />
                      <span>info@raccoon-cleaner.ru</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon
                      name="Clock"
                      size={20}
                      className="text-orange-600 mr-2"
                    />
                    Режим работы
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Пн-Пт:</span>
                      <span className="font-medium">8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Сб-Вс:</span>
                      <span className="font-medium">10:00 - 18:00</span>
                    </div>
                    <div className="text-sm text-green-600 mt-2">
                      🚀 Срочные заказы - круглосуточно!
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="text-green-600 mr-2"
                    />
                    Работаем по всему городу
                  </h3>
                  <p className="text-gray-600">
                    Наши еноты знают каждый двор и контейнер! Обслуживаем все
                    районы города.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
