let answers = document.querySelectorAll('.answer');
let errorMessage = document.querySelector('.error-message');

function checkAnswers() {
    let tooLong = false;
    answers.forEach((answer) => {
        if (answer.value.length > 20) {
            tooLong = true;
        }
    });
    if (tooLong) {
        errorMessage.style.display = 'block';
    }
    else {
        errorMessage.style.display = 'none';
    }
};

answers.forEach((answer) => {
    answer.addEventListener('input', checkAnswers);
});