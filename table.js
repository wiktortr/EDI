const TABLE_HEADERS = 'table_headers';
const TABLE_BODY = 'table_body';

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

export function tableBuilder(rows) {
  const tableHeadersElement = document.getElementById(TABLE_HEADERS);

  createTableHeaderNames(rows)
    .map(createHeaderElement)
    .forEach((el) => tableHeadersElement.append(el));

  appendToTable(rows);
}

export const appendToTable = (rows) => {
  const tableBody = document.getElementById(TABLE_BODY);
  rows.map(createRow).forEach((row) => tableBody.append(row));
};

export const getTableData = async (api_url) => {
  return await (await fetch(api_url)).json();
};

const clearElement = (elementId) => {
  document.getElementById(elementId).innerHTML = '';
};

export const clearTable = () => {
  clearElement(TABLE_HEADERS);
  clearElement(TABLE_BODY);
};
