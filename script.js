//your code here

const textBox = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

textBox.oninput = (e) => {
    letterCount.innerText = e.target.value.length;
    console.log(e.target.value);
}