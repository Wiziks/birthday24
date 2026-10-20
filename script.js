
const scenarios = [
    {
        buttonText: "Маленьку частинку любові",
        dialogue1: "Я вже знаю твоє питання⬇",
        button1: "Чого маленьку?!?!",
        dialogue2: "Бо велику, врєдіна, ти отримаєш при зустрічі зі мною",
        button2: "Ну ладно)"
    },
    {
        buttonText: "Антистрес",
        dialogue1: "Так сказать, чпокать - не перечпокать)",
        button1: "Вааау🤩",
        dialogue2: "Як подарок, так собі, але ти мене дуже просила залишить, тому залишаю)",
        button2: "Сяб😊"
    },
    {
        buttonText: "Розслабиться",
        dialogue1: "Якщо що, це я про табакі. Але ти скажеш, що поняла це й так, того не треба тут пояснювати",
        button1: "Скажу!",
        dialogue2: "Чесно, я вже не памʼятаю, які там вкуси, але я надєюсь, що тобі вони підійдуть)",
        button2: "Ну надєйся😁"
    },
    {
        buttonText: "Запалить",
        dialogue1: "Це, до речі, горіхове вугіля, а не кокосове. Знаєш, у чому різниця? Не знаєш? А запитай мене) Ось запитай, у чаому різниця",
        button1: "Ну і в чому ж?",
        dialogue2: "А я тоже не знаю😊",
        button2: "Максіііі😂"
    },
    {
        buttonText: "Поскучать за мною",
        dialogue1: "Це пінгвінчік😏 Понімаю, ти маленький осінній скорпіончик, але ну ніяк не зимовий. Але! По-перше, це можна все познімати, а, по-друге, він такий мииииииленький у цьому😍",
        button1: "😏",
        dialogue2: "Хочу відео, де ти від нього кончаєш😏",
        button2: "😏"
    },
    {
        buttonText: "Попить",
        dialogue1: "Ну, тут і так усе понятно",
        button1: "Понятно)",
        dialogue2: "Ти, скоріше за все, цей варіант вибереш останнім, тому я хочу тобі ще раз сказати, що ти сама-сама миленька Бусінка❤️ Я дуже скучаю за тобою й дуже хочу бути рядом з тобою((",
        button2: "❤️"
    }
];

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const dialogue = document.getElementById("dialogue");

const startButton = document.getElementById("startButton");
const scenarioButtons = document.getElementById("scenarioButtons");
const dialogueText = document.getElementById("dialogueText");
const dialogueButton = document.getElementById("dialogueButton");

let currentScenario = null;
let currentDialogue = 0;

function showPage(page) {
    home.hidden = page !== home;
    menu.hidden = page !== menu;
    dialogue.hidden = page !== dialogue;
}

// Генеруємо кнопки на основі масиву сценаріїв.
function renderMenu() {
    scenarioButtons.replaceChildren();

    scenarios.forEach((scenario, index) => {
        const button = document.createElement("button");
        button.textContent = scenario.buttonText;

        button.addEventListener("click", () => {
            startScenario(index);
        });

        scenarioButtons.appendChild(button);
    });
}

// Запускаємо вибраний сценарій.
function startScenario(index) {
    currentScenario = scenarios[index];
    currentDialogue = 0;

    showDialogue();
}

// Показуємо поточний діалог і текст кнопки з масиву.
function showDialogue() {
    const scenario = currentScenario;

    if (currentDialogue === 0) {
        dialogueText.textContent = scenario.dialogue1;
        dialogueButton.textContent = scenario.button1;
    } else {
        dialogueText.textContent = scenario.dialogue2;
        dialogueButton.textContent = scenario.button2;
    }

    showPage(dialogue);
}

// Перехід між двома діалогами.
dialogueButton.addEventListener("click", () => {
    if (currentDialogue === 0) {
        currentDialogue = 1;
        showDialogue();
    } else {
        currentScenario = null;
        showPage(menu);
    }
});

startButton.addEventListener("click", () => {
    showPage(menu);
});

renderMenu();
showPage(home);
