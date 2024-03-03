//TASK1
const btn1 = document.querySelector('.b-1');
function f1() {
    const out1 = document.querySelector('.out-1');
    out1.textContent = "1";
}
btn1.addEventListener('click', () => {
    f1();
})

//TASK2
const i2 = document.querySelector('.i-2');
function f2() {
    const out2 = document.querySelector('.out-2');
    out2.textContent = "2";
}
i2.addEventListener('click', () => {
    f2();
})

//TASK3
const p3 = document.querySelector('.p-3');
function f3() {
    const out3 = document.querySelector('.out-3');
    out3.textContent = "3";
}
p3.addEventListener('click', () => {
    f3();
})

//TASK4
const i4 = document.querySelector('.i-4');
const btn4 = document.querySelector('.b-4');
function f4() {
    const out4 = document.querySelector('.out-4');
    const check = i4.checked;
    out4.textContent = check;
}
btn4.addEventListener('click', () => {
    f4();
})

//TASK5
const i5 = document.querySelector('.i-5');
const btn5 = document.querySelector('.b-5');
function f5() {
    const out5 = document.querySelector('.out-5');
    const check = i5.checked;
    if (check == true) {
        out5.textContent = i5.value;
    }
    else {
        out5.textContent = check;
    }
}
btn5.addEventListener('click', () => {
    f5();
})

//TASK6
const i6 = document.querySelector('.i-6');
const btn6 = document.querySelector('.b-6');
function f6() {
    const out6 = document.querySelector('.out-6');
    out6.textContent = i6.value;
}
btn6.addEventListener('click', () => {
    f6();
})

//TASK7
const btn7 = document.querySelector('.b-7');
function f7() {
    const i7 = document.querySelector('.i-7').value;
    const out71 = document.querySelector('.out-71');
    const out72 = document.querySelector('.out-72');
    out71.textContent = i7;
    if (i7.length >= 6) {
        out72.textContent = 1;
    }
    else {
        out72.textContent = 0;
    }
}
btn7.addEventListener('click', () => {
    f7();
})

//TASK8
const btn8 = document.querySelector('.b-8');
function f8() {
    const out8 = document.querySelector('.out-8');
    out8.innerHTML = '<div class="js2">new div</div>';
}
btn8.addEventListener('click', () => {
    f8();
})

//TASK9
const btn9 = document.querySelector('.b-9');
function f9() {
    const r9 = document.querySelector('.r-9');
    const out9 = document.querySelector('.out-9');
    const check = r9.checked;
    if (check == true) {
        out9.textContent = 'radiobutton';
    }
    else {
        out9.textContent = check;
    }
}
btn9.addEventListener('click', () => {
    f9();
})

//TASK10
const btn10 = document.querySelector('.b-10');
function f10() {
    const i10 = document.querySelector('.i-10').value;
    const out10 = document.querySelector('.out-10');
    out10.style.background = i10;
}
btn10.addEventListener('click', () => {
    f10();
})

//TASK11
const btn11 = document.querySelector('.b-11');
function f11() {
    const i111 = document.querySelector('.i-111').value;
    const i112 = document.querySelector('.i-112');
    i112.value = i111;
}
btn11.addEventListener('click', () => {
    f11();
})

//TASK12
const btn12 = document.querySelector('.b-12');
function f12() {
    const i12 = document.querySelector('.i-12').value;
    const out12 = document.querySelector('.out-12');
    out12.textContent = i12;
}
btn12.addEventListener('click', () => {
    f12();
})

//TASK13
const i13 = document.querySelector('.i-13')
function f13() {
    const out13 = document.querySelector('.out-13');
    out13.textContent = i13.value;
}
i13.addEventListener('change', () => {
    f13();
})

//TASK14
const btn14 = document.querySelector('.b-14');
function f14() {
    const t14 = document.querySelector('.t-14');
    const out14 = document.querySelector('.out-14');
    out14.textContent = t14.value;
}
btn14.addEventListener('click', () => {
    f14();
})

//TASK15
const btn15 = document.querySelector('.b-15');
function f15() {
    const i15 = document.querySelector('.i-15');
    const t15 = document.querySelector('.t-15');
    const out15 = document.querySelector('.out-15');
    out15.textContent = i15.value;
    t15.textContent = i15.value;
}
btn15.addEventListener('click', () => {
    f15();
})

//TASK16
const btn16 = document.querySelector('.b-16');
btn16.addEventListener('click', () => {
    const out16 = document.querySelector('.out-16');
    const s16 = document.querySelector('.s-16').value;
    out16.textContent = s16;
});

//TASK17
let s17 = document.querySelector('.s-17');
s17.addEventListener('change', () => {
    const out17 = document.querySelector('.out-17');
    s17 = document.querySelector('.s-17').value;
    out17.textContent = s17;
});

//TASK18
let s18 = document.querySelector('.s-18');
s18.addEventListener('change', () => {
    const i18 = document.querySelector('.i-18');
    s18 = document.querySelector('.s-18').value;
    i18.value = s18;
});

//TASK19
const btn19 = document.querySelector('.b-19');
btn19.addEventListener('click', () => {
    let out19 = document.querySelector('.out-19').textContent;
    const i19 = document.querySelector('.i-19');
    i19.value = out19;
});

//TASK20
let s201 = document.querySelector('.s-201');
s201.addEventListener('change', () => {
    s201 = document.querySelector('.s-201').value;
    let s202 = document.querySelector('.s-202');
    s202.value = s201; 
});