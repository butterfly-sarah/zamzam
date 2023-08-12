var copy = document.querySelectorAll(".copy1")
var c1 = document.querySelector(".c1")
var c2 = document.querySelector(".c2")
var copyAfter1 = window.getComputedStyle(c1, "::after");
var copyAfter2 = window.getComputedStyle(c2, "::after");
copy.forEach(function(copyy) {
    copyy.onclick = function() {
        copyy.setAttribute("title", "تم النسخ")
    }
})

c1.setAttribute('data-after', 'نسخ الى الحافظة');
c2.setAttribute('data-after', 'نسخ الى الحافظة');
c1.onclick = function() {
    c1.setAttribute('data-after', 'تم نسخ النص بنجاح');
    setTimeout(function() { alert("تم نسخ النص بنجاح") }, 500)
}
c2.onclick = function() {
    c2.setAttribute('data-after', 'تم نسخ النص بنجاح');
    setTimeout(function() { alert("تم نسخ النص بنجاح") }, 500)
}