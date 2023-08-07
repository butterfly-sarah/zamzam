var copy = document.querySelectorAll(".copy1")
copy.forEach(function(copyy) {
    copyy.onclick = function() {
        copyy.setAttribute("title", "تم النسخ")
        alert("تم نسخ النص بنجاح")
    }
})