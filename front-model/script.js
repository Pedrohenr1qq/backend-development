window.onload = function(){
    document.getElementById("Blue").addEventListener("mouseover", function(){
        document.getElementById("title").style.color = "blue";
    });
    document.getElementById("Yellow").addEventListener("mouseout", function(){
        document.getElementById("title").style.color = "yellow";
    });
    document.getElementById("Red").addEventListener("mouseup", function(){
        document.getElementById("title").style.color = "red";
    });
}