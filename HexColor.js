var redColor = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, "A", "B", "C", "D", "E", "F"]
var blueColor = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, "A", "B", "C", "D", "E", "F"]
var greenColor = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, "A", "B", "C", "D", "E", "F"]

function changeColor() {
    //  #RRBBGG
    // first two digit for red color
    firstRedDigit = redColor[Math.floor(Math.random() * redColor.length)]
    secondRedDigit = redColor[Math.floor(Math.random() * redColor.length)]

    // first two digit for blue color
    firstBlueDigit = blueColor[Math.floor(Math.random() * redColor.length)]
    secondBlueDigit = blueColor[Math.floor(Math.random() * redColor.length)]

    // first two digit green color 
    firstGreenDigit = greenColor[Math.floor(Math.random() * redColor.length)]
    secondGreenDigit = greenColor[Math.floor(Math.random() * redColor.length)]

    HexColor = "#" + firstRedDigit + secondRedDigit + firstBlueDigit +
    secondBlueDigit + firstGreenDigit + secondGreenDigit;

    // final color
    document.getElementById("bodyID").style.backgroundColor = HexColor;
    document.getElementById("hexColor").innerHTML = "Hex Color : " + HexColor;
    
}