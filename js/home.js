var images=["../Source/2.jpg","../Source/3.jpg","../Source/4.jpg","../Source/1.jpg"];
var slidIndex=0;
var img=document.getElementById("slider")
function increase(){
    if(slidIndex==3){
        slidIndex=-1
    }
    slidIndex++;
    return slidIndex;
    }

function display(){
    img.setAttribute("src",images[increase()]);
}
var interval=setInterval(display,3000);




