let mybtn =document.getElementById("btn");
mybtn.onclick = function(){
    document.getElementById('pageadd_tach').classList.remove('hidden');
}
let myanul =document.getElementById("anuler");

myanul.onclick =function(){
    document.getElementById('pageadd_tach').classList.add('hidden');
}

let mysub =document.getElementById("subm");
mysub.onclick =function(){
    document.getElementById('cont_todo').classList.remove('container_todo');
    let input =document.getElementById("validationCustom03").value;
    let container =document.getElementById("titer_todo").innerText+=input;
    
    document.getElementById('pageadd_tach').classList.add('hidden'); 
}







