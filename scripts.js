const coffeList = document.getElementById('coffeeList')

function addSingleCoffee(coffe){
    const newListItem = document.createElement('li')
    const newText = document.createTextNode(coffe.title)
    newListItem.appendChild(newText)
    return newListItem
}

function newCoffeeList(listOfCoffees){
    const newList = document.createElement('ul')
    //loop through list of coffees and add each one to the list
    listOfCoffees.forEach(coffee => {
        const thisItem = addSingleCoffee(coffee)
        newList.appendChild(thisItem)
    });
    coffeList.innerText = ''
    coffeList.innerHTML = (newList)
}

function getCoffee(type){
    coffeList.innerText = 'Loading...'
    fetch(`https://api.sampleapis.com/coffee/${type}`)
    // returns a promise
    .then(response => {response.json()})
    .then(data => {console.log(data)})
    // get got our list of coffee - let's out it on the screen
        newCoffeeList(data)
    .catch(err => console.error(err)) 
}