/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name === null || name === undefined) {
    return false;
  }

  const empty = "";
  const hasSpace = name.includes(" ");
  const minLength = 4;

  if (name !== empty && !hasSpace && name.length >= minLength) {
    return true;
  }
  return false;
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
