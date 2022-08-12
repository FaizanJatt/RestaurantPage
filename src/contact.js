function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 420 69 69 69'
  
    const address = document.createElement('p')
    address.textContent = '🏠 4778 Heavner Avenue, Georgia, USA'
  
    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'images/address.png'
    
  
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
  
    return contact
  }
  
  function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default loadContact