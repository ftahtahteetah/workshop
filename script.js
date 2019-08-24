//let age = parseInt(prompt('how old are you?'));
// let doc = document.getElementsByTagName('body')[0];
let doc = document.body;
function drive(event) {
    event.preventDefault();
    let age = document.getElementById('age').value,
        log = document.getElementById('log');
        
    if(age == 18) {
        log.innerHTML = "can drive a small car.";
    }
    else if(age > 18 && age <= 24) {
        log.innerHTML = ("can drive a big car.");
    }
    else if(age > 24) {
        log.innerHTML = ("can drive a truck.");
    }
    else {
        log.innerHTML = ("go to school!");
    }
    console.log(66);
}

