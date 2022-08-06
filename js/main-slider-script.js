$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, //Зацикливаем слайдер
    nav: false, //Отключение навигации
    autoplay: false, //Автозапуск слайдера
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 2000, //Время смены слайда
    responsive: {
      //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1.5,
        margin: 10, //Отступ от элемента справа в 28px
      },
      1000: {
        items: 2,
        margin: 28, //Отступ от элемента справа в 28px
      },
    },
  });
});