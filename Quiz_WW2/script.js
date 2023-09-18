let quizStarted = false;

function startQuiz() {
    quizStarted = true;
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    loadQuestion();
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
        question: "Qual o primeiro país atacado pela Alemanha, dando início à Segunda Guerra Mundial?",
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
        question: "Qual foi o nome do grupo de países que lutaram contra a Alemanha durante a guerra, formado por Inglaterra, França, Estados Unidos, Rússia e China?",
        options: ["Neutros", "Axis", "Aliados"],
        answer: 2,
        background: "imagens/04guerra.jpg"
    },
    {
        question: "Em quais cidades do Japão foram lançadas as bombas atômicas pelos Estados Unidos em agosto de 1945, encerrando a Segunda Guerra Mudnial?",
        options: ["Tóquio e Quioto", "Fukoshima e Osaka", "Hiroshima e Nagasaki"],
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
        background: "imagens/03avioes_cidade.jpg"
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
        background: "imagens/08cidade.jpg"
    },
    {
            question: "Quem foi o líder da União Soviética durante a Segunda Guerra Mundial?",
            options: ["Joseph Stalin", "Vladimir Lenin", "Leon Trotsky"],
            answer: 0,
            background: "imagens/01soldado.jpg",
       
    },
    {
        question: "Qual foi o objetivo principal do Projeto Manhattan durante a Segunda Guerra Mundial?",
        options: ["Desenvolver a primeira bomba atômica do mundo", "Construir uma frota de submarinos nucleares", "Criar um sistema de radar avançado"],
        answer: 0,
        background: "imagens/02avioes.jpg"
    },
    {
        question: "Qual foi a principal contribuição militar do Brasil na Segunda Guerra Mundial?",
        options: ["Fornecimento de alimentos para os Aliados", "Participação ativa no combate ao lado das forças Aliadas", "Produção de armas nucleares"],
        answer: 1,
        background: "imagens/02china.jpg"
    },
    {
        question: "O que foi o Tratado de Versalhes, que desempenhou um papel importante nas causas da Segunda Guerra Mundial?",
        options: ["Um acordo de paz que encerrou a Primeira Guerra Mundial", "Um tratado comercial entre Estados Unidos e Reino Unido", "Um acordo de não agressão entre Alemanha e União Soviética"],
        answer: 0,
        background: "imagens/04guerra.jpg"
    },
    {
        question: "Quem era o líder da Grã-Bretanha durante a maior parte da Segunda Guerra Mundial?",
        options: ["Neville Chamberlain", "Clement Attlee", "Winston Churchill"],
        answer: 2,
        background: "imagens/05mar.jpg"
    },
    {
        question: "Qual foi o nome do famoso campo de concentração nazista que se tornou um símbolo do Holocausto?",
        options: ["Auschwitz", "Dachau", "Buchenwald"],
        answer: 0,
        background: "imagens/06stalingrado.jpg"
    },
    {
        question: "Quais foram os principais países do Eixo, aliados da Alemanha na Segunda Guerra Mundial?",
        options: ["França e União Soviética", "Canadá e Austrália", "Itália e Japão"],
        answer: 2,
        background: "imagens/07tanque.jpg"
    },
    {
        question: "Qual foi o resultado decisivo da Batalha de Midway, que ocorreu durante a Segunda Guerra Mundial?",
        options: ["Vitória dos Estados Unidos, enfraquecendo a marinha japonesa", "Vitória do Japão, consolidando seu controle sobre o Pacífico", "Empate com consequências mínimas"],
        answer: 0,
        background: "imagens/03avioes_cidade.jpg"
    },
    {
        question: "Qual foi o resultado da Batalha de Stalingrado, que teve um impacto significativo na Segunda Guerra Mundial?",
        options: ["Vitória da Alemanha, consolidando seu avanço na União Soviética", "Vitória da União Soviética, marcando uma virada na guerra", "Trégua entre os lados em conflito"],
        answer: 1,
        background: "imagens/09polonia.jpg"
    },
    {
        question: "Qual foi um dos eventos-chave que desencadeou a Guerra do Pacífico durante a Segunda Guerra Mundial?",
        options: ["O ataque a Pearl Harbor pelo Japão", "A invasão da Polônia pela Alemanha", "O ataque a Londres pelas forças do Eixo"],
        answer: 0,
        background: "imagens/08cidade.jpg"
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
            const correctAnswerIndex = questions[currentQuestion].answer;
            const correctAnswer = questions[currentQuestion].options[correctAnswerIndex];
            
            feedback.innerHTML = `Você errou. A resposta correta é: <strong>${correctAnswer}</strong>`;
            feedback.classList.remove("correct");
            feedback.classList.add("incorrect");
        }

        // Desabilitar opções de resposta
        const answerOptions = document.querySelectorAll('input[name="answer"]');
        answerOptions.forEach(option => {
            option.disabled = true;
        });

        // Exibir o botão "Próxima Pergunta"
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

function showResult() {
    quizStarted = false;
    document.getElementById("question-container").style.display = "none";
    const resultContainer = document.getElementById("result-container");
    const resultMessage = document.createElement("p");
    resultMessage.classList.add("result-message");

    // Calcula a pontuação final
    const finalScore = score;

    // Define as mensagens com base na pontuação
    let message = "";
    if (finalScore <= 13) {
        message = "Bom, mas você pode melhorar! Responda novamente!";
    } else if (finalScore >= 14 && finalScore <= 17) {
        message = "Parabéns! Você conhece bastante sobre a Segunda Guerra Mundial!";
    } else if (finalScore >= 18) {
        message = "Você é um verdadeiro Mestre das Guerras! Parabéns!";
    }

    // Crie um elemento de parágrafo para exibir a pontuação
    const scoreMessage = document.createElement("p");
    scoreMessage.textContent = `Pontuação: ${finalScore}/${questions.length}`;
    scoreMessage.style.fontSize = "24px"; // Defina o tamanho da fonte

    resultMessage.innerHTML = `Resultado final:<br>${message}`;
    
    // Adicione a mensagem de pontuação ao resultado final
    resultContainer.style.display = "block";
    resultContainer.innerHTML = "";
    resultContainer.appendChild(resultMessage);
    resultContainer.appendChild(scoreMessage);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    document.getElementById("result-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
}

/*function showImages() {
    // Oculta o question-container
    document.getElementById("question-container").style.display = "none";

    // Exibe o result-container com botões e imagens
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Limpa qualquer conteúdo anterior

    // Adiciona as imagens e descrições
    const imageDescriptions = [
        { src: "imagens/01soldado.jpg", description: "Soldado na Segunda Guerra Mundial" },
        { src: "imagens/02avioes.jpg", description: "Aviões da Segunda Guerra Mundial" },
        { src: "imagens/02china.jpg", description: "Cena na China durante a guerra" },
        // Adicione mais imagens e descrições conforme necessário
    ];

    imageDescriptions.forEach((item, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = item.src;
        imgElement.alt = `Imagem ${index + 1}`;
        imgElement.onclick = () => {
            alert(item.description); // Exibe a descrição ao clicar na imagem
        };

        const pElement = document.createElement("p");
        pElement.textContent = item.description;

        resultContainer.appendChild(imgElement);
        resultContainer.appendChild(pElement);
    });

    // Adiciona o botão de reiniciar
    const restartButton = document.createElement("button");
    restartButton.textContent = "Reiniciar";
    restartButton.onclick = restartQuiz;
    resultContainer.appendChild(restartButton);

    // Exibe o result-container
    resultContainer.style.display = "block";

    // Adiciona um botão para voltar ao início
    const backButton = document.createElement("button");
    backButton.textContent = "Voltar ao Início";
    backButton.onclick = () => {
        document.getElementById("result-container").style.display = "none";
        document.getElementById("start-screen").style.display = "block";
    };
    resultContainer.appendChild(backButton);
}*/

function showImages() {
    // Oculta o result-container
    document.getElementById("result-container").style.display = "none";

    // Exibe o image-container
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Limpa qualquer conteúdo anterior

    // Adiciona as imagens e descrições
    const imageDescriptions = [
        { src: "imagens/01soldado.jpg", description: "Soldado na Segunda Guerra Mundial" },
        { src: "imagens/02avioes.jpg", description: "Aviões da Segunda Guerra Mundial" },
        { src: "imagens/02china.jpg", description: "Cena na China durante a guerra" },
        // Adicione mais imagens e descrições conforme necessário
    ];

    imageDescriptions.forEach((item, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = item.src;
        imgElement.alt = `Imagem ${index + 1}`;
        imgElement.onclick = () => {
            alert(item.description); // Exibe a descrição ao clicar na imagem
        };

        const pElement = document.createElement("p");
        pElement.textContent = item.description;

        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(pElement);
    });

    // Exibe o image-container
    imageContainer.style.display = "block";
}

// No final da função showImages
// ...

// Adiciona um botão para voltar ao início
const backButton = document.createElement("button");
backButton.textContent = "Voltar ao Início";
backButton.onclick = () => {
    document.getElementById("image-container").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
};
imageContainer.appendChild(backButton);

// Adiciona um botão para reiniciar
const restartButton = document.createElement("button");
restartButton.textContent = "Reiniciar";
restartButton.onclick = restartQuiz;
imageContainer.appendChild(restartButton);

