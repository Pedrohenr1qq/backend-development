window.onload = function(){
    const imgs = document.getElementsByClassName("imgProducts");
    const total = document.getElementById("total");

    const seeMore = document.getElementsByClassName("seemore");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", function () {
            document.getElementById("imgEnlarged").src = imgs[i].src;
            total.style.display = "block";
        })
    }

    total.addEventListener("click", function () {
        total.style.display = "none"
    })
    for(let i = 0; i < seeMore.length; i++){
        seeMore[i].addEventListener("mouseover", function () {
            seeMore[i].style.fontSize = "120%";
        })

        seeMore[i].addEventListener("mouseout", function () {
            seeMore[i].style.fontSize = "initial";
        })
    }
}