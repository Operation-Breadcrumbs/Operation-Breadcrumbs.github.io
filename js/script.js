//Adjusts container size dynamically
function sizeContainer(){
    var container = document.getElementById('container');
    if(window.innerWidth < 1040){
        fillWindow(container);
    }else{
        shrinkContainer(container);
    }
}

//Resizes container to fill window
function fillWindow(container){
    container.style.width ='100%';
    container.style.height='100%';
    container.style.marginTop='0%';
    container.style.marginBottom='0%';
    container.style.left='0';
    container.style.top='0';
    container.style.right='0';
    container.style.float="center";
}

//Reduces container size and centers it
function shrinkContainer(container){
    container.style.maxWidth ='960px';
    container.style.margin='5% auto 5%';
}


//Makes menu responsive to screen size
function menuResize() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}