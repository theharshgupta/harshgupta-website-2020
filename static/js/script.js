const cssRules = document.getElementById('gradient-styles').sheet.cssRules;
const selectors = [];
const htmlClassList = document.documentElement.classList;
let i = 0, j = cssRules.length;
for (; i < j; i++) {
    selectors.push(cssRules[i].selectorText.replace('.', ''));
}

function setRandomGradient() {
    const randomSelector = selectors[Math.floor(Math.random() * selectors.length)];
    htmlClassList.remove.apply(htmlClassList, selectors);
    htmlClassList.add(randomSelector);
}
setRandomGradient();