const allKbdButton = document.querySelectorAll('.kbd');
const countPlus = document.getElementById('countPlus');
const countMinus = document.getElementById('countMinus');
const tableBody = document.getElementById('table-body');
// --------------------------------------------------------
const totalContainer = document.getElementById('totalContainer');
const totalString = totalContainer.innerText;
const totalPriceValue = parseFloat(totalString)
let totalValue = totalPriceValue;


const grandTotalContainer = document.getElementById('grandTotal');
const grandTotalString = grandTotalContainer.innerText;
const totalGrandPriceValue = parseFloat(grandTotalString);
let grandTotal = totalGrandPriceValue;
console.log(grandTotalString);








// ---------------------------------------------------------

let plus = 0;
let sitMinus = 40;
let sitClass = 'Economoy';
let sitPrice = 550;


for (const button of allKbdButton) {
    button.addEventListener('click', function (e) {
        if (plus < 4) {
            const backGround = e.target;
            const buttonText = e.target.innerText;
            backGround.classList.add('bg-[#1DD100]');
            plus = plus + 1;
            countPlus.innerText = plus
            sitMinus = sitMinus - 1;
            countMinus.innerText = sitMinus
            // --------------------------------
            const tr = document.createElement('tr');
            tr.innerHTML = `
        <td>${buttonText}</td>
        <td>${sitClass}</td>
        <td>${sitPrice}</td>
        
        `;
            tableBody.appendChild(tr);
            totalValue = totalValue + 550;
            totalContainer.innerText = totalValue;
            grandTotal = grandTotal + 550;
            grandTotalContainer.innerText = grandTotal;
        }
        else {
            alert('You cannot book more than 4 seats at a time')
        }


    })
}



const discountApplyButton = document.getElementById('discountButton');


discountApplyButton.addEventListener('click', function () {
    const inputFieldElement = document.getElementById('inputField');
    const inputField = inputFieldElement.value;
    const grandTotalContainer = document.getElementById('grandTotal');
    const grandTotal = grandTotalContainer.innerText;
    const hiddenContainer = document.getElementById('hidden');


    if (inputField === 'NEW15') {
        const discount15 = grandTotal * 15 / 100;
        const final15 = grandTotal - discount15;
        grandTotalContainer.innerText = final15


        hiddenContainer.classList.add('hidden')
    }
    else if (inputField === 'Couple 20') {
        const discount20 = grandTotal * 20 / 100;
        const final20 = grandTotal - discount20;
        grandTotalContainer.innerText = final20
        hiddenContainer.classList.add('hidden')
    }
    else {
        alert('Please Enter Valid Coupon Code')
    }
})
