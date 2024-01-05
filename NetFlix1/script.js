const Questions = document.querySelectorAll('.Questions')
Questions.forEach((e) => {
    const SpandIcon = e.querySelector('.SpandIcon');
    const answer = e.querySelector('.answer');
    SpandIcon.addEventListener('click', () => {
        e.classList.toggle('active');
        // console.log(e)
        if (answer.style.display == "block") {
            answer.style.display = "none"
        }
        else {
            answer.style.display = "block";
        }

    })
})