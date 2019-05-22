var pages;
var route;
var tabs;
var tabActivated;
var feelSelected;
var curved;
var menu;
var menuIcon;
var closeIcon;
var backIcon;
var pageOpaque;
var contactButton;
var infoButton;

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
    backIcon = document.getElementById("buttonBack");
    pageOpaque = document.getElementById("opaque");
    contactButton = document.getElementById("contact_button");
    infoButton = document.getElementById("info_button");
    initFeels();
    initActivitys();
    initPlayer();
}

function assingEvents(){

    menuIcon.addEventListener("click", openMenu);
    closeIcon.addEventListener("click", closeMenu);

    //Tabs
    tabs[0].addEventListener("click", function(){
        if(tabActivated != 0){
            cleanPages();
            cleanTabs();
            backIcon.className = "";
            tabActivated = 0;
            curved.className = "curved curved_home";
            tabs[0].className = "tab tab1_actived animated slideInUp";
        }
    });

    tabs[1].addEventListener("click", function(){
        if(tabActivated != 1){
            cleanPages();
            changedTab(14);
            backIcon.className = "";
            tabActivated = 1;
            curved.className = "curved curved_music";
            tabs[1].className = "tab tab2_actived animated slideInUp";
        }
    });

    tabs[2].addEventListener("click", function(){
        if(tabActivated != 2){
            cleanPages();
            changedTab(15);
            backIcon.className = "";
            tabActivated = 2;
            curved.className = "curved curved_time";
            tabs[2].className = "tab tab3_actived animated slideInUp";
        }
    });

    tabs[3].addEventListener("click", function(){
        if(tabActivated != 3){
            cleanPages();
            changedTab(16);
            backIcon.className = "";
            tabActivated = 3;
            curved.className = "curved curved_contact";
            tabs[3].className = "tab tab4_actived animated slideInUp";
        }
    });

    backIcon.addEventListener("click", function(){
        var index = route.length - 1;
        pages[route[index]].className = "page animated slideOutRight delay-300ms";
        route.pop();
        if(index <= 1){
            backIcon.className = "";
        }
    });

    contactButton.addEventListener("click", function(){
        if(tabActivated != 3){
            closeMenu();
            cleanPages();
            changedTab(16);
            backIcon.className = "";
            tabActivated = 3;
            curved.className = "curved curved_contact";
            tabs[3].className = "tab tab4_actived animated slideInUp";
        }
    });

    infoButton.addEventListener("click", function(){
        closeMenu();
        cleanPages();
        backIcon.className = "";
        showPage(13);
    });

    assingMainOptions();
    assingPlayerButtons();
    assingFeels();
    assingActivitys();
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
    if(index == 4){
        backIcon.className = "back_icon page animated fadeIn delay-1s";
    }
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
        for(let i = 14; i < 14 + tabActivated ; i++){   
            pages[i].style.zIndex = '0';        
            pages[i].className = "page animated slideOutDown";
        }
    }
}