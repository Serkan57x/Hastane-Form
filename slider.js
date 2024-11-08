// Slider elemanları
var resimler = [document.getElementById("resim1"), document.getElementById("resim2"), document.getElementById("resim3")];
var ileri = document.querySelector(".ileri");
var geri = document.querySelector(".geri");
var kutucuklar = document.querySelectorAll("#slider ul li");
var index = 0;

// İlk resmi görünür yap
resimler[index].style.display = "block";
kutucuklar[index].style.backgroundColor = "gray";

// Slider'ı güncelle
function goster(index) {
    resimler.forEach((resim, i) => {
        resim.style.display = i === index ? "block" : "none";
        kutucuklar[i].style.backgroundColor = i === index ? "gray" : "black";
    });
}

// İleri butonu
ileri.addEventListener("click", function() {
    index = (index + 1) % resimler.length;
    goster(index);
});

// Geri butonu
geri.addEventListener("click", function() {
    index = (index - 1 + resimler.length) % resimler.length;
    goster(index);
});

// Küçük kutucuklara tıklama özelliği
kutucuklar.forEach((kutucuk, i) => {
    kutucuk.addEventListener("click", function() {
        index = i;
        goster(index);
    });
});

// Otomatik geçiş
setInterval(function() {
    index = (index + 1) % resimler.length;
    goster(index);
}, 3000);
