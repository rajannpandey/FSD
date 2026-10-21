let demo = document.getElementById("demo");
let heading = document.getElementById("heading");

console.log("This is a message from the console.");

function changeText() {
    demo.innerHTML = "Hello, JavaScript!";
    console.log("Text changed to: " + demo.innerHTML);
}

function changeHeading() {
    heading.innerHTML = "Heading Changed!";
    document.getElementById("heading").innerHTML = "Heading changed to: " + heading.innerHTML;
}
