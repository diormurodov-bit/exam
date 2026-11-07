
const questions = [
{
q: "Чем векторное изображение отличается от растрового?",
a: ["Вектор состоит из математических объектов и масштабируется без потери качества", "Растр состоит из HTML-тегов", "Вектор всегда занимает больше памяти", "Оба формата устроены одинаково"],
c: 0
},
{
q: "Что означает статус 401?",
a: ["404 — ресурс не найден", "200 — успешный ответ", "500 — ошибка сервера", "All options are incorrect"],
c: 3
},
{
q: "Что создаст эта запись? .grid { display: grid; grid-template-columns: repeat(3, 1fr); }",
a: ["Три строки одинаковой высоты", "Три колонки одинаковой доли доступной ширины", "Три элемента поверх друг друга", "Три колонки шириной 1px"],
c: 1
},
{
q: "Где нужно написать transition, чтобы анимация работала и при наведении, и при уходе курсора?",
a: ["Только в :hover", "Внутри @keyframes", "В основном селекторе элемента", "Только в :active"],
c: 2
},
{
q: "Что выведет код? console.log('5' + 3);",
a: ["8", "53", "NaN", "Ошибка"],
c: 1
},
{
q: "Какой метод удаляет ПЕРВЫЙ элемент массива?",
a: ["pop()", "push()", "shift()", "unshift()"],
c: 2
},
{
q: "Какой селектор выберет элемент с id=\"menu\"?",
a: [".menu", "#menu", "menu", "*menu"],
c: 1
},
{
q: "Где в ответе Axios лежат данные с сервера?",
a: ["response.data", "response.body", "response.json", "response.content"],
c: 0
},
{
q: "Как правильно передать токен в заголовке запроса?",
a: ["Authorization: Bearer TOKEN", "Token: Authorization TOKEN", "Content-Type: TOKEN", "Bearer: Authorization"],
c: 0
},
{
q: "Какой доступ дать разработчику, которому нужно только смотреть макет?",
a: ["Can edit", "Can view", "Owner", "Can manage"],
c: 1
},
{
q: "Что делает box-sizing: border-box?",
a: ["Убирает padding и border", "Включает padding и border в заданные width и height", "Добавляет внешнюю рамку", "Меняет блочную модель на flex"],
c: 1
},
{
q: "Чем innerText отличается от innerHTML?",
a: ["innerText работает только с картинками", "innerHTML работает с HTML-разметкой, innerText — с видимым текстом", "innerText исполняет JavaScript", "Разницы нет"],
c: 1
},
{
q: "Чем const отличается от let?",
a: ["const нельзя переназначить, let можно", "let нельзя изменить, const можно", "Оба всегда глобальные", "const работает только в CSS"],
c: 0
},
{
q: "Зачем у картинки прописывают width и height в HTML?",
a: ["Чтобы браузер заранее зарезервировал место и уменьшил сдвиги макета", "Чтобы картинка стала SVG", "Чтобы отключить загрузку", "Чтобы автоматически обрезать изображение"],
c: 0
},
{
q: "Зачем заявку с формы отправляют в Telegram через Google Apps Script, а не напрямую из JS сайта?",
a: ["Чтобы скрыть секретные ключи и выполнять отправку на серверной стороне", "Потому что JavaScript не умеет отправлять запросы", "Чтобы Telegram работал без интернета", "Чтобы заменить HTML"],
c: 0
},
{
q: "Как получить значение свойства name у объекта user?",
a: ["user->name", "user.name", "user(name)", "user[name()]"],
c: 1
},
{
q: "Что выведет код? console.log(typeof null);",
a: ["null", "object", "undefined", "boolean"],
c: 1
},
{
q: "Какое событие срабатывает при клике правой кнопкой мыши?",
a: ["mouseenter", "contextmenu", "dblclick", "submit"],
c: 1
},
{
q: "Какой формат лучше выбрать для фотографий на сайте?",
a: ["JPEG или WebP", "SVG", "TXT", "ICO"],
c: 0
},
{
q: "В каком порядке появятся сообщения? console.log('A'); axios.get(url).then(() => console.log('B')); console.log('C');",
a: ["A, B, C", "B, A, C", "A, C, B", "C, A, B"],
c: 2
},
{
q: "Что делает команда code . ?",
a: ["Удаляет текущую папку", "Открывает текущую папку в Visual Studio Code", "Запускает GitHub", "Создаёт файл .code"],
c: 1
},
{
q: "Что произойдёт с сайтом на Netlify после git push в подключённый репозиторий?",
a: ["Сайт автоматически запустит новую сборку и деплой", "Репозиторий удалится", "Нужно всегда вручную загружать ZIP", "Сайт отключится навсегда"],
c: 0
},
{
q: "Почему нельзя ставить loading=\"lazy\" на главную картинку первого экрана?",
a: ["Она может загружаться с задержкой и ухудшить LCP", "Lazy loading запрещён для всех изображений", "Картинка станет слишком большой", "Браузер перестанет понимать HTML"],
c: 0
},
{
q: "Где пишется текст, который видно синей ссылкой в результатах Google?",
a: ["В title страницы", "В alt изображения", "В CSS content", "В атрибуте width"],
c: 0
},
{
q: "Какое значение position оставит шапку на экране при прокрутке?",
a: ["static", "fixed", "relative", "initial"],
c: 1
},
{
q: "Для чего нужен Pull Request?",
a: ["Для предложения изменений и их проверки перед слиянием", "Для удаления репозитория", "Для запуска локального сервера", "Для скачивания Figma"],
c: 0
},
{
q: "Куда вы попадёте из папки /Users/ali/projects/site после команды cd ..?",
a: ["/Users/ali/projects", "/Users/ali", "/Users", "/Users/ali/projects/site"],
c: 0
},
{
q: "Какой тег отвечает за самый главный заголовок страницы?",
a: ["<h6>", "<header>", "<h1>", "<title>"],
c: 2
},
{
q: "Что вернёт функция? function sum(a, b) { a + b; } console.log(sum(2, 3));",
a: ["5", "undefined", "null", "NaN"],
c: 1
},
{
q: "Почему компонент шапки не загружается через fetch, если открыть страницу двойным кликом?",
a: ["Страница открыта через file://, и браузер ограничивает такие запросы; нужен локальный сервер", "Fetch работает только на телефоне", "HTML не поддерживает fetch", "Нужно удалить CSS"],
c: 0
},
{
q: "Почему при автоматическом сборе формы пишут data[field.name], а не data.field.name?",
a: ["Имя поля хранится в переменной, поэтому используют квадратные скобки", "Точка запрещена в JavaScript", "field.name всегда число", "Квадратные скобки создают HTML"],
c: 0
},
{
q: "Почему превью ссылки в Telegram показывается без картинки? <meta property=\"og:image\" content=\"img/preview.jpg\">",
a: ["Относительный путь может быть недоступен парсеру; нужен абсолютный публичный URL", "Telegram не показывает изображения", "Нужно указать картинку в CSS", "Нужно использовать только PNG"],
c: 0
},
{
q: "Как центрировать дочерний блок по горизонтали и вертикали во flex-контейнере?",
a: ["justify-content: center; align-items: center;", "text-align: center; float: center;", "margin: auto 0; display: block;", "position: static;"],
c: 0
},
{
q: "Какое правило применится, если у элемента есть и класс, и id с разными цветами? #title { color: red; } .title { color: blue; }",
a: ["Синий цвет, потому что класс ниже", "Красный цвет, потому что специфичность id выше", "Оба цвета одновременно", "Цвет будет случайным"],
c: 1
},
{
q: "Какая запись ссылки откроет страницу в новой вкладке?",
a: ["<a href=\"page.html\" target=\"_blank\">", "<a href=\"page.html\" newtab>", "<link href=\"page.html\">", "<a open=\"new\">"],
c: 0
},
{
q: "Что делает файл .gitignore?",
a: ["Указывает Git, какие файлы и папки не отслеживать", "Хранит пароль GitHub", "Удаляет историю коммитов", "Запускает проект"],
c: 0
},
{
q: "Что произойдёт с файлом после команды rm notes.txt?",
a: ["Файл будет переименован", "Файл будет удалён", "Файл откроется", "Файл отправится в GitHub"],
c: 1
},
{
q: "Чем refresh-токен отличается от access-токена?",
a: ["Refresh обычно дольше живёт и используется для получения нового access-токена", "Access нужен только для смены пароля", "Refresh передаётся вместо HTML", "Разницы нет"],
c: 0
},
{
q: "Какой формат записи данных используют для обмена между фронтендом и бэкендом?",
a: ["JSON", "PSD", "SVG", "MP3"],
c: 0
},
{
q: "Когда возникает конфликт слияния?",
a: ["Когда Git не может автоматически объединить несовместимые изменения", "Когда создан новый файл", "При каждом git push", "Когда открывают терминал"],
c: 0
},
{
q: "Что выведет команда pwd?",
a: ["Список файлов", "Текущий путь к рабочей папке", "Версию Node.js", "Имя Git-ветки"],
c: 1
},
{
q: "Что делает метод trim()?",
a: ["Удаляет пробелы в начале и конце строки", "Удаляет все буквы", "Округляет число", "Разделяет строку на массив"],
c: 0
},
{
q: "Что вернёт document.querySelectorAll('.card')?",
a: ["Первый элемент с классом card", "Коллекцию всех подходящих элементов", "Строку card", "Количество карточек числом"],
c: 1
},
{
q: "Относительно чего позиционируется элемент с position: absolute?",
a: ["Всегда относительно окна браузера", "Относительно ближайшего позиционированного предка, иначе начального контейнера", "Относительно соседнего элемента", "Относительно курсора"],
c: 1
},
{
q: "Зачем экспортировать картинки из Figma в 2x?",
a: ["Чтобы получить более чёткое изображение на экранах с высокой плотностью пикселей", "Чтобы уменьшить число цветов", "Чтобы файл стал векторным", "Чтобы убрать прозрачность"],
c: 0
},
{
q: "Что вернёт выражение? /^\\d+$/.test('12a')",
a: ["true", "false", "12", "Ошибка синтаксиса"],
c: 1
},
{
q: "В каком направлении пойдёт градиент? background: linear-gradient(90deg, red, blue);",
a: ["Сверху вниз", "Слева направо", "Справа налево", "По диагонали"],
c: 1
},
{
q: "Чем отличаются теги <head> и <header>?",
a: ["head содержит метаданные документа, header — видимую шапку страницы или раздела", "Оба предназначены только для заголовков", "header находится только в head", "Разницы нет"],
c: 0
},
{
q: "Какой метод добавит класс, если его нет, и уберёт, если он есть?",
a: ["classList.add()", "classList.remove()", "classList.toggle()", "className.clear()"],
c: 2
},
{
q: "Какой метод HTTP используют, чтобы создать новую запись на сервере?",
a: ["GET", "POST", "DELETE", "HEAD"],
c: 1
},
{
q: "Блок width: 200px, padding: 20px, border: 5px. Какая будет полная ширина при content-box?",
a: ["200px", "220px", "250px", "240px"],
c: 2
},
{
q: "Можно ли хранить пароль внутри JWT-токена?",
a: ["Да, JWT всегда зашифрован", "Нет, JWT payload обычно можно прочитать; пароль туда помещать нельзя", "Да, если пароль короткий", "Только в CSS"],
c: 1
},
{
q: "Какой тег используют для основного уникального содержимого страницы?",
a: ["<main>", "<aside>", "<footer>", "<nav>"],
c: 0
},
{
q: "Что выведет код? const arr = [1, 2, 3]; arr.push(4); console.log(arr.length);",
a: ["3", "4", "5", "undefined"],
c: 1
},
{
q: "Как в Figma узнать расстояние между двумя элементами?",
a: ["Выбрать элемент и посмотреть расстояния при удержании Alt/Option относительно другого элемента", "Открыть DevTools браузера", "Нажать Delete", "Изменить opacity"],
c: 0
},
{
q: "Что делает команда git checkout -b feature-header?",
a: ["Удаляет ветку feature-header", "Создаёт новую ветку feature-header и переключается на неё", "Отправляет изменения на GitHub", "Сливает ветки"],
c: 1
},
{
q: "Что нужно подключить, чтобы работала библиотека Swiper через CDN?",
a: ["Только HTML-тег title", "CSS-файл Swiper, JavaScript-файл Swiper и инициализацию библиотеки", "Только Google Fonts", "Node.js обязательно на сервере"],
c: 1
},
{
q: "Зачем в обработчике submit вызывают event.preventDefault()?",
a: ["Чтобы отменить стандартную отправку/перезагрузку формы и обработать её через JavaScript", "Чтобы очистить все поля", "Чтобы автоматически отправить форму дважды", "Чтобы отключить кнопку навсегда"],
c: 0
},
{
q: "Когда сработают эти стили? @media (max-width: 768px) { .menu { display: none; } }",
a: ["При ширине viewport 768px или меньше", "При ширине больше 768px", "Только при печати", "Только на десктопе"],
c: 0
},
{
q: "Что произойдёт с блоками при flex-wrap: wrap, если они не помещаются в строку?",
a: ["Они уменьшатся до нуля", "Лишние элементы перенесутся на следующую строку", "Контейнер исчезнет", "Элементы станут absolute"],
c: 1
},
{
q: "Что означает статус 404?",
a: ["Нет доступа", "Ресурс не найден", "Успешный ответ", "All options are incorrect"],
c: 1
},
{
q: "Что попадёт в атрибут alt у картинки?",
a: ["Описание изображения или альтернативный текст", "Путь к CSS", "Размер файла", "Имя разработчика"],
c: 0
},
{
q: "Какая последовательность отправляет изменения на GitHub?",
a: ["git add → git commit → git push", "git push → git add → git commit", "git pull → git delete → git add", "git commit → git reset → git clone"],
c: 0
},
{
q: "Зачем перед git push делают git pull?",
a: ["Чтобы получить новые удалённые изменения и синхронизировать свою ветку", "Чтобы удалить локальные файлы", "Чтобы создать аккаунт GitHub", "Чтобы заменить commit сообщением"],
c: 0
}
];

// ЭЛЕМЕНТЫ СТРАНИЦЫ
const startScreen = document.getElementById("startScreen");
const examScreen = document.getElementById("examScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");

const questionCounter = document.getElementById("questionCounter");
const questionNumber = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const answerStatus = document.getElementById("answerStatus");
const questionNavigation = document.getElementById("questionNavigation");

const letters = ["A", "B", "C", "D"];

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);

// НАЧАЛО ЭКЗАМЕНА
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    examScreen.classList.remove("hidden");

    renderQuestion();
});

// ОТОБРАЖЕНИЕ ВОПРОСА
function renderQuestion() {
    const question = questions[currentQuestion];

    questionText.textContent = question.q;

    questionCounter.textContent =
        `Вопрос ${currentQuestion + 1} из ${questions.length}`;

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

    const answered = userAnswers.filter(
        answer => answer !== null
    ).length;

    const percent = Math.round(
        answered / questions.length * 100
    );

    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;

    answersContainer.innerHTML = "";

    question.a.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "answer";

        if (userAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        const letter = document.createElement("span");
        letter.className = "answer-letter";
        letter.textContent = letters[index];

        const text = document.createElement("span");
        text.textContent = option;

        button.append(letter, text);

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answersContainer.appendChild(button);
    });

    answerStatus.textContent =
        userAnswers[currentQuestion] === null
            ? "Выбери один ответ"
            : "Ответ выбран";

    prevBtn.disabled = currentQuestion === 0;

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Завершить экзамен"
            : "Следующий →";

    renderNavigation();
}

// ВЫБОР ОТВЕТА
function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    renderQuestion();
}

// НАВИГАЦИЯ ПО ВОПРОСАМ
function renderNavigation() {
    questionNavigation.innerHTML = "";

    questions.forEach((question, index) => {
        const button = document.createElement("button");

        button.className = "nav-number";
        button.textContent = index + 1;

        if (userAnswers[index] !== null) {
            button.classList.add("answered");
        }

        if (currentQuestion === index) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            currentQuestion = index;
            renderQuestion();
        });

        questionNavigation.appendChild(button);
    });
}

// НАЗАД
prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
});

// СЛЕДУЮЩИЙ ВОПРОС
nextBtn.addEventListener("click", () => {
    if (userAnswers[currentQuestion] === null) {
        answerStatus.textContent = "Сначала выбери ответ!";
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        finishExam();
    }
});

// ЗАВЕРШЕНИЕ ЭКЗАМЕНА
function finishExam() {

    const unanswered = userAnswers.filter(
        answer => answer === null
    ).length;

    if (unanswered > 0) {
        const firstEmpty = userAnswers.indexOf(null);

        alert(
            `Ты ещё не ответил на ${unanswered} вопрос(а).`
        );

        currentQuestion = firstEmpty;
        renderQuestion();
        return;
    }

    let correct = 0;

    questions.forEach((question, index) => {
        if (userAnswers[index] === question.c) {
            correct++;
        }
    });

    const wrong = questions.length - correct;

    const percentage = Math.round(
        correct / questions.length * 100
    );

    const passed = percentage >= 70;

    // ПОКАЗ РЕЗУЛЬТАТОВ
    examScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    document.getElementById("scorePercent").textContent =
        percentage + "%";

    document.getElementById("correctCount").textContent =
        correct;

    document.getElementById("wrongCount").textContent =
        wrong;

    document.getElementById("totalCount").textContent =
        questions.length;

    const resultTitle = document.getElementById("resultTitle");
    const resultStatus = document.getElementById("resultStatus");

    if (percentage === 100) {
        resultTitle.textContent = "Идеальный результат!";
    } else if (percentage >= 90) {
        resultTitle.textContent = "Отличная работа!";
    } else if (percentage >= 80) {
        resultTitle.textContent = "Очень хороший результат!";
    } else if (percentage >= 70) {
        resultTitle.textContent = "Экзамен сдан!";
    } else {
        resultTitle.textContent = "Экзамен не сдан";
    }

    resultStatus.textContent = passed
        ? "PASSED · ПРОХОДНОЙ БАЛЛ 70%"
        : "FAILED · НУЖНО МИНИМУМ 70%";

    resultStatus.className = passed
        ? "result-status"
        : "result-status failed";

    renderReview();
}

// РАЗБОР ОТВЕТОВ
function renderReview() {
    const reviewList = document.getElementById("reviewList");

    reviewList.innerHTML = "";

    questions.forEach((question, index) => {
        const isCorrect =
            userAnswers[index] === question.c;

        const item = document.createElement("div");

        item.className = isCorrect
            ? "review-item correct"
            : "review-item incorrect";

        const title = document.createElement("h3");
        title.textContent =
            `${index + 1}. ${question.q}`;

        const userAnswer = document.createElement("p");

        if (isCorrect) {
            userAnswer.className = "correct-text";
            userAnswer.textContent =
                `✓ Твой ответ: ${letters[userAnswers[index]]}. ${question.a[userAnswers[index]]}`;
        } else {
            userAnswer.className = "incorrect-text";
            userAnswer.textContent =
                `✕ Твой ответ: ${letters[userAnswers[index]]}. ${question.a[userAnswers[index]]}`;
        }

        const correctAnswer = document.createElement("p");

        correctAnswer.className = "correct-text";
        correctAnswer.textContent =
            `Правильный ответ: ${letters[question.c]}. ${question.a[question.c]}`;

        item.append(title, userAnswer, correctAnswer);

        reviewList.appendChild(item);
    });
}

// ПОВТОРНОЕ ПРОХОЖДЕНИЕ
restartBtn.addEventListener("click", () => {

    currentQuestion = 0;

    userAnswers = new Array(
        questions.length
    ).fill(null);

    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

});
