let fontsize=document.querySelector(".font-size");
let fontstyle=document.querySelector(".font-family");
let formulabar=document.querySelector(".formula-box");
let adressbox=document.querySelector(".adress-box");
let bold=document.querySelector(".formatting-container .bold");
let italic=document.querySelector(".formatting-container .italic");
let underline=document.querySelector(".formatting-container .underline");
let alignleft=document.querySelector(".fa-align-left");
let alignjustify=document.querySelector(".fa-align-justify");
let alignright=document.querySelector(".fa-align-right");
let changecolor=document.querySelector(".changecolor");

fontsize.addEventListener("change",function(){
    let{rid,cid}=getridcidadress(adressbox);
    let cell=getcell(rid,cid);
    let cellObj = sheetArr[rid][cid];
    let fs=fontsize.value+"px"
    cell.style.fontSize=fs;

})
fontstyle.addEventListener("change",function(){
    let{rid,cid}=getridcidadress(adressbox);
    let fs=fontstyle.value;
    let cell=getcell(rid,cid);
    let cellObj=sheetArr[rid][cid];
    
    cell.style.fontFamily=fs;
})
bold.addEventListener("click",function(){
    let{rid,cid}=getridcidadress(adressbox);
    let cell=getcell(rid,cid);
    let cellObj=sheetArr[rid][cid];
    if(cellObj.isBold==true){
        cell.style.fontWeight = "normal";
        bold.classList.remove("active-sheet");
        cellObj.isBold=false;

    }
    else{
        cell.style.fontWeight = "bold";
        bold.classList.add("active-sheet");
        cellObj.isBold=true;
    }
})
italic.addEventListener("click",function(){
    let{rid,cid}=getridcidadress(adressbox);
    let cell=getcell(rid,cid);
    let cellObj=sheetArr[rid][cid];
    if(cellObj.isItalic==true){
        cell.style.fontStyle = "normal";
        italic.classList.remove("active-sheet");
        cellObj.isItalic=false;
    }
    else{
        cell.style.fontStyle = "italic";
        italic.classList.add("active-sheet");
        cellObj.isItalic=true;
    }
})

underline.addEventListener("click",function(){
    let{rid,cid}=getridcidadress(adressbox);
    let cell=getcell(rid,cid);
    let cellObj=sheetArr[rid][cid];
    
    if(cellObj.isUnderline==true){
        cell.style.textDecoration="normal";     
        cell.style.textDecorationColor="white";
        underline.classList.remove("active-sheet");
        cellObj.isUnderline=false;

    }
    else{
        
        cell.style.textDecoration="underline";     
        cell.style.textDecorationColor="black";
        underline.classList.add("active-sheet");
        cellObj.isUnderline=true;
    }
  
})
let lcr=document.querySelectorAll(".alignment-container>*");
console.log(lcr.length)
alignleft.addEventListener("click",function(){
    let{rid,cid}=getridcidadress(adressbox);
    let cell=getcell(rid,cid);
    let cellobject=sheetArr[rid][cid];
    for(let i=0;i<lcr.length;i++){
        lcr[i].classList.remove("active-sheet");
    }
    cell.style.textAlign="left";
    alignleft.classList.add("active-sheet");
    cellobject.halign="left";

})
alignjustify.addEventListener("click",function(){
    let{rid,cid}=getridcidadress(adressbox);
    let cell=getcell(rid,cid);
    let cellobject=sheetArr[rid][cid];
    for(let i=0;i<lcr.length;i++){
        lcr[i].classList.remove("active-sheet");
    }
    cell.style.textAlign="center";
    alignjustify.classList.add("active-sheet");
    cellobject.halign="center";
})
alignright.addEventListener("click",function(){
    let{rid,cid}=getridcidadress(adressbox);
    let cell=getcell(rid,cid);
    let cellobject=sheetArr[rid][cid];
    for(let i=0;i<lcr.length;i++){
        lcr[i].classList.remove("active-sheet");
    }
    cell.style.textAlign="right";
    alignright.classList.add("active-sheet");
    cellobject.halign="right";

})
changecolor.addEventListener("change",function(){
    let{rid,cid}=getridcidadress(adressbox);
    let cell=getcell(rid,cid);
    let color=changecolor.value;
    console.log(color);
    cell.style.color=color;
})

function getcell(rid,cid){
    return document.querySelector(`.grid .cell[rid="${rid}"][ cid="${cid}"]`);
}
let Allcells=document.querySelectorAll(".grid .cell");
for(let i=0;i<Allcells.length;i++){
    Allcells[i].addEventListener("click",function(){
        let{rid,cid}=getridcidadress(adress);
        let cellobject=sheetArr[rid][cid];
        if(cellobject.isBold==true){
            bold.classList.add("active-sheet");
        }
        else{
            bold.classList.remove("active-sheet");
        }
        if(cellobject.isItalic==true){
            italic.classList.add("active-sheet");
        }
        else{
            italic.classList.remove("active-sheet");
        }
        if(cellobject.isUnderline==true){
            underline.classList.add("active-sheet");
        }else{
            underline.classList.remove("active-sheet");
        }
     //**********************formula */
     formulabar.value=cellobject.formula;
    })
}
function getridcidadress(adressbox1){
    let adress=adressbox1.value;
    let ci=Number(adress.charCodeAt(0));
    let cid=ci-65;
    let rid=Number(adress.slice(1))-1;
    return {cid ,rid};
   }
Allcells[0].click();