function myFnc1() {
    document.getElementById("demo1").innerHTML = "Changed 1";
    document.getElementById("demo1").style.backgroundColor = "#5CF4DD";
    document.getElementById("demo1").style.Color = "White";
}
function myFnc2(i) {
    // document.getElementById("demo2").innerHTML = "Changed 2";
    document.getElementById("demo2").innerHTML = i;
}
function myFnc3(a,b) {
    document.getElementById("demo3").innerHTML = a*b
    return a * b;
}