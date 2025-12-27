import { GenerateRandomFild } from './Utilities/randomGeneratore.js';
import { Record } from './Models/Record.js';
import { HistoryRecord } from './Models/HistoryRecord.js';

const length = document.getElementById('length-record-input').value;
const btnGenerate = document.getElementById('btn-generate');



btnGenerate.addEventListener(btnGenerate,HandleClickGenerator(length))




