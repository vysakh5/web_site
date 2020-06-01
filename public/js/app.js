var b1 = 0
var b2 = 0
var b3 = 0
var b4 = 0
var b5 = 0
var pwm1 = 0
var pwm2 = 0
var pwm3 = 0








function tf1() {
    // Get the checkbox
    var checkBox = document.getElementById("toggle");


    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        b1 = 1
    } else {
        b1 = 0
    }
    writeUserDataon()
}

function tf2() {
    // Get the checkbox
    var checkBox = document.getElementById("toggle2");


    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        b2 = 1
    } else {
        b2 = 0
    }
    writeUserDataon()
}


function tf3() {
    // Get the checkbox
    var checkBox = document.getElementById("toggle3");


    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        b3 = 1
    } else {
        b3 = 0
    }
    writeUserDataon()
}


function writeUserDataon() {
    firebase.database().ref().set({
        analog: 215,
        b1: b1,
        b2: b2,
        b3: b3,
        b4: b4,
        b5: b5,
        pwm1: pwm1,
        pwm2: pwm2,
        pwm3: pwm3


    });
    //clrdata();
    console.log("data inserted ");

}