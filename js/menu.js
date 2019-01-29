export function setMenu() {
/*--- PAINT MENU OPTIONS ---*/ 
    let aMenuItems = document.querySelectorAll("nav.main-menu a");
    let aSections = document.querySelectorAll("section");
    let oOffsets = [];
    prepararNavegacion()
    window.addEventListener('scroll', changeMenuStyle);
    function prepararNavegacion(){
        aSections.forEach(
            (item) => oOffsets['#'+item.id] = item.offsetTop
        )
    }
    function changeMenuStyle(){
        let pageOffset = window.pageYOffset;
        let menuItem = 0; 
        if( pageOffset >= oOffsets['#home'] && pageOffset < oOffsets['#whoIam'] ){
            menuItem = 0;
        } else if( pageOffset >= oOffsets['#whoIam'] && pageOffset < oOffsets['#studies'] ){
            menuItem = 1;
        } else if( pageOffset >= oOffsets['#studies'] && pageOffset < oOffsets['#experience'] ){
            menuItem = 2;
        } else if( pageOffset >= oOffsets['#experience'] && pageOffset < oOffsets['#aboutMe'] ){
            menuItem = 3;
        } else if( pageOffset >= oOffsets['#aboutMe'] && pageOffset < oOffsets['#contact'] ){
            menuItem = 4;
        }
        else{
            menuItem = 5;
        }
        aMenuItems.forEach(
            (item) => item.classList.remove('active')
        )
        aMenuItems[menuItem].classList.add('active')
    }

    /*--- SMOOTH SCROLL ---*/ 
    
}