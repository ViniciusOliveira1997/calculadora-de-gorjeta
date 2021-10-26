function calculateTip (event) {
 event.preventDefault();
 let Bill = document.getElementById('Bill').value;
 let serviceQuality = document.getElementById('serviceQuality').value;
 let number = document.getElementById('people').value;

 if (Bill == '' | serviceQuality == 0){
     alert("Por favor, preencha esse valor")
     return;
 }
 if (number == 0 | number <= 1) {
     number = 1;
     document.getElementById('each').style.display ="none"
    } else {
        document.getElementById('each').style.display ="block"

    }

    let total = (Bill * serviceQuality) / number;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display="block";

}
document.getElementById('totalTip').style.display="none";
document.getElementById('each').style.display="none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
