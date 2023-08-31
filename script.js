const resultElement = document.querySelector("#result");

function createLists() {
  const inputList = document.querySelector("#input-bases");
  const outputList = document.querySelector("#output-bases");

  fillList(inputList);
  fillList(outputList);
}

function fillList(list) {
  for (let i = 2; i <= 62; i++) {
    const listItem = document.createElement("option");
    listItem.className = "base";
    listItem.value = i;
    listItem.innerHTML = `Base ${i}`;
    list.appendChild(listItem);
  }
}

function getSelectedInputBase() {
  return document.querySelector("#input-bases").value;
}

function getSelectedOutputBase() {
  return document.querySelector("#output-bases").value;
}

function convertValues() {
  const inputBase = getSelectedInputBase();
  const outputBase = getSelectedOutputBase();

  const inputValue = document.querySelector("#input-value").value;

  const result = convertXToY(inputValue, inputBase, outputBase);

  resultElement.value = result;
}

createLists();
