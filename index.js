// const element = document.getElementById("container");

// const newElement = document.createElement("h1");
// newElement.textContent = "Hello! this is your new Heading";

// element.appendChild(newElement);

// //creating a new paragraph

// const paraOne = document.createElement("p");
// paraOne.textContent = "Write the content of your choice";
// element.appendChild(paraOne)

// const paraColor = paraOne.style.color = "red";

// const color = newElement.style.backgroundColor = "blue";
// const area = newElement.style.display = "inline";
// const textColor = newElement.style.color = "#fff";


// const secondElement = document.createElement("h2");
// secondElement.innerHTML = "This is 2nd Heading";
// element.appendChild(secondElement);
// //creating a new paragraph
// const secondPara = document.createElement("p");
// secondPara.innerHTML = "his is 2nd paragraph";
// element.appendChild(secondPara)
// const thirdElement = document.createElement("h3");
// thirdElement.textContent = "3rd heading of your choice";
// element.appendChild(thirdElement);

// const forthElement = document.createElement("h4")
// forthElement.innerText = "hi it is your 4th Heading";
// element.appendChild(forthElement)






// const button = document.getElementById("myButton");
// button.addEventListener("click", changeColor)

// function changeColor() {
//     button.style.backgroundColor = "red";
// }



// const btn = document.getElementById("myButton");
// btn.addEventListener("click", function () {
//     btn.style.color = "#fff";
// })

// const removePara = document.getElementById("removeButton");
// removePara.addEventListener("click", () => {
//     removePara.remove();
// })



// const target = document.getElementById("target");
// const nextTarget = target.nextTarget;
// if (nextTarget) {
//     nextTarget.style.color = "green";
// }


// const link = document.querySelector("#target  a");
// link.addEventListener("click", function () {
//     event.preventDefault();
//     alert("You clicked the link")
// })

const folder = ["name", "anil", "mongo", "react", "html"];
// for (let i = 0; i < folder.length; i++) {
//     console.log(folder);
//     console.log(folder[2]);
//     console.log(folder[i]);
//     console.log(i);
// }

const getIdea = () => {
    if (i = 0 && i < folder.length) {
        console.log(folder)
    }
    else {
        console.log(folder)
    }

}
getIdea(folder)

// received value only only one time with if

const fakeIdea = () => {
    for (let i = 0; i < folder.length; i++) {
        console.log(folder)
    }
}
fakeIdea(folder)

//receivied value up to 5 times with the let


function myFunction() {
    if (i = 0 && i < folder.length) {
        console.log(folder)
    }
    else {
        console.log(folder[i])
    }
}
myFunction(folder)


function yFunction() {

    for (let i = 0; i < folder.length; i++) {
        return console.log(folder);
    }

}
yFunction(folder);


function gFunction(folder) {
    this.folder;
    if (folder.length < 0) {
        console.log(folder);
    }
    else {
        console.log(folder[i]);
    }
}

const get = new gFunction(folder)


// const penList = ["HTML", "CSS", "JAVASCRIPT", "NODE JS", "REACT", "PHP", "MONGODB"];

// //implement Function , class function, constructor by using the loops and conditional statement to acheive the value of penlist

// function myPen() {
//     if (penList.length >= 0) {
//         console.log(penList)
//     }
//     else {
//         console.log(penList[i])
//     }
// }
// myPen(penList);

// function yourPen() {
//     for (let i = 0; i < penList.length; i++) {
//         console.log(penList[i])
//     }
// }
// yourPen(penList);

// const getPen = () => {
//     if (i = 0 && i >= penList.length) {
//         console.log(penList)
//     }
//     else if (penList.length >= 6) {
//         console.log(penList[6])

//     }
//     else {
//         console.log(i)
//     }
// }
// getPen(penList)

// const showPen = () => {
//     for (let i = 0; i < penList.length; i++) {
//         console.log(penList[2])
//     }
// }
// showPen(penList)

const animals = ["pen", "lions", "tiger", "banana", "chiku"]

animals.forEach((key) => {
    console.log(key)
})