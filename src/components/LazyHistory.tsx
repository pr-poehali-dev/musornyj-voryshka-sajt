import { Card, CardContent } from "@/components/ui/card";

const LazyHistory = () => {
  return (
    <section
      id="lazy-history"
      className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Краткая история человеческой{" "}
            <span className="text-amber-600">лени</span> и мусора
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Или почему еноты пришли так поздно?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-3">🏛</span>
              <h4 className="font-bold text-amber-800">Древняя Греция</h4>
            </div>
            <p className="text-amber-700 text-sm leading-relaxed">
              Философы спорили о смысле жизни, но никто не хотел выносить
              объедки с симпозиума. «Пусть рабы носят!» – и так появилась первая
              аутсорсинговая услуга.
            </p>
          </div>

          <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-stone-400">
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-3">🏰</span>
              <h4 className="font-bold text-stone-800">Средние века</h4>
            </div>
            <p className="text-stone-700 text-sm leading-relaxed">
              Рыцари бились за честь дам, но никто не хотел таскать вонючие
              отходы из замка. Пусть крестьяне разбираются! – и так родился
              феодальный мусорный сервис.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-3">🏭</span>
              <h4 className="font-bold text-gray-800">XX век</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Человечество изобрело телевидение, интернет и доставку еды, но
              выносить мусор всё равно было лень. Может, само исчезнет? – но
              нет.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-3">🚀</span>
              <h4 className="font-bold text-purple-800">2020-е</h4>
            </div>
            <p className="text-purple-700 text-sm leading-relaxed">
              Наконец-то прогресс дошел и до этого! Больше не нужно откладывать
              пакет до "завтра" На помощь к нам пришли еноты, они теперь не
              мусорят, а аккуратно выносят пакеты на помойку.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LazyHistory;
