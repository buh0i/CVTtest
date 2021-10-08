(function () {
    let _first__tab_button = document.querySelector('.tab__films');
    let _second__tab_button = document.querySelector('.tab__channels');
    let _first__tab_container = document.querySelector('#_first__tab');
    let _second__tab_container = document.querySelector('#_second__tab');
    let _channels__timetable = document.querySelectorAll('.channels__item');
    let _timetable__container = document.querySelector('.timetable__container');

//сделай из этого функцию с переменными

    _first__tab_button.addEventListener('click', () => {
      _first__tab_container.style.display = 'block';
      _first__tab_button.classList.add('tab__active');
      _second__tab_container.style.display = "none";
      _second__tab_button.classList.remove('tab__active');
    });
    
    _second__tab_button.addEventListener('click', () => {
      _second__tab_container.style.display = 'block';
      _second__tab_button.classList.add('tab__active');
      _first__tab_container.style.display = "none";
      _first__tab_button.classList.remove('tab__active');
    });

    //разберись с функцией

    _channels__timetable.addEventListener('click', () => {
      _timetable__container.classList.toggle('_timetable__open');
    });

}());