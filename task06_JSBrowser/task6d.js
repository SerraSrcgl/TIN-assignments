const table = document.getElementById('table')
const name = document.getElementById('name')
const bookName = document.getElementById('bookName')
const pageNumber = document.getElementById('pageNumber')

function addTableRow () {
  const row = document.createElement('tr')
  const nameCell = document.createElement('td')
  const bookNameCell = document.createElement('td')
  const pageNumberCell = document.createElement('td')
  nameCell.textContent = name.value
  bookNameCell.textContent = bookName.value
  pageNumberCell.textContent = pageNumber.value
  row.appendChild(nameCell)
  row.appendChild(bookNameCell)
  row.appendChild(pageNumberCell)
  table.appendChild(row)
}