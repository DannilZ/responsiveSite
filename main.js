let tabContent = document.querySelectorAll('.tabs_func'),
    tab = document.querySelectorAll('.tabs_btn'),
    info = document.querySelector('.tabs');

function hideTabContent(a) {
    for(let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show"); 
        tabContent[i].classList.add("hide");
    }
}

hideTabContent(1);

function showTabContent(b) {
    if ( tabContent[b].classList.contains("hide")) { 
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
}

info.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains("tabs_btn")) {
        for( let i = 0; i < tab.length; i++ ) {
            if( target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});
