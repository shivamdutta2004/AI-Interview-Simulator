document.addEventListener("DOMContentLoaded", function () {

    let questions = [
        "Tell me about a time you handled a difficult situation with a coworker.",
        "What are your strengths and weaknesses?",
        "Why should we hire you?"
    ];

    let currentQuestion = 0;
    let answers = [];

    const button = document.getElementById("submitBtn");
    const questionEl = document.getElementById("questionText");
    const answerBox = document.getElementById("answer");

    button.addEventListener("click", function () {

        const answer = answerBox.value;

        if (answer.trim() === "") {
            alert("Please enter your answer!");
            return;
        }

        answers.push(answer);

        let score = Math.min(100, answer.length * 2);

        // Update insights
        document.getElementById("toneChip").innerHTML =
        '<span class="w-1.5 h-1.5 rounded-full bg-green-400"></span> TONE: GOOD';

        document.getElementById("paceChip").innerHTML =
        '<span class="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> PACE: MEDIUM';

        document.getElementById("confidenceChip").innerHTML =
        '<span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> CONFIDENCE: ' + score + '%';

        currentQuestion++;

        if (currentQuestion < questions.length) {
            questionEl.innerText = questions[currentQuestion];
            answerBox.value = "";
        } else {
            alert("Interview Completed!");
        }

    });

});