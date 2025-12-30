import { domData } from "../Dom/dom.js";

export function CreateDate() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  domData.dateBox.textContent = `${hours}:${minutes}:${seconds}`;

 
}
