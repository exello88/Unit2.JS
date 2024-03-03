//TASK1
const btn1 = document.querySelector('.b-1');
btn1.addEventListener('click', () => {
    const i1 = parseFloat(document.querySelector('.i-1').value);
    const out1 = document.querySelector('.out-1');
    if (i1 == 4) {
        out1.textContent = "TRUE";
    }
    else {
        out1.textContent = "FALSE";
    }
});

//TASK2
const btn2 = document.querySelector('.b-2');
const a21 = 100;
const a22 = 15;
btn2.addEventListener('click', () => {
    const out2 = document.querySelector('.out-2');
    if (a21 > a22) {
        out2.textContent = a21;
    }
    else {
        out2.textContent = a22;
    }
});

//TASK3
const btn3 = document.querySelector('.b-3');
btn3.addEventListener('click', () => {
    const out3 = document.querySelector('.out-3');
    const i2 = parseFloat(document.querySelector('.i-31').value);
    const i3 = parseFloat(document.querySelector('.i-32').value);
    if (i2 > i3) {
        out3.textContent = i2;
    }
    else if (i3 > i2) {
        out3.textContent = i3;
    }
    else {
        out3.textContent = "Они равны";
    }
});

//TASK4
const btn4 = document.querySelector('.b-4');
btn4.addEventListener('click', () => {
    const out4 = document.querySelector('.out-4');
    const i4 = parseFloat(document.querySelector('.i-4').value);
    if (i4 < 2006) {
        out4.textContent = "18";
    }
    else {
        out4.textContent = "0";
    }
});

//TASK5
function f5() {
    const out5 = document.querySelector('.out-5');
    const i5 = parseFloat(document.querySelector('.i-5').value);
    if (i5 < 0) {
        out5.textContent = "m";
    }
    else if (i5 == 0) {
        out5.textContent = "0";
    }
    else {
        out5.textContent = "1";
    }
}

const btn5 = document.querySelector('.b-5');
btn5.addEventListener('click', () => {
    f5();
});

//TASK6
function f6() {
    const out6 = document.querySelector('.out-6');
    const i6 = parseFloat(document.querySelector('.i-6').value);
    if (i6 % 2 == 0) {
        out6.textContent = "even";
    }
    else {
        out6.textContent = "odd";
    }
}

const btn6 = document.querySelector('.b-6');
btn6.addEventListener('click', () => {
    f6();
});

//TASK7
function f7() {
    const out7 = document.querySelector('.out-7');
    const i7 = parseFloat(document.querySelector('.i-71').value);
    const i8 = parseFloat(document.querySelector('.i-72').value);
    out7.textContent = i7 ** i8;
}

const btn7 = document.querySelector('.b-7');
btn7.addEventListener('click', () => {
    f7();
});

//TASK8
function f8() {
    const out8 = document.querySelector('.out-8');
    const s8 = parseFloat(document.querySelector('.s-8').value);
    switch (s8) {
        case 1:
            out8.textContent = "one";
            break;
        case 2:
            out8.textContent = "two";
            break;
        case 3:
            out8.textContent = "three";
            break;
    }
}

const btn8 = document.querySelector('.b-8');
btn8.addEventListener('click', () => {
    f8();
});

//TASK9
function f9() {
    const out9 = document.querySelector('.out-9');
    const i9 = parseFloat(document.querySelector('.i-9').value);
    if ((i9 >= 1) && (i9 <= 32)) {
        out9.textContent = 1;
    }
    else if ((i9 >= 33) && (i9 <= 43)) {
        out9.textContent = 2;
    }
    else if ((i9 >= 44) && (i9 <= 64)) {
        out9.textContent = 3;
    }
    else {
        out9.textContent = 0;
    }
}

const btn9 = document.querySelector('.b-9');
btn9.addEventListener('click', () => {
    f9();
});

//TASK10
const btn10 = document.querySelector('.b-10');
btn10.addEventListener('click', () => {
    const out10 = document.querySelector('.out-10');
    const i10 = document.querySelector('.s-100').value;
    out10.textContent = i10;
});

//TASK11
const s11 = document.querySelector('.s-110');
s11.addEventListener('change', () => {
    const out11 = document.querySelector('.out-11');
    const s11_value = document.querySelector('.s-110').value;
    out11.textContent = s11_value;
});

//TASK12
const btn12 = document.querySelector('.b-12');
btn12.addEventListener('click', () => {
    const out12 = document.querySelector('.out-12');
    const i12 = typeof (document.querySelector('.i-120').value);
    out12.textContent = i12;
});

//TASK13
const btn13 = document.querySelector('.b-13');
btn13.addEventListener('click', () => {
    const out13 = document.querySelector('.out-13');
    const i13 = typeof (document.querySelector('.i-130').value);
    out13.textContent = i13;
});

//TASK14
function f14(){
    const out14 = document.querySelector('.out-14');
    const i14 = document.querySelector('.i-141').value;
    const i15 = document.querySelector('.i-142').value;
    const s14 = document.querySelector('.s-143').value;
    if (s14 == '+') {
        out14.textContent = +i14 + +i15;
    }
    else if (s14 == '-') {
        out14.textContent = +i14 - +i15;
    }
    else if (s14 == '*') {
        out14.textContent = +i14 * +i15;
    }
    else if (s14 == '/') {
        out14.textContent = +i14 / +i15;
    }
}

const btn14 = document.querySelector('.b-14');
btn14.addEventListener('click', () => {
   f14();
});

//TASK15
function f15(){
    const out15 = document.querySelector('.out-15');
    const s15 = document.querySelector('.s-151').value;
    const s16 = document.querySelector('.s-152').value;
    const s17 = document.querySelector('.s-153').value;
    if (s17 == '||') {
        out15.textContent = s15 || s16;
    }
    else if (s17 == '&&') {
        out15.textContent = s15 && s16;
    }
}

const btn15 = document.querySelector('.b-15');
btn15.addEventListener('click', () => {
   f15();
});