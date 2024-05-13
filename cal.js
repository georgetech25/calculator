let result = document.getElementById('inputext')


let calculate = (number)=>{
    result.value+=number;
}

let Result =()=>{
    try{
        result.value=eval(result.value)

    }
    catch(err){
        alert("enter a valid input");
    }
}


function clr(){
    result.value="";
}


function delet(){
    result.value=result.value.slice(0,-1);
}