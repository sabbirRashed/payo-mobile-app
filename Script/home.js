
const transectionData = [];

// ----------------Toggling Function-------------------------->
function handleToggle(id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.classList.add('hidden');
    }
    document.getElementById(id)
        .classList.remove('hidden');
}

// ----------------Function to toggle button style------------------->
function eBtnStyle(id) {
    const formBtns = document.getElementsByClassName('form-btn');
    for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "text-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300", "text-[#080808b3]")
    }
    document.getElementById(id)
        .classList.remove("border-gray-300", "text-[#080808b3]");
    document.getElementById(id)
        .classList.add("border-[#0874f2]", "text-[#0874f2]", "bg-[#0874f20d]");
}



// -----------Function to get input number values ------------>
function getInputValueNumber(id) {
    const inputFieldValue = document.getElementById(id).value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

// ------------Function to get input string value----------------->
function getIputValue(id) {
    const inputFieldValue = document.getElementById(id).value;
    return inputFieldValue;
}

// ---------------Function to get innerText---------->
function getInnerText(id) {
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = parseInt(innerText);
    return innerTextNumber;
}

// -----------Function to set innerText----------------->
function setInnerText(value) {
    const availavleBallance = document.getElementById('balance');
    availavleBallance.innerText = value;
    return availavleBallance;
}

// ---------toggling feature----------->
document.getElementById('get-addmoney-form')
    .addEventListener('click', function () {

        handleToggle('add-money-form');
        eBtnStyle('get-addmoney-form');
    })

document.getElementById('get-cashout-form')
    .addEventListener('click', function () {

        handleToggle('cashout-form');
        eBtnStyle('get-cashout-form');
    })

document.getElementById('get-transfer-money-form')
    .addEventListener('click', function () {

        handleToggle('transfer-money-form');
        eBtnStyle('get-transfer-money-form');
    })

document.getElementById('get-bonus-form')
    .addEventListener('click', function () {

        handleToggle('bonus-form');
        eBtnStyle('get-bonus-form');
    })

document.getElementById("get-pay-bill-form")
    .addEventListener('click', function () {

        handleToggle('pay-bill-form');
        eBtnStyle('get-pay-bill-form');
    })

document.getElementById("get-transection-form")
    .addEventListener('click', function () {

        handleToggle('transection-history');
        eBtnStyle('get-transection-form');
    })




// -----------add amount form--------------->
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const availavleBallance = getInnerText('balance');
        const realPin = 1234;

        const chooseBank = getIputValue('add-bank');

        const accountNumber = getIputValue('account-number');

        const addPin = getInputValueNumber('add-pin');

        const addMoney = getInputValueNumber('add-amount');

        // ----------Data Validation----------------->
        if (accountNumber.length !== 11) {
            alert('please provide valid account number');
            return;
        }
        if (addPin !== realPin) {
            alert('please provide valid pin number');
            return;
        }
        if (addMoney <= 0) {
            alert('Invalid amount');
            return;
        }

        const currentBallence = availavleBallance + addMoney;
        setInnerText(currentBallence);

        const data = {
            name: "Add Money",
            time: new Date().toLocaleTimeString(),
        }
        transectionData.push(data);

    })

// ------------cash out form----------------->
document.getElementById('cashout-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const validPin = 1234;

        const agentNumber = getIputValue('agent-number');

        const cashoutAmount = getInputValueNumber('cashout-amount');

        const cashoutPin = getInputValueNumber('cashout-pin');

        const oldBalance = getInnerText('balance');

        // ----------data validation----------------->
        if (agentNumber.length !== 11) {
            alert('please provide valid agent number');
            return
        }
        if (cashoutPin !== validPin) {
            alert('please provide valid pin number');
            return
        }
        if (cashoutAmount <= 0 || cashoutAmount > oldBalance) {
            alert('Invalid amount');
            return;
        }
        const currentBalance = oldBalance - cashoutAmount;
        setInnerText(currentBalance);

        const data = {
            name: "Cash Out",
            time: new Date().toLocaleTimeString(),
        }
        transectionData.push(data);

    })

// -----------------------Transfer Money Form------------------>
document.getElementById('transfer-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const validPin = 1234;

        const availavleBallance = getInnerText('balance');

        const userAccNumber = getIputValue('user-account-number');

        const transferAmount = getInputValueNumber("transfer-amount");

        const transferMoneyPin = getInputValueNumber("trnsfer-money-pin");

        // -----------------Data Validation-------------------------->
        if (userAccNumber.length !== 11) {
            alert('Please provide valid account number');
            return;
        }
        if (transferMoneyPin !== validPin) {
            alert('Please provide valid pin number');
            return;
        }
        const currentBalance = availavleBallance - transferAmount;
        setInnerText(currentBalance);

        const data = {
            name: "Transfer Money",
            time: new Date().toLocaleTimeString(),
        }
        transectionData.push(data);

    })

// ---------------------------Bonus Form----------------->
document.getElementById('bonus-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const validCoupon = 1234;

        const cpuponNumber = getInputValueNumber("bonus-coupon");

        // -----------------Data Validation-------------------------->

        if (cpuponNumber !== validCoupon) {
            alert('Please provide valid coupon number');
            return;
        }

        const data = {
            name: "Get Bonus",
            time: new Date().toLocaleTimeString(),
        }
        transectionData.push(data);

    })

// --------------------------Pay Bill Form-------------------------->
document.getElementById('pay-bill-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const availavleBallance = getInnerText('balance');
        const validPin = 1234;

        const chooseBill = getIputValue('pay-bill');

        const billerAccountNumber = getIputValue('biller-account-number');

        const billPin = getInputValueNumber('bill-pin');

        const payAmount = getInputValueNumber('pay-amount');

        // ----------Data Validation----------------->
        if (billPin !== validPin) {
            alert('please provide valid pin number');
            return;
        }

        const currentBallence = availavleBallance - payAmount;
        setInnerText(currentBallence);

        const data = {
            name: "Pay Bill",
            time: new Date().toLocaleTimeString(),
        }
        transectionData.push(data);


    })

// ------------------transection history----------->
document.getElementById('get-transection-form')
    .addEventListener('click', function () {
        const transectionContainer = document.getElementById('transection-container');
        transectionContainer.innerHTML = "";

        for (const data of transectionData) {
            const div = document.createElement("div");
            div.innerHTML = `   
               <div id="card" class=" max-w-lg mx-auto mt-8 p-4 bg-white rounded-xl flex justify-between items-center">
                    <div class="flex items-center">
                        <div id="image" class=" p-3 bg-[#f4f5f7] flex justify-center items-center rounded-full">
                            <img src="./assets/wallet1.png" alt="">
                        </div>
                        <div class="ml-2">
                            <h1 class="font-semibold">${data.name}</h1>
                            <p class="text-sm">${data.time}</p>
                         </div>
                    </div>

                    <div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            `
            transectionContainer.appendChild(div)

        }
    })
