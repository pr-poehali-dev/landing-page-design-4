import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">ExpertConsult</h1>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="text-sm hover:text-primary transition-colors">Главная</a>
            <a href="#advantages" className="text-sm hover:text-primary transition-colors">Преимущества</a>
            <a href="#features" className="text-sm hover:text-primary transition-colors">Функции</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Цены</a>
            <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm">Связаться</Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Экспертиза, которая<br />меняет бизнес
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Консалтинговые решения для роста вашей компании. Стратегия, аналитика и внедрение.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Начать сотрудничество
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "TrendingUp",
                title: "Рост эффективности",
                description: "Увеличиваем показатели бизнеса на 40% в среднем за первый год работы"
              },
              {
                icon: "Users",
                title: "Опытная команда",
                description: "Более 50 экспертов с опытом работы в крупнейших компаниях мира"
              },
              {
                icon: "Target",
                title: "Индивидуальный подход",
                description: "Каждое решение адаптировано под специфику вашего бизнеса"
              },
              {
                icon: "Shield",
                title: "Гарантия результата",
                description: "Работаем до достижения KPI или возвращаем инвестиции"
              },
              {
                icon: "Zap",
                title: "Быстрый старт",
                description: "Первые результаты и рекомендации уже через 2 недели"
              },
              {
                icon: "Award",
                title: "Лидеры рынка",
                description: "Признанные эксперты с международными сертификациями"
              }
            ].map((advantage, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Что мы делаем</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: "LineChart",
                  title: "Стратегический консалтинг",
                  description: "Разработка долгосрочной стратегии развития бизнеса с учетом рыночных трендов"
                },
                {
                  icon: "Database",
                  title: "Аналитика и Big Data",
                  description: "Глубокий анализ данных для принятия обоснованных бизнес-решений"
                },
                {
                  icon: "Cog",
                  title: "Оптимизация процессов",
                  description: "Автоматизация и улучшение операционных процессов компании"
                },
                {
                  icon: "Rocket",
                  title: "Цифровая трансформация",
                  description: "Внедрение современных технологий для повышения конкурентоспособности"
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-12 h-[500px] flex items-center justify-center">
              <Icon name="BarChart3" size={200} className="text-primary/40" />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Тарифные планы</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Выберите оптимальное решение для вашего бизнеса
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Стартовый",
                price: "150 000",
                period: "месяц",
                features: [
                  "1 проект в месяц",
                  "Базовая аналитика",
                  "Email поддержка",
                  "Ежемесячный отчет",
                  "2 консультации"
                ],
                popular: false
              },
              {
                name: "Профессиональный",
                price: "350 000",
                period: "месяц",
                features: [
                  "3 проекта в месяц",
                  "Расширенная аналитика",
                  "Приоритетная поддержка",
                  "Еженедельные отчеты",
                  "Безлимитные консультации",
                  "Выделенный менеджер"
                ],
                popular: true
              },
              {
                name: "Корпоративный",
                price: "По запросу",
                period: "",
                features: [
                  "Безлимитные проекты",
                  "Полная аналитика и BI",
                  "24/7 поддержка",
                  "Персональная команда",
                  "Обучение сотрудников",
                  "Индивидуальные условия"
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground"> ₽/{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей Морозов",
                position: "CEO, TechStart",
                text: "Благодаря команде ExpertConsult мы увеличили продажи на 65% за полгода. Профессионализм на высшем уровне.",
                rating: 5
              },
              {
                name: "Елена Волкова",
                position: "Директор по развитию, RetailGroup",
                text: "Отличный опыт сотрудничества. Особенно впечатлила глубина аналитики и практичность рекомендаций.",
                rating: 5
              },
              {
                name: "Дмитрий Соколов",
                position: "Основатель, FinTech Solutions",
                text: "Работали над цифровой трансформацией. Результат превзошел ожидания — процессы стали в 3 раза быстрее.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.position}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Как быстро можно начать работу?",
                answer: "Мы можем начать работу в течение 3-5 рабочих дней после подписания договора. Первая встреча и диагностика проводятся в первую неделю."
              },
              {
                question: "Какие гарантии вы предоставляете?",
                answer: "Мы гарантируем достижение согласованных KPI или возврат 100% инвестиций. Все условия прописываются в договоре с конкретными метриками."
              },
              {
                question: "Работаете ли вы с малым бизнесом?",
                answer: "Да, у нас есть специальные программы для малого и среднего бизнеса. Стартовый тариф разработан специально для компаний на этапе роста."
              },
              {
                question: "Можно ли оплачивать поэтапно?",
                answer: "Конечно. Мы предлагаем гибкие схемы оплаты: помесячно, поэтапно по результатам или по модели success fee."
              },
              {
                question: "Как проходит процесс работы?",
                answer: "Процесс включает: диагностику (1-2 недели), разработку стратегии (2-3 недели), внедрение (от 1 месяца) и сопровождение с регулярными отчетами."
              },
              {
                question: "Работаете ли с иностранными компаниями?",
                answer: "Да, мы работаем с международными клиентами. У нас есть опыт проектов в СНГ, Европе и Азии."
              }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6 border-2">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами в течение 24 часов
          </p>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="ivan@company.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ExpertConsult</h3>
              <p className="text-sm opacity-80">
                Консалтинговые услуги для роста вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Стратегия</li>
                <li>Аналитика</li>
                <li>Оптимизация</li>
                <li>Цифровизация</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Команда</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>info@expertconsult.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            © 2024 ExpertConsult. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
