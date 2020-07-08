// Your code goes here

const buttons = document.querySelectorAll('.btn')
const welcomeText = document.querySelector('.intro h2')
const body = document.querySelector('body')
const busPic = document.querySelector('.intro img')
const firstPara = document.querySelector('.intro p')
const head = document.querySelector('title');


function alertClick(){
    alert('I was clicked');
}

buttons[0].addEventListener('click',() => {
    buttons[0].textContent = "Ouch!";
});
buttons[0].addEventListener('mouseover',() => {
    buttons[1].textContent = 'Over Here!'
});
buttons[1].addEventListener('click',() => {
    buttons[1].textContent = "That!";
});
buttons[2].addEventListener('click',() => {
    buttons[2].textContent = "Hurts!";
});
window.addEventListener('load',() => {
    welcomeText.textContent = "Hello There!";
});
document.addEventListener('keydown', function(e){
    body.classList.add('none');
    head.textContent = "Secret text"; 
})
document.addEventListener('keyup', function(e){
    body.classList.remove  ('none')
    head.textContent = "Fun Bus Travel Agency "; 
})
busPic.addEventListener('click', () => {
    busPic.classList.add('none')
})
document.addEventListener('scroll', () => {
    busPic.classList.remove('none')
})
window.addEventListener('resize', () => {
    firstPara.textContent = "Did you ever hear the Tragedy of Darth Plagueis the Wise? No. I thought not. It’s not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. He could actually save save people from death? The dark side of the Force is a pathway to many abilities some consider to be unnatural. What happened to him? He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself."
})
window.addEventListener('mouseout', () => {
    head.textContent = "Come back";
})
window.addEventListener('mouseenter', () => {
    head.textContent = "Thank you";
})
let counter = 0
document.addEventListener('mousemove', () =>{
    if (counter < 1 ){
    alert('Dont Move!');
    counter ++;
    }
})