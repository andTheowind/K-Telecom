$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
          loop: false, //Зацикливаем слайдер
          margin: 28, //Отступ от элемента справа в 28px
          nav: false, //Отключение навигации
          autoplay: false, //Автозапуск слайдера
          smartSpeed: 1000, //Время движения слайда
          autoplayTimeout: 2000, //Время смены слайда
          responsive: {
            //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
              items: 1.5,
            },
            1200: {
              items: 2.5,
            },
          },
    });
});