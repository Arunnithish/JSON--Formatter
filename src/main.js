const inputArea = document.querySelector('.input-text-area');
const outputArea = document.querySelector('.output-text-area');
const btnFormat = document.querySelector('.format');
const btnMinify = document.querySelector('.minify');

btnFormat.addEventListener('click',()=>{
    const formatted = JSON.stringify(JSON.parse(inputArea.value),null,4);

    outputArea.value = formatted;
});

btnMinify.addEventListener('click',()=>{
    const minified = JSON.stringify(JSON.parse(inputArea.value));

    outputArea.value = minified;
});



