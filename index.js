function displayA(value){
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calcResult(){
    const display = document.getElementById('display').value;
    try{
        const result = eval(display);
        document.getElementById('display').value = result;
    }catch(error){
        alert('Invalid Expression');
    }
}