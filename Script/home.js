
// ----------------Toggling Function-------------------------->
function handleToggle(id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.classList.add('hidden');
    }
    document.getElementById(id)
        .classList.remove('hidden');
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

// ---------toggling section----------->
document.getElementById('get-addmoney-form')
    .addEventListener('click', function () {

        handleToggle('add-money-form');
    })

document.getElementById('get-cashout-form')
    .addEventListener('click', function () {

        handleToggle('cashout-form');
    })

document.getElementById('get-transfer-money-form')
    .addEventListener('click', function () {
        
        handleToggle('transfer-money-form');
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

        const currentBallence = availavleBallance + addMoney;
        setInnerText(currentBallence);


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
        const currentBalance = oldBalance - cashoutAmount;
        setInnerText(currentBalance);

    })

// -----------------------Transfer Money Form------------------>
document.getElementById('transfer-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const validPin = 1234;

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


    })
