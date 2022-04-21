function clearall()
{
    document.getElementById("inputArea").value = "";
}

function setvalue(value){
document.getElementById('inputArea').value += value;

return value;
}
function equalOperator() {
    let x = document.getElementById('inputArea').value

    let y = eval(x);

    document.getElementById('inputArea').value = y

    return y
}
function backspace() {
    let str = document.getElementById("inputArea").value;
    str = str.substring(0, str.length - 1);
    if (!str) str = 0;
    document.getElementById("inputArea").value = str;
}