'use strict';

let name = prompt("Who's there");

if(name == 'Admin') {
    let pass = prompt("Password?");
    if(pass == 'TheMaster') {
        alert("Welcome");
    } else if(pass == null || pass == '') {
        alert("Canceled");
    }
    else {
        alert("Wrong password");
    }
} else if(name == null || name == '') { //null for all browsers '' for Safari
    alert('Canceled');
} else {
    alert("I dont know you");
}
