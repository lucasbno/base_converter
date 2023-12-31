const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function decimalToAny(input, base, result) {
  if (result === undefined) {
    if (checkForLetters(input)) {
      alert("Valor não permitido para a base selecionada")
      throw Error("f")
    }
    result = []
  }

  base = parseInt(base)
  const currentRemainder = input % base
  const nextInput = Math.trunc(input / base)

  result.unshift(currentRemainder)

  console.log(`decimalToAny(${input}, ${base}) | resto -> ${currentRemainder} | resultado -> ${result}`)

  if (input < base) {
    if (base > 10) return numberToLetter(result).join("")
    return result.join("")
  }

  return decimalToAny(nextInput, base, result)
}

function anyToDecimal(input, base) {
  let sum = 0

  if (base > 10) {
    input = letterToNumber(input, base)
  }

  let currentExponent = input.length - 1

  for (let i = 0; i < input.length; i++, currentExponent--) {
    const item = input[i]
    if (item >= base) {
      alert("Valor não permitido para a base selecionada")
      throw Error("f")
    }
    sum += item * base ** currentExponent
    console.log(`${item} * ${base}^${currentExponent} += ${sum}`)
  }

  return sum
}

function numberToLetter(values) {
  const result = []

  for (let i = 0; i < values.length; i++) {
    const item = values[i]
    if (item < 10) result.push(item)
    else result.push(letters[item - 10])
  }

  return result
}

function letterToNumber(input) {
  const result = []

  for (let i = 0; i < input.length; i++) {
    const item = input[i]
    if (checkForLetters(item)) result.push(letters.indexOf(item) + 10)
    else result.push(parseInt(item))
  }

  return result
}

function checkForLetters(input) {
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) return true
  }
  return false
}

function main(inputValue, inputBase, outputBase) {
  if (inputBase === "10") return decimalToAny(inputValue, outputBase)
  if (outputBase === "10") return anyToDecimal(inputValue, inputBase)

  const decimal = anyToDecimal(inputValue, inputBase)
  return decimalToAny(decimal, outputBase)
}
