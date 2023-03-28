const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    // console.log(this.value);
    const suffix = this.dataset.sizing || '';
    // dataset in an object that contains all the data attributes for specific elements like data-name,data-anything etc
    // you can name anything you want 
    
    // console.log(this.name);

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate))