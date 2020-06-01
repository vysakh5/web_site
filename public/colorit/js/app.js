var red = 0
var green = 0
var blue = 0











// Create a new color picker instance
// https://iro.js.org/guide.html#getting-started
var colorPicker = new iro.ColorPicker(".colorPicker", {
    // color picker options
    // Option guide: https://iro.js.org/guide.html#color-picker-options
    width: 280,
    color: "rgb(255, 255, 255)",
    borderWidth: 1,
    borderColor: "#fff",
});

var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function(color) {
    // Show the current color in different formats
    // Using the selected color: https://iro.js.org/guide.html#selected-color-api
    red = color.rgb["r"]
    green = color.rgb["g"]
    blue = color.rgb["b"]
    console.log(color.hexString);

    writeUserDataon()
    document.getElementById("head1").style.color = color.hexString

});

function writeUserDataon() {
    firebase.database().ref().set({

        pwm1: red,
        pwm2: green,
        pwm3: blue


    });
    //clrdata();
    console.log("data inserted red = " + red);
    console.log("data inserted green = " + green);
    console.log("data inserted blue = " + blue);


}