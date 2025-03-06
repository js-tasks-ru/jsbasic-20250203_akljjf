/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement("table");

    const thead = document.createElement("thead");

    thead.innerHTML = `
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    `;

    this.elem.append(thead);

    const tbody = document.createElement("tbody");

    rows.forEach((rowData) => {
      const row = document.createElement("tr");

      for (let key in rowData) {
        const td = document.createElement("td");
        td.textContent = rowData[key];
        row.append(td);
      }

      const buttonCell = document.createElement("td");
      const buttonDelete = document.createElement("button");
      buttonDelete.textContent = "X";
      buttonCell.append(buttonDelete);
      row.append(buttonCell);

      buttonCell.addEventListener("click", () => {
        row.remove();
      });
      tbody.append(row);
    });
    this.elem.append(tbody);
  }
}
