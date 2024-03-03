//TASK1
const btn1 = document.querySelector('.b-1');
btn1.addEventListener('click', () => {
    const out1 = document.querySelector('.out-1');
    out1.style.width = '200px';
    out1.style.height = '90px';
})

//TASK2
function f2() {
    const out2 = document.querySelector('.out-2');
    out2.classList.add('bg-orange');
}
const btn2 = document.querySelector('.b-2');
btn2.addEventListener('click', () => {
    f2();
})

//TASK3
function f3() {
    const out3 = document.querySelector('.out-3');
    out3.classList.remove('bg-orange');
}
const btn3 = document.querySelector('.b-3');
btn3.addEventListener('click', () => {
    f3();
})

//TASK4
function f4() {
    const out4 = document.querySelector('.out-4');
    out4.classList.toggle('bg-orange');
}
const btn4 = document.querySelector('.b-4');
btn4.addEventListener('click', () => {
    f4();
})

//TASK5
function f5() {
    const out4 = document.querySelector('.out-4');
    const out5 = document.querySelector('.out-5');
    out5.textContent = out4.classList.contains('bg-orange');
}
const btn5 = document.querySelector('.b-5');
btn5.addEventListener('click', () => {
    f5();
})

//TASK6
function f6() {
    const out6 = document.querySelector('.out-6');
    const p6 = document.querySelectorAll('.p-6');
    out6.textContent = p6.length;
}
const btn6 = document.querySelector('.b-6');
btn6.addEventListener('click', () => {
    f6();
})

//TASK7
function f7() {
    const out7 = document.querySelectorAll('.out-7');
    out7.forEach((element) => {
        element.classList.add('bg-orange');
    })
}
const btn7 = document.querySelector('.b-7');
btn7.addEventListener('click', () => {
    f7();
})

//TASK8
function f8() {
    const out8 = document.querySelectorAll('.out-8');
    out8.forEach((element) => {
        element.classList.toggle('bg-orange');
    })
}
const btn8 = document.querySelector('.b-8');
btn8.addEventListener('click', () => {
    f8();
})

//TASK9
function f9(element) {
        element.classList.add('bg-orange');
}   
const out9 = document.querySelectorAll('.out-9');
out9.forEach((element) => {
    element.addEventListener('click', () => {
        f9(element);
    })
})

//TASK10
function f10(element) {
    element.classList.toggle('bg-orange');
}   
const out10 = document.querySelectorAll('.out-10');
out10.forEach((element) => {
element.addEventListener('click', () => {
    f10(element);
})
})

//TASK11
function f11(){
    const div11 = document.createElement("div-11");
    div11.textContent=25;
    const out11 = document.querySelector('.out-11');
    out11.append(div11);
}
const btn11 = document.querySelector('.b-11');
btn11.addEventListener('click', () => {
    f11();
})

//TASK12
function f12(){
    const div12 = document.createElement("div-12");
    div12.textContent=12;
    div12.classList.add('bg-12');
    const out12 = document.querySelector('.out-12');
    out12.append(div12);
}
const btn12 = document.querySelector('.b-12');
btn12.addEventListener('click', () => {
    f12();
})

//TASK13
    const out131 = document.querySelector('.out-13-1');
function f13_1(element13){
    out131.append(element13);
}
function f13(){
    const div13 = document.createElement("div-13");
    div13.classList.add('bg-orange');
    div13.textContent='push me';
    const out13 = document.querySelector('.out-13');
    out13.append(div13);
    div13.addEventListener('click', ()=>{
        f13_1(div13);
    })
}
const btn13 = document.querySelector('.b-13');
btn13.addEventListener('click', () => {
    f13();
})

//TASK14
function f14(){
    const div14 = document.createElement("div-14");
    div14.classList.add('bg-orange');
    div14.textContent='14';
    const out14 = document.querySelector('.out-14');
    out14.append(div14);
}
const btn14 = document.querySelector('.b-14');
btn14.addEventListener('click', () => {
    f14();
})

//TASK15
function f15(){
    const div15 = document.createElement("div-15");
    div15.classList.add('bg-orange');
    div15.textContent='15';
    const out15 = document.querySelector('.out-15');
    out15.before(div15);
}
const btn15 = document.querySelector('.b-15');
btn15.addEventListener('click', () => {
    f15();
})

//TASK16
function f16(){
    const div16 = document.createElement("div-16");
    div16.classList.add('bg-orange');
    div16.textContent='16';
    const out16 = document.querySelector('.out-16');
    out16.after(div16);
}
const btn16 = document.querySelector('.b-16');
btn16.addEventListener('click', () => {
    f16();
})

//TASK17
function f17(){
    const div17 = document.createElement("div-17");
    div17.classList.add('bg-orange');
    div17.textContent='17';
    const out17 = document.querySelector('.out-17');
    out17.replaceWith(div17);
}
const btn17 = document.querySelector('.b-17');
btn17.addEventListener('click', () => {
    f17();
})

//TASK18
function f18(){
    const p18 = document.querySelector(".p-18");
    const out18 = document.querySelector('.out-18');
    out18.textContent = p18.getAttribute('data-b');
}
const btn18 = document.querySelector('.b-18');
btn18.addEventListener('click', () => {
    f18();
})

//TASK19
function f19(){
    const p19 = document.querySelectorAll(".p-19");
    const out19 = document.querySelector('.out-19');
    p19.forEach((element19)=>{
        out19.textContent = out19.textContent + element19.getAttribute('data-b')+' ';
    })
}
const btn19 = document.querySelector('.b-19');
btn19.addEventListener('click', () => {
    f19();
})

//TASK20
function f20(){
    const out20 = document.querySelector('.out-20');
    out20.setAttribute('title','go');
}
const btn20 = document.querySelector('.b-20');
btn20.addEventListener('click', () => {
    f20();
})