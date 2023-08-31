const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function decimalToX(input, base, result) {
  if (result === undefined) result = [];

  if (/^[a-zA-Z]+$/.test(input)) {
    alert("Valor não permitido para a base selecionada");
    throw Error("f");
  }

  base = parseInt(base);

  if (input < base) {
    result.unshift(input);
    if (base > 10) {
      return numberToLetter(result).join("");
    }
    return result.join("");
  }

  result.unshift(input % base);
  return decimalToX(parseInt(input / base), base, result);
}

function xToDecimal(input, base) {
  let sum = 0;
  if (base > 10) {
    input = letterToNumber(input, base);
  }

  for (let i = 0, j = input.length - 1; i < input.length; i++, j--) {
    if (input[i] >= base) {
      alert(`Valor ${input[i]} não permitido para a base selecionada`);
      throw Error("f");
    }
    sum += input[i] * base ** j;
  }
  return sum;
}

function numberToLetter(values) {
  const result = [];

  for (let i = 0; i < values.length; i++) {
    const item = values[i];
    if (values[i] < 10) result.push(values[i]);
    else result.push(letters[item - 10]);
  }
  return result;
}

function letterToNumber(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const currentItem = input[i];
    if (!isNaN(currentItem)) result.push(parseInt(currentItem));
    else {
      const letterPosition = letters.indexOf(currentItem) + 10;
      result.push(letterPosition);
    }
  }
  return result;
}

function convertXToY(inputValue, inputBase, outputBase) {
  if (inputBase == 10) return decimalToX(inputValue, outputBase);
  const decimal = xToDecimal(inputValue, inputBase);
  return decimalToX(decimal, outputBase);
}
