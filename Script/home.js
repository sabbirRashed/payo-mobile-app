

document.getElementById('get-addmoney-form')
    .addEventListener('click', function(){
        const addMoneyForm = document.getElementById('add-money-form');
        addMoneyForm.classList.remove('hidden');
        const cashOutForm = document.getElementById('cashout-form');
        cashOutForm.classList.add('hidden')
    })

document.getElementById('get-cashout-form')
    .addEventListener('click', function(){
        const cashOutForm = document.getElementById('cashout-form');
        cashOutForm.classList.remove('hidden')
        const addMoneyForm = document.getElementById('add-money-form');
        addMoneyForm.classList.add('hidden');
    })


// -----------add amount function--------------->
document.getElementById('add-money-btn')
    .addEventListener('click', function(e){
        e.preventDefault();
        const validPin = 1234;
        
        const bank = document.getElementById('add-bank').value;
        const accountNumber = document.getElementById('account-number').value;
        const addAmount = parseInt(document.getElementById('add-amount').value);
        const addPin = parseInt(document.getElementById('add-pin').value);

        const oldBalance = parseInt(document.getElementById('balance').innerText);

        // ----------data validation----------------->
        if(accountNumber.length !== 11){
            alert('please provide valid account number');
            return
        }
        if (addPin !== validPin){
            alert('please provide valid pin number');
            return
        }
        const newBalance = addAmount + oldBalance;
        document.getElementById('balance').innerText = newBalance;
        console.log(newBalance);
    })

    // ------------cash out function----------------->
    document.getElementById('cashout-btn')
    .addEventListener('click', function(e){
        e.preventDefault();
        const validPin = 1234;
        
        const agentNumber = document.getElementById('agent-number').value;
        const cashoutAmount = parseInt(document.getElementById('cashout-amount').value);
        const cashoutPin = parseInt(document.getElementById('cashout-pin').value);

        const oldBalance = parseInt(document.getElementById('balance').innerText);

        // ----------data validation----------------->
        if(agentNumber.length !== 11){
            alert('please provide valid agent number');
            return
        }
        if (cashoutPin !== validPin){
            alert('please provide valid pin number');
            return
        }
        const currentBalance = oldBalance - cashoutAmount ;
        document.getElementById('balance').innerText = currentBalance;
        console.log(currentBalance)
    })