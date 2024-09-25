/*function sizeContainer(){
    console.log("Size 1")
    var container = document.getElementById('container');
    console.log("Size!");
    if(window.innerWidth < 1040){
        container.style.width ='100%';
        container.style.height='100%';
        container.style.marginTop='0%';
        container.style.marginBottom='0%';
        container.style.left='0';
        container.style.top='0';
        container.style.right='0';
        container.style.float="center";
    }else{
        container.style.width ='90%';
        container.style.marginTop='5%';
        container.style.marginBottom='5%';
        container.style.float="center";
    }
}
*/

function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}