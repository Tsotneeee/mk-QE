let ev_Btn = document.getElementById("btn");
ev_Btn.addEventListener("click",main);
let out1 = document.getElementById("output1");
let out2 = document.getElementById("output2");


function main(){
    const a = document.getElementById("a1").value;
    const b = document.getElementById("b1").value;
    const c = document.getElementById("c1").value;
    const a1 = Number(a);const b1 = Number(b);const c1 = Number(c);
    let temp = b1 / 2;
    let help = 4*(a1*c1);

    if ( b1 % 2 == 0 ) {
        let d1 = temp**2 -(a1*c1);

        if ( d1 > 0 ) {
            out1.textContent = (-b1/2 + d1**0.5)/a1;
            out2.textContent = (-b1/2 -d1**0.5)/a1;
        } else {out1.textContent = "discriminante is less then 0"}

    } else if ( b1 % 2 != 0 ) {
        let d = b1**2 -help;
        if ( d > 0 ) {
            out1.textContent = (-b1 + d**0.5)/(2*a1);
            out2.textContent = (-b1 -d**0.5)/ (2*a1);
        } else {out1.textContent = "discriminante is less then 0"}
    }

}