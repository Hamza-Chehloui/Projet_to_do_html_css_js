let mybtn =document.getElementById("btn");


mybtn.onclick = function(){
    document.getElementById('pageadd_tach').classList.remove('hidden');
}
let myanul =document.getElementById("anuler");

myanul.onclick =function(){
    document.getElementById('pageadd_tach').classList.add('hidden');
}
let mysub =document.getElementById("submit");
mysub.onclick= function(){
    const inputtext =document.getElementById("validationCustom03").value;
    document.getElementById("div1").innerText=inputtext;
    const inputdescrep =document.getElementById("validationTextarea").value;
    document.getElementById("div2").innerText=inputdescrep;
    const inputdat =document.getElementById("dat").value;
    document.getElementById("div3").innerText=inputdat;
    document.getElementById('pageadd_tach').classList.add('hidden');
}

