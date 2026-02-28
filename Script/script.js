
document.getElementById('login-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        const number = 12345678910;
        const pin = 1234;
         
        const inputNumber = document.getElementById('number').value;
        const convertedNumber = Number(inputNumber);

        const inputPin = document.getElementById('pin').value;
        const convertedInputPin = Number(inputPin);

        if(convertedNumber === number && convertedInputPin === pin){
            window.location.href = "home.html";
        }
        else{
            alert(`
                
                Mobile number: 012345678910
                    Pin: 1234

       NB: I show this for Programming Hero project checker`);
        }
        
    })