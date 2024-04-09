function calculateTip() {
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let tipPersentage = parseFloat(document.getElementById("tipPercentage").value);

    if(isNaN(billAmount) || isNaN(tipPersentage)) {
        alert("Please, just numbers!!")
        return;
    }


    let tipAmount = billAmount * (tipPersentage / 100);
    let totalAmount = billAmount + tipAmount;

    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
}
