let quizStarted = false;

function startQuiz() {
    quizStarted = true;
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    loadQuestion();
}


function showResult() {
    quizStarted = false;
    document.getElementById("question-container").style.display = "none";
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `<h2>Resultado Final:</h2><p>Pontuação: ${score}/${questions.length}</p>`;
}

// Array de perguntas e respostas (você pode carregar isso do PHP)
const questions = [
    {
        question: "Quem foi o líder da Alemanha durante a Segunda Guerra Mundial?",
        options: ["Winston Churchill", "Adolf Hitler", " Franklin D. Roosevelt"],
        answer: 1,// Índice da resposta correta
        background: "imagens/01soldado.jpg",
       
    },
    {
        question: "Qual foi o primeiro país atacado pela Alemanha, dando início à Segunda Guerra Mundial?",
        options: ["França", "Polônia", "Rússia"],
        answer: 1, 
        background: "imagens/02avioes.jpg"
    },
    {
        question: "Em que ano a Segunda Guerra Mundial começou?",
        options: ["1939", "1914", "1815"],
        answer: 0,
        background: "imagens/02china.jpg"
    },
    {
        question: "Qual foi o nome do grupo de países que lutaram contra a Alemanha durante a guerra?",
        options: ["Neutros", "Axis", "Aliados"],
        answer: 2,
        background: "imagens/04guerra.jpg"
    },
    {
        question: "Em quais cidades do Japão foram lançadas as bombas atômicas pelos Estados Unidos em agosto de 1945, encerrando a Segunda Guerra Mudnial?",
        options: ["Tóquio e Quito", "Fukoshima e Osaka", "Hiroshima e Nagasaki"],
        answer: 2,
        background: "imagens/05mar.jpg"
    },
    {
        question: "O que foi o Dia D na Segunda Guerra Mundial?",
        options: ["O dia em que os Estados Unidos se juntaram à guerra", "O dia em que a Alemanha se rendeu", "O dia do desembarque das forças aliadas na Normandia, na França, em 1944"],
        answer: 2,
        background: "imagens/06stalingrado.jpg"
    },
    {
        question: "Qual país sofreu mais perdas humanas durante a Segunda Guerra Mundial?",
        options: ["Alemanha", "União Soviética", "Japão"],
        answer: 1,
        background: "imagens/07tanque.jpg"
    },
    {
        question: "Qual foi a principal causa da Segunda Guerra Mundial?",
        options: ["Disputa por petróleo", "Conflitos religiosos", "Nacionalismo extremo e expansão territorial"],
        answer: 2,
        background: "imagens/08cidade.jpg"
    },
    {
        question: "O que foi o Holocausto durante a Segunda Guerra Mundial?",
        options: ["Uma série de batalhas no oceano Atlântico", "O plano de paz para encerrar a guerra", "O genocídio dos judeus e de outros grupos pela Alemanha nazista e seus aliados"],
        answer: 2,
        background: "imagens/09polonia.jpg"
    },
    {
        question: "Qual foi o nome do general americano que mais tarde se tornou presidente dos Estados Unidos após a guerra?",
        options: ["Dwight D. Eisenhower", "Douglas MacArthur", "George Patton"],
        answer: 0,
        background: "imagens/02avioes.jpg"
    }

    // Adicione mais perguntas aqui
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const questionContainer = document.getElementById("question-container");
        const question = questions[currentQuestion];

        // Atualize o estilo de fundo do question-container
        questionContainer.style.backgroundImage = `url(${question.background})`;

        questionContainer.innerHTML = `
            <h2>${question.question}</h2>
            <ul>
                ${question.options.map((option, index) => `
                    <li>
                        <input type="radio" name="answer" value="${index}" id="option${index}">
                        <label for="option${index}">${option}</label>
                    </li>
                `).join('')}
            </ul>
            <button onclick="checkAnswer()">Verificar Resposta</button>
            <p id="feedback"></p>
            <button id="next-button" onclick="nextQuestion()" style="display: none;">Próxima Pergunta</button>
        `;
    } else {
        showResult();
    }
}


/*function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");

    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);

        if (answerIndex === questions[currentQuestion].answer) {
            score++;
            feedback.textContent = "Você acertou!";
        } else {
            feedback.textContent = "Você errou.";
        }

        // Exiba o botão "Próxima Pergunta"
        nextButton.style.display = "block";
    }
}
*/
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");

    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);

        if (answerIndex === questions[currentQuestion].answer) {
            score++;
            feedback.textContent = "Você acertou!";
            feedback.classList.remove("incorrect");
            feedback.classList.add("correct");
        } else {
            feedback.textContent = "Você errou.";
            feedback.classList.remove("correct");
            feedback.classList.add("incorrect");
        }

        // Exiba o botão "Próxima Pergunta"
        nextButton.style.display = "block";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}


// Inicialização
loadQuestion();

