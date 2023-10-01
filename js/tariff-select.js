$(document).ready(function() {
    $('.choose-tariff-btn').on('click', function() {

        // Убираем класс "selected-card" у предыдущей выделенной карточки
        $('.selected-card').removeClass('selected-card');
        $('.tariff-selected').removeClass('tariff-selected').addClass('tariff-not-selected');
        $('.selected-tariff-btn').text('Выбрать тариф').removeClass('selected-tariff-btn');

        // Добавляем класс "selected-card" к текущей карточке
        $(this).closest('.item').addClass('selected-card');
        $(this).removeClass('tariff-not-selected').addClass('tariff-selected').text('Тариф выбран').addClass('selected-tariff-btn');
        
    });
});