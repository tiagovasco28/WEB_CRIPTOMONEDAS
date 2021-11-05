
var linkCoins = "https://api.coinlore.net/api/tickers/";

function loadJSON() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = processJSON;
    xmlhttp.open("GET", linkCoins, true);
    xmlhttp.send();
}

function processJSON() {
    if ((this.readyState == 4) && (this.status == 200)) {
        var objecto = JSON.parse(this.responseText);
        var monedas = "";
        for (var i = 0; i < objecto.data.length; i++) {
            monedas = monedas + objecto.data[i].name + " - " + "Cod: " + objecto.data[i].id + "<br>";
            document.getElementById("listado01").innerHTML = monedas;
        }
    }
}

function loadJSON2() {
    var codigoInsertado = document.getElementById("insertado").value;
    var linkCoins2 = "https://api.coinlore.net/api/ticker/?id=" + codigoInsertado;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = processJSON2;
    xmlhttp.open("GET", linkCoins2, true);
    xmlhttp.send();
}

function processJSON2() {

    if ((this.readyState == 4) && (this.status == 200)) {
        var objecto = JSON.parse(this.responseText);
        var nombre = objecto[0].name;
        var precioActual = objecto[0].price_usd;
        var cambio24h = objecto[0].percent_change_24h;
        var cambio1h = objecto[0].percent_change_1h;
        var cambio7d = objecto[0].percent_change_7d;
        var marketcap = objecto[0].market_cap_usd;

        document.getElementById("info1").innerHTML = nombre;
        document.getElementById("info2").innerHTML = "Precio actual: " + precioActual;
        document.getElementById("info3").innerHTML = "Cambio percentual 24h: " + cambio24h + "%";
        document.getElementById("info4").innerHTML = "Cambio percentual 1h: " + cambio1h + "%";
        document.getElementById("info5").innerHTML = "Cambio percentual 7 días: " + cambio7d + "%";
        document.getElementById("info6").innerHTML = "Market Cap: " + marketcap;
    }
}

function loadJSON3() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = processJSON3;
    xmlhttp.open("GET", linkCoins, true);
    xmlhttp.send();
}

function processJSON3() {
    if ((this.readyState == 4) && (this.status == 200)) {
        var objecto = JSON.parse(this.responseText);
        for (var i = 0; i < objecto.data.length; i++) {
            document.getElementById("combobox").innerHTML += "<option value='" + objecto.data[i].id + "'>" + objecto.data[i].name + "</option>";
        }
    }
}

function loadJSON4() {
    var optionSelected = document.getElementById("combobox").value;
    var linkCoins2 = "https://api.coinlore.net/api/ticker/?id=" + optionSelected;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = processJSON4;
    xmlhttp.open("GET", linkCoins2, true);
    xmlhttp.send();
}

function processJSON4() {

    if ((this.readyState == 4) && (this.status == 200)) {
        var objecto = JSON.parse(this.responseText);

        var nombre = objecto[0].name;
        var precioActual = objecto[0].price_usd;
        var cambio24h = objecto[0].percent_change_24h;
        var cambio1h = objecto[0].percent_change_1h;
        var cambio7d = objecto[0].percent_change_7d;
        var marketcap = objecto[0].market_cap_usd;

        document.getElementById("info1").innerHTML = nombre;
        document.getElementById("info2").innerHTML = "Precio actual: " + precioActual;
        document.getElementById("info3").innerHTML = "Cambio percentual 24h: " + cambio24h + "%";
        document.getElementById("info4").innerHTML = "Cambio percentual 1h: " + cambio1h + "%";
        document.getElementById("info5").innerHTML = "Cambio percentual 7 días: " + cambio7d + "%";
        document.getElementById("info6").innerHTML = "Market Cap: " + marketcap;
    }
}

// CARGAR EXCHANGES DENTRO DE LAS OPCIONES DEL SELECT
function loadJSON5() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = processJSON5;
    xmlhttp.open("GET", linkCoins, true);
    xmlhttp.send();
}

function processJSON5() {
    if ((this.readyState == 4) && (this.status == 200)) {
        var objecto = JSON.parse(this.responseText);
        for (var i = 0; i < objecto.data.length; i++) {
            document.getElementById("combo-box").innerHTML += "<option value='" + objecto.data[i].id + "'>" + objecto.data[i].name + "</option>";
        }
    }
}

function loadJSON6() {
    var optionSelected = document.getElementById("combo-box").value;
    var linkCoins2 = "https://api.coinlore.net/api/coin/markets/?id=" + optionSelected;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = processJSON6;
    xmlhttp.open("GET", linkCoins2, true);
    xmlhttp.send();
}
function processJSON6() {

    if ((this.readyState == 4) && (this.status == 200)) {
        var objecto = JSON.parse(this.responseText);
        for (var i = 0; i < objecto.length; i++) {
            document.getElementById("combo-box2").innerHTML += "<option value='" + [i] + "'>" + objecto[i].name + "</option>";
        }
    }
}


function loadJSON7() {
    var optionSelected = document.getElementById("combo-box").value;
    var linkCoins2 = "https://api.coinlore.net/api/coin/markets/?id=" + optionSelected;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = processJSON7;
    xmlhttp.open("GET", linkCoins2, true);
    xmlhttp.send();


}

function processJSON7() {
    var numero = document.getElementById("combo-box2").value;
    if ((this.readyState == 4) && (this.status == 200)) {
        var objecto = JSON.parse(this.responseText);
        document.getElementById("info1").innerHTML = "$" + objecto[numero].price;
    }
}

// control de eventos
function loadEvents() {
    document.getElementById("buscar").addEventListener('click', loadJSON2);
}

function loadClick() {
    document.getElementById("combobox").addEventListener('change', loadJSON4);
}

function loadEvents2() {
    document.getElementById("combo-box").addEventListener('change', loadJSON6);
    document.getElementById("combo-box2").addEventListener('change', loadJSON7);
}
