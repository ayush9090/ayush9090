let row=100;
let column=26;
let toprow=document.querySelector(".top-row");
let str="";
for(let i=0;i<column;i++){
    str+=`<div class='cell'>${String.fromCharCode(65+i)}</div>`;

}
toprow.innerHTML=str;
let leftCol = document.querySelector(".left-col");
str="";
for(let i=0;i<row;i++){
    str+=`<div class="left-col-box">${i+1}</div>`
}
leftCol.innerHTML=str;
let grid = document.querySelector(".grid");
str="";
let sheetListArr=[];
let sheetArr=[];
function sheetmaker(){

for(let i=0;i<100;i++){
    let row = document.createElement("div");
    let rowArr = [];
    row.setAttribute("class","row");
    for(let j=0;j<26;j++){
        let cell=document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("rid", i);
        cell.setAttribute("cid", j);
        cell.setAttribute("contenteditable", "true");
       row.appendChild(cell);
       let cellObj = {
        isBold: false,
        isItalic:false,
        isUnderline:false,
        halign:"none",
        value:"",
        formula:"",
        children:[],
    }
    rowArr.push(cellObj);
    }
    grid.appendChild(row);
    sheetArr.push(rowArr);
}
sheetListArr.push(sheetArr);
}
sheetmaker();
