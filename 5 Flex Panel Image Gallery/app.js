const panels = document.querySelectorAll('.panel');
console.log(panels);

function toggleOpen(e) {
    this.classList.toggle('open');
}

function toggleActive(e) {
    // console.log(e);
    if(e.propertyName.includes('flex')) { // includes because some browser use 'flex' or 'flex-growth' to remove or conditionn we use includes
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));