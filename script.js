class Contact {
    constructor(name, phone, email){
        this.name = name
        this.phone = phone
        this.email = email
    }
}
class Place {
    constructor(location, timeOfyear,notes){
        this.location = location
        this.timeOfyear = timeOfyear
        this.notes = notes
    }
}
const contacts = []
const places = []

document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault()
    const nameInput = document.getElementById('name').value
    const phoneInput = document.getElementById('phone').value
    const emailInput = document.getElementById('email').value

    const newContact = new Contact(nameInput, phoneInput, emailInput)
    contacts.push(newContact)

    displayContact()
    this.reset()
})

document.getElementById('place-form').addEventListener('submit', function(event){
    event.preventDefault()
    const locationInput = document.getElementById('location').value
    const timeOfyearInput = document.getElementById('timeOfyear').value
    const notesInput = document.getElementById('notes').value

    const newPlace = new Place (locationInput, timeOfyearInput, notesInput)
    places.push(newPlace)

    displayPlaces()
    this.reset()
})
function displayContact(){
    const contactList = document.querySelector('.contact-list')
    constactsList.innerHTML = ''

    contacts.forEach((contacts) => {
        const contactDiv = document.createElement('div')
        contactDiv.classList.add('contact')
        contactDiv.innerHTML = `
        <h3>${contact.name}</h3>
        <p>Phone: ${contact.phone}</p>
        <p>Email: ${contact.email}</p>
        `
        contactList.appendChild(contactDiv)
    })
}

function displayPlaces() {
    const placesList = document.querySelector('.place-list')
    placesList.innerHTML = ''

    places.forEach((place) => {
        const placeDiv = document.createElement('div')
        placeDiv.classList.add('place')
        placeDiv.innerHTML = `
        <h3>${place.location}</h3>
        <p>Time of Year: ${place.timeOfyear}</p>
        <p>Notes: ${place.notes}</p>
        `
        placesList.appendChild(placeDiv)
    })
}