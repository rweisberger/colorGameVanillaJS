function changeColor(){
    console.log("box" + document.getElementById("selection").value)
    let element = document.getElementById("box" + document.getElementById("selection").value);
    let color = element.style.backgroundColor;
    console.log(color)
    if (color === 'green') {
        element.style.backgroundColor = 'white';
    } else {
        element.style.backgroundColor = 'green';
    }
}