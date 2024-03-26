// 73...............
function updateVariable() {
    var number = 50;
    console.log("Initial value:", number);
    number = 60;
    console.log("Updated value:", number);
}
updateVariable();
// 74...............
function swapValues() {
    var a = 5, b = 10;
    console.log("Before swap: a =", a, "b =", b);
    var temp = a;
    a = b;
    b = temp;
    //75.............
    function useCompoundOperators() {
        var x = 4;
        console.log("Initial x:", x);
        x += 2;
        console.log("After addition:", x);
        x -= 1;
        console.log("After subtraction:", x);
        x *= 3;
        console.log("After multiplication:", x);
        x /= 2;
        console.log("After division:", x);
    }
    useCompoundOperators();
    console.log("After swap: a =", a, "b =", b);
}
swapValues();
