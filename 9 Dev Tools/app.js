const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular

    console.log('hello')

    // Interpolated

    console.log('Hello you are a %s string!','👦') // it will put the value in %s area, same as we use $ in ``.

    // Styled

    // %c use to do style
    console.log('%c I am a great text','font-size:50px; background:red;text-shadow:0 0 10px rgba(0,0,0,1')

    // warning!

    console.warn("OH NOO!")

    // Error :|

    console.error('Shit!')

    // Info

    console.info('Crocodiles eat 3-4 people per year')

    // Testing

    // it is use to test for somthing and if it is wrong it will throw this message else do not throw

    console.assert(1 === 1,'That is wrong')

    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'),'That is wrong! there is nothing a class like this')

    // clearing

    console.clear() // clear the console

    // Viewing DOM Elements

    console.log(p);
    console.dir(p); // gives a dropdown of properties

    // Grouping together

    dogs.forEach(dog => {
      console.group(`${dog.name}`) 
      console.log(`${dog.name} is ${dog.age} year old`)
      console.groupEnd(`${dog.name}`)
    })

    // or

    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`) 
      console.log(`${dog.name} is ${dog.age} year old`)
      console.groupEnd(`${dog.name}`)
    })

    // counting

    console.count('Wes');
    console.count('Wes');
    console.count('Steve')
    console.count('Steve')
    console.count('Wes');
    console.count('Wes');
    console.count('Steve')
    console.count('Steve')
    console.count('Steve')
    console.count('Steve')
    console.count('Wes');
    console.count('Steve')
    console.count('Steve')
    console.count('Steve')
    console.count('Steve')

    // timing

    // it will tell how much time take to execute something

    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data')
        console.log(data);
      })

  // table 

  console.table(dogs);

