const multiply = (x, y, z) => { return x * y * z}

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithMultiply = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#Length').checkValidity() && document.querySelector('#Breadth').checkValidity() && document.querySelector('#Height').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guest').value.replace(regex, '')
    const i = parseInt(document.querySelector('#Length').value)
    const j = parseInt(document.querySelector('#Breadth').value)
    const k = parseInt(document.querySelector('#Height').value)
    const ans = `${s}, your product is ${multiply(i, j, k)}.`
    document.querySelector('#result').innerHTML = ans
  }
}

// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'Length') ||
    (event.target && event.target.id === 'Breadth')
    (event.target && event.target.id === 'Height')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'multiplyButton') { updateWithMultiply(event) }
})


