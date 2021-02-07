var i = 0;
var images = ["url(img/banner.jpg)",
                "url(img/banner1.jpg)",
                "url(img/banner2.jpg)",
                "url(img/banner3.jpg)"
            ]; 
var time = 4000; 


function changeImage() {
    var el = document.getElementById('img');
    el.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;