const resultElement = document.querySelector("#result")

function createListElements(list) {
  for (let i = 2; i <= 62; i++) {
    const listItem = document.createElement("option")
    listItem.className = "base"
    listItem.value = i
    listItem.innerHTML = `Base ${i}`
    list.appendChild(listItem)
  }
}

function fillLists() {
  const inputList = document.querySelector("#input-bases")
  const outputList = document.querySelector("#output-bases")

  createListElements(inputList)
  createListElements(outputList)
}

function getSelectedInputBase() {
  return document.querySelector("#input-bases").value
}

function getSelectedOutputBase() {
  return document.querySelector("#output-bases").value
}

function getInputValue() {
  return document.querySelector("#input-value").value
}

function convertValues() {
  const inputBase = getSelectedInputBase()
  const outputBase = getSelectedOutputBase()

  const inputValue = getInputValue()

  const result = main(inputValue, inputBase, outputBase)

  resultElement.value = result
}

fillLists()


