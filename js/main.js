(function () {
    let _first__tab_button = document.querySelector('.tab__films');
    let _second__tab_button = document.querySelector('.tab__channels');
    let _first__tab_container = document.querySelector('#_first__tab');
    let _second__tab_container = document.querySelector('#_second__tab');


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
}());