function capitalizeHeader(header) {
  return header[0].toUpperCase() + header.slice(1).toLowerCase();
}

function createTableHeaderNames(data) {
  return Object.keys(data[0])
    .map((h) => h.replaceAll('_', ' '))
    .map(capitalizeHeader);
}

function createHeaderElement(header) {
  const th = document.createElement('th');
  th.innerText = header;
  th.setAttribute('scope', 'col');
  return th;
}

function createTableDataElement(tableData) {
  const td = document.createElement('td');
  td.innerHTML = tableData;
  return td;
}

function createRow(rowData) {
  const tr = document.createElement('tr');
  Object.values(rowData)
    .map(createTableDataElement)
    .forEach((el) => tr.appendChild(el));

  return tr;
}

export function tableBuilder(data) {
  const tableHeadersElement = document.getElementById('table_headers');
  const tableBody = document.getElementById('table_body');

  createTableHeaderNames(data)
    .map(createHeaderElement)
    .forEach((el) => tableHeadersElement.append(el));

  data.map(createRow).forEach((row) => tableBody.append(row));
}
