let slider = $(".content__card-list");
let isSliderActive = false;

// Функция для инициализации слайдера
function initSlider() {
    if (!isSliderActive) {
        slider.slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: false,
            variableWidth: false,
            centerMode: false
        });
        isSliderActive = true;
    }
}

// Функция для уничтожения слайдера
function destroySlider() {
    if (isSliderActive && slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
        isSliderActive = false;
    }
}

// Проверка ширины экрана и управление слайдером
function checkWindowSize() {
    if (window.innerWidth > 768) { // Включаем слайдер на экранах шире 768px
        destroySlider();
    } else { // Отключаем слайдер на экранах уже 768px
        initSlider();
    }
}

// Проверяем размер экрана при загрузке страницы
checkWindowSize();

// Проверяем размер экрана при изменении размера окна
$(window).on('resize', function () {
    checkWindowSize();
});