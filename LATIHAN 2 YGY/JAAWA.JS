const questions = [
    {
        question: "Siapa pemain utama di watch dogs 2?",
        options: ["wei shen", "Marcus Holloway", "Aiden Pearce", "CJ"],
        answer: 1 // Indeks jawaban yang benar
    },
    {
        question: "Misi terseru di MW2 og?",
        options: ["Mexico", "yo ndak tau kok tanya saya", "No russian", "Gulag"],
        answer: 2
    },
    {
        question: "Di Call Of duty berapa vladimir makarov mati?",
        options: ["WW2", "MW3", "MW1", "BLACK OPS 1"],
        answer: 1
    },
    {
        question: "Apa bahasa resmi Indonesia?",
        options: ["Bahasa Inggris", "Bahasa Indonesia", "Bahasa Jawa", "Bahasa Sunda"],
        answer: 1
    }
];

let currentQuestionIndex = -1;

function loadQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "btn btn-outline-primary m-2";
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
    document.getElementById("feedback").innerText = '';
    document.getElementById("nextQuestion").style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById("feedback");
    if (selectedIndex === currentQuestion.answer) {
        feedbackElement.innerText = "ANDA CERDAS!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.innerText = "Jawaban Salah!";
        feedbackElement.style.color = "red";
    }
    document.getElementById("nextQuestion").style.display = 'block';
}

document.getElementById("nextQuestion").onclick = loadQuestion;

// Load the first question
loadQuestion();