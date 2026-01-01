import { GenerateRandomFild } from "./Utilities/randomGeneratore.js";
import { Record } from "./Models/Record.js";
import { HistoryRecord } from "./Models/HistoryRecord.js";
import { domData } from "./Dom/dom.js";
import { CreateDate } from "./Utilities/dateTime.js";
import { getPage } from "./Utilities/paginationController.js";

//time
document.addEventListener("DOMContentLoaded", () => {
  CreateDate();
  setInterval(CreateDate, 1000);
});

let flagGeneratePageID = false;
let resultcode = [];
let history = [];
let list = [];
let pageID = 1;
let psize = 0;
let isNote = false;

domData.btnDisplay.addEventListener("click", () => {
  isNote = !isNote;
  if (isNote) {
    document.getElementById("noteBox").classList.remove("d-none");
    document.getElementById("table-box").classList.add("d-none");
  } else {
    document.getElementById("noteBox").classList.add("d-none");
    document.getElementById("table-box").classList.remove("d-none");
  }
  sendToDom(resultcode,pageID,psize)
});

domData.btnGenerate.addEventListener("click", () => {
  const start = performance.now();
  const pageSize = domData.paginationCount();
  psize = pageSize;
  //[up 0, low 1, num 2, sign 3, max 4, min 5]
  const getFilterName = [...domData.getFilterName()];
  const getFilterFamily = [...domData.getFilterFamily()];
  const getFilterEmail = [...domData.getEmailFilter()];
  let length = domData.getLengthRecord();
  if (length == 0) {
    length = Math.floor(Math.random() * 9501) + 500;
  }
  if (resultcode.length != 0) {
    const historyRecords = new HistoryRecord(
      resultcode.length,
      Date.now(),
      resultcode
    );
    history.push(historyRecords);
    resultcode = [];
    domData.showHistoryItems(historyRecords);
  }
  for (let i = 0; i < length; i++) {
    const name1 = GenerateRandomFild(
      getFilterName[0],
      getFilterName[1],
      getFilterName[2],
      getFilterName[3],
      getFilterName[4],
      getFilterName[5]
    );
    const family = GenerateRandomFild(
      getFilterFamily[0],
      getFilterFamily[1],
      getFilterFamily[2],
      getFilterFamily[3],
      getFilterFamily[4],
      getFilterFamily[5]
    );
    const email = GenerateRandomFild(
      getFilterEmail[0],
      getFilterEmail[1],
      getFilterEmail[2],
      getFilterEmail[3],
      getFilterEmail[4],
      getFilterEmail[5]
    );
    const age = GenerateRandomFild(false, false, true, false, 2, 1);
    const record = new Record(name1, family, age, email);

    resultcode.push(record);
  }

  sendToDom(resultcode, pageID, pageSize);
  const end = performance.now();
  const shoWTime = end - start;
  domData.headerTitle.textContent = `Generated ${length} record at ${shoWTime}`;
});
// send dom----------------
function sendToDom(resultcode, pageID, pageSize) {
  if (!isNote) {
    list = [...getPage(resultcode, pageID, pageSize)];
    domData.showRecords(list);
    const lengthPageID = Math.ceil(resultcode.length / pageSize);
    domData.clearLink();
    for (let i = 0; i < lengthPageID; i++) {
      domData.pageLink(i + 1);
    }
  } else {
    list = [...getPage(resultcode, pageID, pageSize)];
    console.log("list :");
    console.log(list);
    
    domData.showDisplayNote(resultcode)
    const lengthPageID = Math.ceil(resultcode.length / pageSize);
    domData.clearLink();
    for (let i = 0; i < lengthPageID; i++) {
      domData.pageLink(i + 1);
    }
  }
}
// pagination------------
domData.parentPagination.addEventListener("click", (pageTag) => {
  if (!pageTag.target.classList.contains("page-id")) return;
  pageID = Number(pageTag.target.textContent);
  if (isNaN(pageID)) return;

  sendToDom(resultcode, pageID, psize);
});
