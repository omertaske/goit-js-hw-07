const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener("input" , ()=> {
    const value = inputEl.value.trim();
    outputEl.textContent = value ==="" ? "anonymous" : value ;
});