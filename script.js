function insert_Row() {
    //Write your code here

	 const table = document.getElementById("sampleTable");

 const newRow = table.insertRow(0); 


  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.innerText = "New Cell1";
  cell2.innerText = "New Cell2";


	
  // const newRow = document.createElement("tr");

  
  // const cell1 = document.createElement("td");
  // cell1.textContent = "New Cell1";
  // const cell2 = document.createElement("td");
  // cell2.textContent = "New Cell2";

  // newRow.appendChild(cell1);
  // newRow.appendChild(cell2);
  // table.insertBefore(newRow, table.firstElementChild);

  
}
