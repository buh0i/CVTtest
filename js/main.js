(function () {
    let _first__tab_button = document.querySelector('.tab__films');
    let _second__tab_button = document.querySelector('.tab__channels');
    let _first__tab_container = document.querySelector('#_first__tab');
    let _second__tab_container = document.querySelector('#_second__tab');
    let _channels__timetable = document.querySelectorAll('.channels__item');
    let _new__item__container = document.querySelectorAll('.new__item__body');
    let _auth__button = document.querySelector('.header__auth__container');
    let _modal__menu = document.querySelector('.modal__wrapper');
    let _shade__background = document.querySelector('.modal__shade');
    let _modal__item = document.querySelector('.modal__item');
    let _modal__auth__button = document.querySelector('.modal__item__button');
    let _header__profile__container = document.querySelector('.header__profile__container');
    let _header__exit__button = document.querySelector('.header__exit__button');
    let _profile__ico = document.querySelector('.header__profile__ico__container');
    let _profile__modal__container = document.querySelector('.header__profile__modal__container');
    let _profile__modal__shade = document.querySelector('.profile__modal__shade');
    let _profile__name = document.querySelector('.header__profile');
    let _profile__name__input = document.querySelector('.profile__name__input');

    //switch tabs

    function switch_tabs(active_tab_button, active_tab_display, deactive_tab_button, deactive_tab_display){
      active_tab_button.addEventListener('click', () => {
        active_tab_display.style.display = 'block';
        active_tab_button.classList.add('tab__active');
        deactive_tab_display.style.display = "none";
        deactive_tab_button.classList.remove('tab__active');
      });
    };
    
    switch_tabs(_first__tab_button, _first__tab_container, _second__tab_button, _second__tab_container);

    switch_tabs(_second__tab_button, _second__tab_container, _first__tab_button, _first__tab_container);

    //switch 'active_container' and 'deactivate_container' at child items

    
    function activate_child_container(parent_class_items){
      for(let i=0; i < parent_class_items.length; i++){
        let class_item = parent_class_items[i];
        class_item.addEventListener('click', () => {
          let activate_child_container = class_item.querySelector('.timetable__container');
          let deactivate_child_container = class_item.querySelector('.channels__img_container');
          activate_child_container.classList.toggle('active_container');
          deactivate_child_container.classList.toggle('deactive_container');
        });
      };
    };
    
    activate_child_container(_channels__timetable);

    //shade container and active desc
    function shade_and_desc(main_container){
      for(let i=0; i < main_container.length; i++){
        let current_main_container = main_container[i];
        current_main_container.addEventListener('mouseenter', () => {
          let shade_container = current_main_container.querySelector('.new__item__body__desc');
          shade_container.style.display = 'block';
        });
        current_main_container.addEventListener('mouseleave', () => {
          let shade_container = current_main_container.querySelector('.new__item__body__desc');
          shade_container.style.display = 'none';
        });
      };
    };

    shade_and_desc(_new__item__container);

    //open modal menu
    function open_and_close_modal_menu(enter_button, modal_menu, shade_background, modal_item){
      enter_button.addEventListener('click', () => {
        modal_menu.style.display = 'flex';
      });
      shade_background.addEventListener('click', () => {
        modal_menu.style.display = 'none';
      });
    };
    open_and_close_modal_menu(_auth__button, _modal__menu, _shade__background, _modal__item);

    //auth_and_exit in modal menu

    function auth_and_exit_in_modal_menu(auth_modal_button, modal_menu, enter_button, header_profile_container, header_exit_button){
      auth_modal_button.addEventListener('click', () => {
        let login = document.getElementById('modal__login').value;
        let password = document.getElementById('modal__password').value;
        if (login==='Kostya' && password==='1'){
          modal_menu.style.display = 'none';
          enter_button.style.display = 'none';
          header_profile_container.style.display = 'block'; 
        }
      });
      header_exit_button.addEventListener('click', () => {
        enter_button.style.display = 'block';
        header_profile_container.style.display = 'none';
      })
    };

    auth_and_exit_in_modal_menu(_modal__auth__button, _modal__menu, _auth__button, _header__profile__container, _header__exit__button);
    
    //moblie profile menu
    
    function mobile_profile_menu(profie_ico, profile_modal_container, profile_modal_shade){
      profie_ico.addEventListener('click', () => {
        profile_modal_container.style.display = 'flex';
        profile_modal_shade.style.display = 'block';
      });
      profile_modal_shade.addEventListener('click', () => {
        profile_modal_container.style.display = 'none';
        profile_modal_shade.style.display = 'none';
      });
    };

    mobile_profile_menu(_profile__ico, _profile__modal__container, _profile__modal__shade);

    //change profile name

    function change_profile_name(profile_name, profile_name_input){
      profile_name.addEventListener('click', () => {
        profile_name_input.style.display = 'block';
        profile_name.style.display = 'none';
        profile_name_input.value = profile_name.innerText;
      });
      profile_name_input.addEventListener('input', () => {
        profile_name.innerText = profile_name_input.value;
      });
      profile_name_input.addEventListener('blur', () => {
        profile_name.style.display = 'block';
        profile_name_input.style.display = 'none';
        console.log('AAAAAAAAAAAAAAa');
      });
    };
    change_profile_name(_profile__name, _profile__name__input);
}());