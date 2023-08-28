let scrollInfo = document.querySelector('.div-yellow');

window.addEventListener('scroll', () => {
    let infoText = 'X = ' + window.scrollX;
    infoText += ', Y = ' + window.scrollY;
    scrollInfo.innerHTML = infoText;
});