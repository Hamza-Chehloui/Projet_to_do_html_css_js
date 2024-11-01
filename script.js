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
    let inputtext =document.getElementById("validationCustom03").value;
    document.getElementById("titre").innerHTML=inputtext;
    // let inputdescrep =document.getElementById("validationTextarea").value;
    // document.getElementById("Description").innerHTML=inputdescrep;
    let inputdat =document.getElementById("dat").value;
    document.getElementById("datetach").innerHTML=inputdat;
    document.getElementById('pageadd_tach').classList.add('hidden');
}





