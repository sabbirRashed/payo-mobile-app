
document.getElementById('login-btn')
    .addEventListener('click', function(e){
        e.preventDefault();
        
        const mobileNumber = 12345678910;
        const pinNumber = 1234;

        const getNumber = document.getElementById('number').value;
        const convertedGetNumber =parseInt(getNumber);
        const getPin = document.getElementById('pin').value;
        const convertedGetPin = parseInt(getPin);
        
        if(convertedGetNumber === mobileNumber && convertedGetPin === pinNumber){
            window.location.href = "./home.html";
        }
        else{
            alert('invaild credentials');
        }

    })