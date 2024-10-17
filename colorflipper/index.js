
const body = document.getElementsByTagName("body") [0]
// body.style.backgroundColor = "red"

function setColor(name) {
        body.style.backgroundColor = name;
}

function randomColor() {
        const red = Math.round(Math.random() * 255) ;
        const green = Math.round(Math.random() * 255) ;
        const blue = Math.round(Math.random() * 255) ;

        const color = `rgb(${red}, ${green}, ${blue})`

        body.style.backgroundColor = color;
        
}

// A Bit More Complex

// let lastSetColor = '';

// function setColor(name) {
//     document.body.style.backgroundColor = name;
//     lastSetColor = name;
// }

// function randomColor() {
//     const red = Math.round(Math.random() * 255);
//     const green = Math.round(Math.random() * 255);
//     const blue = Math.round(Math.random() * 255);

//     const color = `rgb(${red}, ${green}, ${blue})`;

//     if (color === lastSetColor) {
//         return randomColor();
//     }

//     document.body.style.backgroundColor = color;
//     return color;
// }

