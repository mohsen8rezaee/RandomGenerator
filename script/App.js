import { GenerateRandomFild } from "./Utilities/randomGeneratore.js";
import { Record } from "./Models/Record.js";
import { HistoryRecord } from "./Models/HistoryRecord.js";
import { domData } from "./Dom/dom.js";
import { CreateDate } from "./Utilities/dateTime.js";

document.addEventListener("DOMContentLoaded", () => {
  CreateDate();
  setInterval(CreateDate,1000)
});

let resultcode = [];
let history = [];
domData.btnGenerate.addEventListener("click", () => {
  //[up 0, low 1, num 2, sign 3, max 4, min 5]
  const getFilterName = [...domData.getFilterName()];
  const getFilterFamily = [...domData.getFilterFamily()];
  const getFilterEmail = [...domData.getEmailFilter()];

  const length = domData.getLengthRecord();
  if (resultcode != null) {
    const historyRecords = new HistoryRecord(resultcode.length,Date.now(),resultcode)
    history.push(historyRecords);
    resultcode = [];
    domData.showHistoryItems(historyRecords)
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
  console.log(resultcode);
  console.log(history);
  domData.showRecords(resultcode);
  
});

