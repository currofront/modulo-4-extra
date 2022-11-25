// Tipo de habitación 

var roomType = () => {
    if (document.getElementById("room").value == 1) {
        return 100
    } else if (document.getElementById("room").value == 2) {
        return 120 
    } else {return 150}
};


//Coste del spa

var roomSpa = () => {
    if (document.getElementById("spa").checked == true) {
        return 20;
    } else {return 0;}
}


// Tamaño de la habitación

var roomSize = () => {
    if (document.getElementById("room-size").value == 1) {
        return .75
    } else if (document.getElementById("room-size").value == 2) {
        return 1
    } else {return 1.25}
};

// Nº de noches

var nights = () => {
    if (document.getElementById("nights").value >= 0) {
        return document.getElementById("nights").value
    } else {return "Error"}
};

// Coste del Parking

var roomParking = () => document.getElementById("parking").value * 10;


// Coste total

var total = () => { return ((roomType() + roomSpa()) * roomSize()) * nights() + roomParking()}


// Función del evento

var printTotal = () => document.getElementById("total").innerText = total() + " €";

// Evento

document.getElementById("calculate").addEventListener("click", printTotal);



