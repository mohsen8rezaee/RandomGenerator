const btnGenerate = document.getElementById("btn-generate");
//-----------name-------------
function paginationCount() {
  const len = Number(document.getElementById("length-page-input").value);
  return len;
}

function getFilterName() {
  const isUpperCaseName = document.getElementById("UpperCase_Name").checked;
  const isLowerCaseName = document.getElementById("LowerCase_Name").checked;
  const isNumbersName = document.getElementById("Numbers_Name").checked;
  const isSignsName = document.getElementById("Signs_Name").checked;

  const MaxCharName = Number(document.getElementById("MaxCharName").value);
  const MinCharName = Number(document.getElementById("MinCharName").value);

  const filterName = [
    isUpperCaseName,
    isLowerCaseName,
    isNumbersName,
    isSignsName,
    MaxCharName,
    MinCharName,
  ];
  return filterName;
}
//------------Family-----------
function getFilterFamily() {
  const isUpperCaseFamily = document.getElementById("UpperCase_Family").checked;
  const isLowerCaseFamily = document.getElementById("LowerCase_Family").checked;
  const isNumbersFamily = document.getElementById("Numbers_Family").checked;
  const isSignsFamily = document.getElementById("Signs_Family").checked;

  const MaxCharFamily = Number(document.getElementById("MaxCharFamily").value);
  const MinCharFamily = Number(document.getElementById("MinCharFamily").value);

  const filterFamily = [
    isUpperCaseFamily,
    isLowerCaseFamily,
    isNumbersFamily,
    isSignsFamily,
    MaxCharFamily,
    MinCharFamily,
  ];
  return filterFamily;
}
//----------email--------------
function getEmailFilter() {
  const isUpperCaseEmail = document.getElementById("UpperCase_Email").checked;
  const isLowerCaseEmail = document.getElementById("LowerCase_Email").checked;
  const isNumbersEmail = document.getElementById("Numbers_Email").checked;
  const isSignsEmail = document.getElementById("Signs_Email").checked;

  const MaxCharEmail = Number(document.getElementById("MaxCharEmail").value);
  const MinCharEmail = Number(document.getElementById("MinCharEmail").value);

  const filterEmail = [
    isUpperCaseEmail,
    isLowerCaseEmail,
    isNumbersEmail,
    isSignsEmail,
    MaxCharEmail,
    MinCharEmail,
  ];
  return filterEmail;
}
function getLengthRecord() {
  const length = document.getElementById("length-record-input").value;
  return length;
}
//--------------------------------------------------------------------------------------------
function showRecords(list) {
  // const tableBox = document.getElementById("table-box");
  // tableBox.innerHTML = "";
  // const tablebody = document.createElement("table");
  // tablebody.classList.add("table-record");
  // tablebody.classList.add("scroll");
  // tablebody.id = "scroll";
  const tablebody = document.getElementById("table-records");
  tablebody.innerHTML = "";
  // tableBox.appendChild(tablebody);
  const tr = document.createElement("tr");

  const thName = document.createElement("th");
  thName.textContent = "Name";
  thName.classList.add("name");
  tr.appendChild(thName);

  const thFamily = document.createElement("th");
  thFamily.textContent = "Family";
  thFamily.classList.add("family");
  tr.appendChild(thFamily);

  const thEmail = document.createElement("th");
  thEmail.textContent = "Email";
  thEmail.classList.add("email");
  tr.appendChild(thEmail);

  const thAge = document.createElement("th");
  thAge.textContent = "Age";
  thAge.classList.add("age");
  tr.appendChild(thAge);

  tablebody.appendChild(tr);
  list.forEach((row) => {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = row.name.join("");
    tdName.classList.add("name");
    tr.appendChild(tdName);

    const tdFamily = document.createElement("td");
    tdFamily.textContent = row.family.join("");
    tdFamily.classList.add("family");
    tr.appendChild(tdFamily);

    const tdEmail = document.createElement("td");
    tdEmail.textContent = row.email.join("");
    tdEmail.classList.add("email");
    tr.appendChild(tdEmail);

    const tdAge = document.createElement("td");
    tdAge.textContent = row.age.join("");
    tdAge.classList.add("age");

    tr.appendChild(tdAge);

    tablebody.appendChild(tr);
  });
  // tableBox.appendChild(tablebody)
}
function showHistoryItems(item) {
  const historyBody = document.getElementById("history-body");

  const hr = document.createElement("hr");
  hr.classList.add("hr");
  const division = document.createElement("div");
  division.classList.add("row");
  division.classList.add("records");

  const titleList = document.createElement("div");
  titleList.classList.add("history-name");
  titleList.textContent = `${item.countOfRecord} items`;
  const calenderIcon = document.createElement("i");
  calenderIcon.classList.add("fa-sharp");
  calenderIcon.classList.add("fa-regular");
  calenderIcon.classList.add("fa-calendar");

  division.appendChild(titleList);
  division.appendChild(calenderIcon);

  historyBody.appendChild(hr);
  historyBody.appendChild(division);
}
const parentPagination = document.getElementById("parent-pagination");
function pageLink(id) {
  const linkBox = document.getElementById("parent-pagination");
  // const tableBox = document.getElementById("table-box");
  // const linkBox = document.createElement("div");
  // linkBox.id = "parent-pagination";
  // linkBox.classList.add("pagination");

  const linkEL = document.createElement("span");
  linkEL.textContent = id;
  linkEL.classList.add("page-id");

  linkBox.appendChild(linkEL);
  // tableBox.appendChild(linkBox);
}
const btnDisplay = document.getElementById("btn-detail");
function displayNote() {
  const tableBox = document.getElementById("table-box");
  tableBox.classList.add("d-none");
}
function displayTable() {
  const noteBox = document.getElementById("noteBox");
  noteBox.classList.add("d-none");
}
function showRecords2(list) {
  list.forEach((row) => {
    const nodeitem = document.createElement("div");
    nodeitem.classList.add("node-item");

    const ptag = document.createElement("p");
    ptag.classList.add("note-fild");
    ptag.textContent = row.name.join("");

    const ptag1 = document.createElement("p");
    ptag1.classList.add("note-fild");
    ptag1.textContent = row.family.join("");

    const ptag2 = document.createElement("p");
    ptag2.classList.add("note-fild");
    ptag2.textContent = row.age.join("");

    const ptag3 = document.createElement("p");
    ptag3.classList.add("note-fild");
    ptag3.textContent = row.email.join("");

    nodeitem.appendChild(ptag)
    nodeitem.appendChild(ptag1)
    nodeitem.appendChild(ptag2)
    nodeitem.appendChild(ptag3)
  });
}
const dateBox = document.getElementById("date-clock");
const headerTitle = document.getElementById("header");

export const domData = {
  btnDisplay,
  getEmailFilter,
  getFilterFamily,
  getFilterName,
  getLengthRecord,
  btnGenerate,
  showRecords,
  showHistoryItems,
  dateBox,
  headerTitle,
  paginationCount,
  parentPagination,
  pageLink,
  displayTable,
  displayNote,
};
