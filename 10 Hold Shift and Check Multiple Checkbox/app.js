const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;


function handleCheck(e) {
    // check if they had the shift key down
    // AND check that they are checking it

    let inBetween = false;
    if(e.shiftKey && this.checked) {
        // go ahead and do what we please

        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('starting check')
            }

            if(inBetween) {
                checkbox.checked = true;
            }

        })
    }
    lastChecked = this;
}


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click',handleCheck);
})



// when you check any checkbox first store that in a variable 
// so that when you check next one by pressing shift you can get from where you have to select all