const getSumBtn = document.getElementById("getTotal");

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(priceCell => {
    const value = parseFloat(priceCell.textContent) || 0;
    total += value;
  });

  // remove old row if exists
  const oldRow = document.getElementById("total-row");
  if (oldRow) oldRow.remove();

  // create new row
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.id = "ans"; // Cypress expects this id
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
