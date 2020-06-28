/*writing numberss on input text */
function getNumber(num){
     
var result = document.getElementById("result")
result.value += num; //// we used (+=) to concatinate 2 numbers like 12, 13, 14 else it would have been writing 1 to 9 single values only (purany value bhi rahay or nae value bhi)
}
/*clearing the values */
function clearResult(){
    var result = document.getElementById("result")
    result.value = "";
}
/*Calculations */
function getResult(){
    var result = document.getElementById("result")
     result.value  = eval(result.value) //eval is used to calculate the result
}