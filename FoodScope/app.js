const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// Select the form and the container for submitted reviews
const reviewForm = document.getElementById('reviewForm');
const submittedReviewsContainer = document.querySelector('.submittedReviews');

// Function to handle form submission
reviewForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const restaurantName = document.getElementById('restaurantName').value;
    const reviewContent = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

    // Create a new review element
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `
        <h3>${restaurantName}</h3>
        <p>${reviewContent}</p>
        <p>Rating: ${rating}</p>
    `;

    // Append the new review to the container
    submittedReviewsContainer.appendChild(newReview);

    // Reset the form after submission
    reviewForm.reset();
});