function makeDiagonalRed(table) { 
  for (let i = 0; i < table.rows.length; i++) {

    let tableTd = table.rows[i].cells[i];

    tableTd.style.backgroundColor = 'red';
  }
}
