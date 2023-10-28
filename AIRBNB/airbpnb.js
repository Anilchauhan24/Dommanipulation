const logo = document.querySelector("h1");
logo.style.color = "tomato";

const nav = document.querySelector("nav");
nav.style.display = "flex";
nav.style.alignItems = "center";
nav.style.gap = "10px";
nav.style.justifyContent = "space-between"

const line = document.getElementById("line");
line.style.width = "100%";
line.style.height = "1px";
line.style.backgroundColor = "gray";
line.style.position = "relative";


const links = document.getElementsByClassName("links");
links.style.display = "flex";
links.style.wrap = "wrap";
links.style.gap = "10px";
links.style.justifyContent = "space-around"

// const changeColor = () => {
//     let myBody = document.body;
//     myBody.classList.toggle("color")
// }

var typed = new Typed('#element', {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 50,
});

let icon = document.getElementById("tagicon");
icon.addEventListener("click", function () {
    icon.classList.add("fa-toggle-off")
})

icon.addEventListener("click", function () {
    icon.classList.add("fa-toggle-on")
})



const ul = document.getElementById("addedList");
const join = document.getElementById("join");
ul.addEventListener("mouseover", addLinks)

function addLinks() {
    ul.style.display = "none";
    for (let i = 0; i < ul.length; i++) {
        ul.children[i].addEventListener("mouseover", addLinks)
    }

}


