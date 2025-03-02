// ПАРАЛЛАКС
document.addEventListener('mousemove', function (event) {
	const parallaxIntensity = 20; // Регулируйте это значение для нужного эффекта
	const backgroundImage = document.querySelector('.background-image');

	// Вычисляем смещение
	const x = 50 + ((event.clientX / window.innerWidth - 0.5) * parallaxIntensity);
	const y = 50 + ((event.clientY / window.innerHeight - 0.5) * parallaxIntensity);

	// Применяем смещение к фоновому изображению
	backgroundImage.style.backgroundPosition = `${x}% ${y}%`;
});
// ПАРАЛЛАКС


// ПРОВЕРКА КАРТОЧКИ. ЕСЛИ КАРТОЧКА РАСТЯГИВАЕТ НА ВСЮ ШИРИНУ, ТО ДОБАВЛЯЕМ ЕЙ КЛАСС ОПРЕДЕЛЕННОГО СТИЛЯ, ЕСЛИ НЕ ТЯНЕТСЯ, ТО УБИРАЕМ КЛАСС
document.addEventListener('DOMContentLoaded', function () {
    const cardList = document.querySelector('.content__card-list');
    const cardItems = document.querySelectorAll('.content__card-item');
    const lastCardItem = cardItems[cardItems.length - 1];

    // Функция для проверки и добавления/удаления класса
    function checkLastItemWidth() {
        // Проверяем ширину окна
        if (window.innerWidth >= 768) {
            if (lastCardItem.offsetWidth >= cardList.offsetWidth) {
                lastCardItem.classList.add('full-width');
            } else {
                lastCardItem.classList.remove('full-width');
            }
        } else {
            // Если ширина меньше 768, удаляем класс (на всякий случай)
            lastCardItem.classList.remove('full-width');
        }
    }

    // Проверяем при загрузке страницы
    checkLastItemWidth();

    // Проверяем при изменении размера окна
    window.addEventListener('resize', checkLastItemWidth);
});