function ucFirst(str) {
  if (str.length > 0) {
    const firstLetter = str[0].toUpperCase();

    return firstLetter + str.slice(1);
  } else {
    return "";
  }
}
