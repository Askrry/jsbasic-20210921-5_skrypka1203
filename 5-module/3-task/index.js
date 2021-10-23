function initCarousel() {

 let carousel = document.querySelector(".carousel"); //Вводим карусель 

 let arrowRight = carousel.querySelector('.carousel__arrow_right'); // Правая стрелка для карусели

 let arrowLeft = carousel.querySelector('.carousel__arrow_left'); // Левая стрелка для карусели

 let showSlide = carousel.querySelector('.carousel__inner') ; // Вывод изображения

 arrowLeft.style.display = 'none'; // Cкрываем левую стрелку для первого слайда

 let position = 1; // Стандартная позиция слайда


   carousel.onclick = function(event) {

    let target = event.target; // событие клика

    let displacement = showSlide.offsetWidth; // "Ширина" слайда в карусели
    
    if( target.closest('.carousel__arrow_right') ) {
      showSlide.style.transform = `translateX(-${displacement*position}px)`;
    };

    if( target.closest('.carousel__arrow_left') ) {
      position = 2; // Задаем позицию для переключения на лево
      showSlide.style.transform = `translateX(-${displacement*(position)}px)`;
    };

    switch (position) { // Скрываем стрелки при 1 и 4 слайде

      case 1:
        arrowLeft.style.display = 'none';
        arrowRight.style.display = '';
        
      case 2:
        arrowLeft.style.display = '';
        arrowRight.style.display = 'none';
    };

 };
};