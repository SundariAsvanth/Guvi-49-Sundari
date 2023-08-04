let op=document.getElementById("output");
function display(num){
        op.value+=num;
}
function calculate(){
    try{
        op.value=eval(op.value);

    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    op.value = " " ;
}
function del(){
    op.value=op.value.slice(0,-1);
}

