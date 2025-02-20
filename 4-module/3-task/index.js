function highlight(table) {
  const rows = table.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const status = row.lastElementChild;

    if (status.hasAttribute("data-available")) {
      const isTrue = status.getAttribute("data-available");
      if (isTrue === "true") {
        row.classList.add("available");
      } else {
        row.classList.add("unavailable");
      }
    } else {
      row.setAttribute("hidden", true);
    }

    const gender = row.children[2];
    if (gender.textContent === "m") {
      row.classList.add("male");
    } else {
      row.classList.add("female");
    }

    const age = row.children[1];
    if (age.textContent < 18) {
      row.style.textDecoration = "line-through";
    }
  });
}
