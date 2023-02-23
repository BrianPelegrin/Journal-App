const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const getRandomNumber = (maxNumber: number): number => {
  return Math.floor(Math.random() * maxNumber);
};

const randomNumber =
  new Date().getTime() + getRandomNumber(new Date().getTime()).toString();

const idGenerator = (
  withLetters: boolean = true,
  withNumbers: boolean = true,
  lettersCount: number = 4,
  numbersCount: number = 4
) => {
  const newId = [];

  const newNumber = randomNumber.slice(
    randomNumber.length - numbersCount,
    randomNumber.length
  );

  if (withLetters) {
    for (let i = 0; i < newNumber.length; i++) {
      newId.push(letters[getRandomNumber(32)]);
    }
  }
  if (withNumbers) {
    for (let i = 0; i < lettersCount; i++) {
      newId.push(newNumber[i]);
    }
  }

  return newId.join("").toString();
};

export default idGenerator;
