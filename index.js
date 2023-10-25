const element = document.getElementById("container");

const newElement = document.createElement("h1");
newElement.textContent = "Hello! this is your new Heading";

element.appendChild(newElement);

//creating a new paragraph

const paraOne = document.createElement("p");
paraOne.textContent = "Write the content of your choice";
element.appendChild(paraOne)

const paraColor = paraOne.style.color = "red";

const color = newElement.style.backgroundColor = "blue";
const area = newElement.style.display = "inline";
const textColor = newElement.style.color = "#fff";


const secondElement = document.createElement("h2");
secondElement.innerHTML = "This is 2nd Heading";
element.appendChild(secondElement);
//creating a new paragraph
const secondPara = document.createElement("p");
secondPara.innerHTML = "his is 2nd paragraph";
element.appendChild(secondPara)
const thirdElement = document.createElement("h3");
thirdElement.textContent = "3rd heading of your choice";
element.appendChild(thirdElement);

const forthElement = document.createElement("h4")
forthElement.innerText = "hi it is your 4th Heading";
element.appendChild(forthElement)