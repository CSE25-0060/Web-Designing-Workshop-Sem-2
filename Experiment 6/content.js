function location.reload (){


const heading = document.getElementById('mainHeading');
const paragraph = document.getElementById('para');
const inputField = document.getElementById('textInput');
const changeTextBtn = document.getElementById('changeTextBtn');
const changeBgColorBtn = document.getElementById('changeBgColorBtn');
const increaseFontBtn = document.getElementById('increaseFontBtn');
const showHideParaBtn = document.getElementById('shoeHideParaBtn');

const defaultHeading = heading.textContent;
const defaultBg = document.body.style.backgroundColor;

changeTextBtn.addEventListener('click',()=> {
    const newText = inputField.ariaValueMax.trim();
    if (newText !==''){
        heading.textContent = newText;
        inputField.value = '';
    }
    else{
        alert ('Please enter some text!');
    }
});

changeBgColorBtn.addEventListener('click',()=> {
    const colors = ['#FF5733','#33FF57','#3357FF','#F333FFF','#33FFF5','#F5FF33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

increaseFontBtn.addEventListener('click',() => {
    const currentSize = window.getComputedStyle(heading).fontSize;
    const newSize = parseFloat(currentSize) + 2;
    heading.style.fontSize = newSize + 'px';
});

showHideParaBtn.addEventListener('click',() => {
    if (paragraph.style.display === 'none'){
        paragraph.style.display = 'block';
    }
    else{
        paragraph.style.display = 'none';
    }
});

const resetBtn = document.querySelector('button[onclick="location.reload()"]');
resetBtn.addEventListener('click',() => {
    heading.textContent = defaultHeading;
    heading.style.fontSize = '26px';
    document.body.style.backgroundColor = defaultBg;
    paragraph.style.display = 'block';
    inputField.value = '';
});

}