function getNumber(num){
    
    var result = document.getElementById("result");
    result.value += num;

}


function clearResult(){
var result = document.getElementById("result");
    result.value = "";
}


function getResult(){
    var result = document.getElementById("result");
        result.value = eval(result.value);
    }
    
    

    function getResultsin(){
        var result = document.getElementById("result");
        result.value = Math.sin(result.value);
    }
    function getResultcos(){
        var result = document.getElementById("result");
        result.value = Math.cos(result.value);
    }
    function getResulttan(){
        var result = document.getElementById("result");
        result.value = Math.tan(result.value);
    }



 