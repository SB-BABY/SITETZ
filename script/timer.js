document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.querySelector('.timer__display');
    const hoursSpan = timerDisplay.querySelector('.timer__hours');
    const minutesSpan = timerDisplay.querySelector('.timer__minutes');
    const secondsSpan = timerDisplay.querySelector('.timer__seconds');

    let totalTime = 10 * 60;

    function updateTimer() {
        let hours = Math.floor(totalTime / 3600);
        let minutes = Math.floor((totalTime % 3600) / 60);
        let seconds = totalTime % 60;

        hoursSpan.textContent = String(hours).padStart(2, '0');
        minutesSpan.textContent = String(minutes).padStart(2, '0');
        secondsSpan.textContent = String(seconds).padStart(2, '0');

        if (totalTime <= 0) {
            totalTime = 10 * 60; // Сброс таймера на 10 минут
        } else {
            totalTime -= 1; // Уменьшаем время на 1 секунду
        }
    }

    setInterval(updateTimer, 1000); // Обновляем таймер каждую секунду
});