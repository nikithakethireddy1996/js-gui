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
  if (document.querySelector('#studentsPerCourse').checkValidity() && document.querySelector('#coursesPerTerm').checkValidity() && document.querySelector('#countOfTerms').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guest').value.replace(regex, '')
    const i = parseInt(document.querySelector('#studentsPerCourse').value)
    const j = parseInt(document.querySelector('#coursesPerTerm').value)
    const k = parseInt(document.querySelector('#countOfTerms').value)
    const ans = `${s}, your product is ${multiply(i, j, k)}.`
    document.querySelector('#result').innerHTML = ans
  }
}

// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'studentsPerCourse') ||
    (event.target && event.target.id === 'BcoursesPerTerm')
    (event.target && event.target.id === 'countOfTerms')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'multiplyButton') { updateWithMultiply(event) }
})


