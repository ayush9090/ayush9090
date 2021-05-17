
function updatechlldren(cellobject){
    let children=cellobject.children;
    for(let i=0;i<children.length;i++){
        let child=children[i];
        let{rid,cid}=getridcidadress1(child);
        let cformula=sheetArr[rid][cid].formula;
        let value=evaluate(cformula);
        SetiniUI(value,rid,cid,cformula);
        updatechlldren(sheetArr[rid][cid]);

    }
}
formulabar.addEventListener("keydown",function(e){
    if(e.key=="Enter"&&formulabar.value!=""){
        let adress=document.querySelector(".adress-box");
    let{rid,cid}=getridcidadress1(adress.value);
       let formula=formulabar.value;
       let value=evaluate(formula);
       let cellobject=sheetArr[rid][cid];
       if(cellobject.formula){
        removeparent(cellobject,adress.value);
    }
       SetiniUI(value,rid,cid,formula);
       
       setformula(formula,adressbox.value);
      
    }
})
function setformula(formula,padress){
    let formulatoken=formula.split(" ");
    console.log()
    for(let i=0;i<formulatoken.length;i++){
        let asci=formulatoken[i].charCodeAt(0);
        if(asci>=65 && asci<=90){
            
            let{rid,cid}=getridcidadress1(formulatoken[i]);
            sheetArr[rid][cid].children.push(padress);
        }
    }
}
function evaluate(formula){
    let formulatoken=formula.split(" ");
    console.log()
    for(let i=0;i<formulatoken.length;i++){
        let asci=formulatoken[i].charCodeAt(0);
        if(asci>=65 && asci<=90){
            
            let{rid,cid}=getridcidadress1(formulatoken[i]);
            let cellobject=sheetArr[rid][cid];
            formulatoken[i]=cellobject.value;
        }
    }
    let finalformula=formulatoken.join(" ");
    let ans=eval(finalformula);
    return ans;
}
for(let i=0;i<ALLcells.length;i++){
    ALLcells[i].addEventListener("blur",function(){
        let{cid,rid}=getridcidadress(adressbox);
        let cellObj=sheetArr[rid][cid];
        if (cellObj.value == Allcells[i].innerText) {
            return;
        }
        cellObj.value=Allcells[i].innerText;
        updatechlldren(cellObj);
        
        if(cellObj.formula){
            
            removeparent(cellObj,adressbox.value);
        }
    
    
        
       
    })
}
function removeparent(cellObj,adress){
    let formula1=cellObj.formula;
    console.log(formula1);
    let formulatoken=formula1.split(" ");
    console.log(formulatoken);
    for(let i=0;i<formulatoken.length;i++){
        let asci=formulatoken[i].charCodeAt(0);
        if(asci>=65 && asci<=90){
            
            let{rid,cid}=getridcidadress1(formulatoken[i]);
            let pobjet=sheetArr[rid][cid];
            let idx=pobjet.children.indexOf(adress);
            
            let a=pobjet.children.splice(idx,1);

            console.log(a);
            
        }
    }
    cellObj.formula="";
}
function getcell(rid,cid){
    return document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`)
}
function SetiniUI(value,rid,cid,formula){
    
    let cellobject=getcell(rid,cid);
    cellobject.innerText=value;
    sheetArr[rid][cid].value=value;
    sheetArr[rid][cid].formula=formula;

}
function getridcidadress1(adressbox1){
    
    let ci=Number(adressbox1.charCodeAt(0));
    let cid=ci-65;
    let rid=Number(adressbox1.slice(1))-1;
    return {rid ,cid};
   }