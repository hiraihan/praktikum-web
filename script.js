function showMessage() {
    alert("Selamat Datang di Dunia Lain")
}

var i = 0
var txt = 'Saya Polisi'
var speed = 150

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i)
        i++
        setTimeout(typeWriter, speed)
    }
}

window.onload = function() {
    typeWriter()
}