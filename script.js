let plsbtn=document.querySelector(".fa-plus");
let sheetlist=document.querySelector(".sheet-list");
let firstsheet=document.querySelectorAll(".sheet");

plsbtn.addEventListener("click",function(){
    let sheetarr=document.querySelectorAll(".sheet");
    let lastsheet=sheetarr[sheetarr.length-1];
    let idx=lastsheet.getAttribute("sheetidx");
    idx=Number(idx);
   let Newsheet=document.createElement("div");
   Newsheet.setAttribute("class","sheet");
   Newsheet.setAttribute("sheetidx",idx+1);
   Newsheet.innerText=`sheet ${idx+1}`;
   sheetlist.appendChild(Newsheet);


});

let adress=document.querySelector(".adress-box");
let ALLcells=document.querySelectorAll(".grid .cell");
for(let i=0;i<ALLcells.length;i++){
    ALLcells[i].addEventListener("click",function(){
        let rid=Number(ALLcells[i].getAttribute("rid"));
        let cid=Number(ALLcells[i].getAttribute("cid"));
        
       let c= String.fromCharCode(65+cid);
        let p=rid+1
        let str=c+p;
        adress.value=str;
        
    })
}
