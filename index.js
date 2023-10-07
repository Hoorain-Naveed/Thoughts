function run() {
    const mytext = document.getElementById("mytext").value;
    const ul = document.getElementById("display");
    const li = document.createElement("li");
    li.innerText = mytext;
    ul.appendChild(li);
    document.getElementById("mytext").value = ""; // Clear the input field after submission
  }