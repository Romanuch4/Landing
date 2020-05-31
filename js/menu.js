(() => {
  const buttonOpen = document.querySelector('.open-menu'),
        buttonClose = document.querySelector('.close-menu'),
        menu = document.querySelector('.nav');
  
  const toggleMenu = () => {
    menu.classList.toggle('nav-open');
  }
  
  const showMenuClick = evt => {
    if( evt.code === 'Enter') {
      showMenu();
    };
  };

  const closeMenuClick = evt => {
    if( evt.code === 'Enter') {
      showMenu();
    };
  }

  buttonOpen.addEventListener('keydown', evt => showMenuClick(evt)); 
  buttonOpen.addEventListener('click',  toggleMenu); 
  
  buttonClose.addEventListener('click',  toggleMenu); 
  buttonClose.addEventListener('click',  evt => closeMenuClick(evt)); 
})();