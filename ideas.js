// Массив с идеями для рисунков
var ideas = [
    "Пейзаж солнечного заката",
    "Абстрактная композиция с геометрическими фигурами",
    "Портрет домашнего питомца",
    "Фантастический пейзаж с вымышленными существами",
    "Рисунок вашего любимого места",
    "Портрет любимого актера или актрисы",
    "Иллюстрация к сказке или рассказу",
    "Вид из окна вашего дома",
    "Макрофотография природных объектов",
    "Пейзаж города в ночное время",
    "Абстрактный паттерн с использованием цветов",
    "Реалистичная копия известного произведения искусства",
    "Композиция из различных текстур и материалов",
    "Портрет дорогого вам человека",
    "Иллюстрация к фильму или книге",
    "Вид на космос и планеты",
    "Фантастический лес с волшебными существами",
    "Граффити на стене",
    "Абстрактная интерпретация музыкальной композиции",
    "Пейзаж зимнего леса с снегом и елками",
    "Портрет знаменитой личности",
    "Фантастический мир подводного царства",
    "Иллюстрация к легендам и мифам",
    "Вид на горы и ледники",
    "Абстрактная композиция с использованием только линий",
    "Рисунок рассвета на море",
    "Портрет детей или детских героев",
    "Фантастический космический корабль",
    "Иллюстрация к стихотворению или песне",
    "Пейзаж летнего поля с цветами и травой",
    "Портрет животного в своей естественной среде",
    "Абстрактное изображение планетарной системы",
    "Рисунок морской глубины с подводными жителями",
    "Фантастический город будущего",
    "Иллюстрация к историческому событию",
    "Пейзаж затерянного города в джунглях",
    "Портрет музыкального инструмента",
    "Абстрактная интерпретация понятия времени",
    "Рисунок сказочного существа или героя",
    "Фантастический дракон или мифическое существо",
    "Иллюстрация к фантастическому роману",
    "Пейзаж средневекового замка",
    "Портрет члена семьи или родственника",
    "Абстрактный рисунок с использованием точек",
    "Рисунок ночного неба с звездами и планетами",
    "Фантастический мир с деревьями и кристаллами",
    "Иллюстрация к фольклорной сказке",
    "Пейзаж весеннего леса с цветущими деревьями",
    "Портрет супергероя или фантастического персонажа"
];

// Функция для выбора случайной идеи из массива
function getRandomIdea() {
    var randomIndex = Math.floor(Math.random() * ideas.length);
    return ideas[randomIndex];
}

// Обработчик события
document.getElementById('randomIdeaButton').addEventListener('click', function() {
    var randomIdea = getRandomIdea();
    document.getElementById('randomIdeaText').innerText = "" + randomIdea;
});
