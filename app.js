const ratingCard = document.querySelector('.ratings-container')
const thankCard = document.querySelector('.thank-you-container')
const submitButton = document.querySelector('rating')
const rating = document.getElementById('ratings')
const ratingNumber = document.querySelectorAll('.btn')

submitButton.addEventListener('click', () => {
    thankCard.classList.remove('hidden');
    ratingCard.computedStyleMap.display = "none"
})

ratingNumber.forEach((rates) => {
    rates.addEventListener('click', () => {
        ratings.innerHTML = rates.innerHTML
    })
})