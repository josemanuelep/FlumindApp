var pages;
var route;
var tabs;
var tabActivated;
var feelSelected;
var curved;
var menu;
var menuIcon;
var closeIcon;
var pageOpaque;

function start() {
    initVariable();  
    loadMainPage();     
    assingEvents();        
}

function initVariable() {

    route = [];
    pages = document.getElementsByClassName("page");
    tabs = document.getElementsByClassName("tab");
    curved = document.getElementById("curved");
    tabActivated = 0;
    menu = document.getElementById("menu");
    menuIcon = document.getElementById("buttonMenu");
    closeIcon = document.getElementById("closeIcon");
    pageOpaque = document.getElementById("opaque");
    initFeels();

}

function assingEvents(){

    menuIcon.addEventListener("click", openMenu);
    closeIcon.addEventListener("click", closeMenu);

    //Tabs
    tabs[0].addEventListener("click", function(){
        if(tabActivated != 0){
            cleanPages();
            cleanTabs();
            tabActivated = 0;
            curved.className = "curved curved_home";
            tabs[0].className = "tab tab1_actived animated slideInUp";
        }
    });

    tabs[1].addEventListener("click", function(){
        if(tabActivated != 1){
            cleanPages();
            changedTab(5);
            tabActivated = 1;
            curved.className = "curved curved_music";
            tabs[1].className = "tab tab2_actived animated slideInUp";
        }
    });

    tabs[2].addEventListener("click", function(){
        if(tabActivated != 2){
            cleanPages();
            changedTab(6);
            tabActivated = 2;
            curved.className = "curved curved_time";
            tabs[2].className = "tab tab3_actived animated slideInUp";
        }
    });

    tabs[3].addEventListener("click", function(){
        if(tabActivated != 3){
            cleanPages();
            changedTab(7);
            tabActivated = 3;
            curved.className = "curved curved_contact";
            tabs[3].className = "tab tab4_actived animated slideInUp";
        }
    });

    assingMainOptions();
    assingFeels();
}

function loadMainPage() {
    pages[2].className = "page animated fadeIn";

    setTimeout(function(){
        pages[1].className = "page hidden";
        showMainElements();
    }, 1000);
}

function openMenu(){
    pageOpaque.className = "page opaque";
    pageOpaque.style.opacity = ".4";  
    menu.style.transform = "translateX(-100%)";
}

function closeMenu(){
    pageOpaque.className = "hidden";
    pageOpaque.style.opacity = "0";    
    menu.style.transform = "translateX(100%)";
}

function showPage(index){
    route.push(index);
    pages[index].className = "page animated slideInRight delay-300ms";   
    curved.className = "curved curved_home animated fadeOut"; 
    cleanTabs();
    tabActivated = -1;
}

function changedTab(index){
    pages[index].style.zIndex = '1';
    if(tabActivated != -1){
        pages[index].className = "page animated slideInUp delay-300ms";
    }else{
        setTimeout(function(){
            pages[index].className = "page animated slideInUp delay-300ms";
        }, 500);
    }
    curved.className = "curved curved_home animated fadeOut";
    cleanTabs();
}

function cleanTabs(){

    if(tabActivated == 0){
        tabs[0].className = "tab tab1 animated slideInDown";
    }else if(tabActivated == 1){
        tabs[1].className = "tab tab2 animated slideInDown";
    }else if(tabActivated == 2){
        tabs[2].className = "tab tab3 animated slideInDown";
    }else if(tabActivated == 3){
        tabs[3].className = "tab tab4 animated slideInDown";
    }

}

function cleanPages(){
    if(tabActivated == -1){
        for(let i = 0; i < route.length; i++){
            pages[route[i]].className = "page animated slideOutRight delay-300ms";
        }
        route = [];
    }else {
        for(let i = 5; i < 5 + tabActivated ; i++){   
            pages[i].style.zIndex = '0';        
            pages[i].className = "page animated slideOutDown";
        }
    }
}