const btnGenerate = document.getElementById("btn-generate");
//-----------name-------------

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
  const tablebody = document.getElementById("table-records");
  tablebody.innerHTML = "";

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
export const dateBox = document.getElementById("date-clock")

export const domData = {
  getEmailFilter,
  getFilterFamily,
  getFilterName,
  getLengthRecord,
  btnGenerate,
  showRecords,
  showHistoryItems,
  dateBox

};
