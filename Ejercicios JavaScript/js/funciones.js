document.write("<h1>HolaJavaScript</h1>");
alert("Me encanta que estes en el curso");
document.getElementById("p1").innerHTML = Date();
document.getElementById("p2").innerHTML = "Me gusto CSS";
function alegrar() {
    var x = document.getElementById("p2");
    x.style.fontSize = "25px";
    x.style.color = "red";
}
function cambiar_img() {
    var x = document.getElementById("escudo");
    if (x.src.match("img/UNAM.svg")) {
        x.src = "img/fesa.jpg";
    } else {
        x.src = "img/UNAM.svg";
    }
}
function colorear() {
    var imagen = document.getElementById("escudo");
    if (imagen.src.match("escudo")) {
        imagen.src = "img/UNAM.svg";
    } else {
        imagen.src = "img/fesa.jpg";
    }
}
function validar() {
    var valor, text;
    valor = document.getElementById("numero").value;
    if (isNaN(valor) || valor < 1 || valor > 10) {
        text = "No es pequeño";
    } else {
        text = "¡Muy bien!";
    }
    document.getElementById("mensaje").innerHTML = text;
}
function color_favorito() {
    var color;
    color = document.getElementById("color_favorito").value;
    if (color == "red") {
        document.body.style.backgroundColor = color;
        alert("¡Lo sabía!");
    }  else if (!isNaN(color)) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = color;
    } 
}
