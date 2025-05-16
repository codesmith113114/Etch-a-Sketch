const container = document.querySelector("#container");
const buttonForInput = document.querySelector("#btn");
// let errorMsg;

buttonForInput.addEventListener("click", () => {
  const input = parseInt(prompt("Enter the number of square per side between 1 to 100"))
  if (input > 100) {
    errorMsg = document.createElement("h1");
    errorMsg.id = "err"
    errorMsg.innerText = "invalid input"
    document.body.insertBefore(errorMsg, container)

  }
  else {

    const existingError = document.querySelector("#err");
    if (existingError) {
      existingError.remove()
    }
    container.innerHTML = ""
    loopInput = (input * input);
    const squareSize = Math.floor(960 / input);

    for (let i = 0; i < loopInput; i++) {
      const divOfGrid = document.createElement("div")
      divOfGrid.className = "grid";
      divOfGrid.style.width = `${squareSize}px`;
      divOfGrid.style.height = `${squareSize}px`;
      container.appendChild(divOfGrid)
    }
  }

})
container.addEventListener("mouseover", (e) => {
  if (e.target.className === "grid") {
    e.target.style.backgroundColor = "black";
  }
})
