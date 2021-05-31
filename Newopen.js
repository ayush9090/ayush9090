let download = document.querySelector(".download");
let open = document.querySelector(".open");
let input = document.querySelector(".file-taker");
let news=document.querySelector(".fa-plus-circle");
download.addEventListener("click", function () {
    // sheetListArr
    let a = document.createElement("a");
    // json -> xlsx -> excel
    let url = "data:text/json;charset=utf-8," + 
    encodeURIComponent(JSON.stringify(sheetListArr));
    a.setAttribute("href", url);
    a.setAttribute("download", "file.json");
    a.click();
    // a.remove();
})
open.addEventListener("click", function () {
    // input type file
    input.click();
    // select file
    input.addEventListener("change", function () {
        // file obj arr
        let filesArr = input.files;
        let fileObj = filesArr[0];
        console.log(fileObj);
        // frontend api -> file reader 
        let fr = new FileReader();
        fr.readAsText(fileObj);
        fr.addEventListener("load", function () {
            let stringData = fr.result
            sheetListArr = JSON.parse(stringData);
            sheetArr = sheetListArr[0];
            setUI(sheetArr);
            
        })
    })
})
function setUI(sheetArr) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            let cellElem = document.querySelector(`.grid .cell[rid="${i}"][cid="${j}"]`);
            let cellObj = sheetArr[i][j];
            cellElem.innerText = cellObj.value;
            cellElem.style.fontWeight = cellObj.isBold == true ? "bold" : "normal";
            cellElem.style.fontSize = cellObj.fontSize + "px";
        }
    }
    document.querySelector(`.grid .cell[rid="${0}"][cid="${0}"]`).click();
}

news.addEventListener("click",function(){
    while(sheetListArr.length>0){
        sheetListArr.pop();
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            let cellElem = document.querySelector(`.grid .cell[rid="${i}"][cid="${j}"]`);
            let cellObj = sheetArr[i][j];
            cellElem.innerText = ""
            cellElem.style.fontWeight = "normal";
           
        }
    }
})