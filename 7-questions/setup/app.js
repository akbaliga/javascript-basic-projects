//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        questions.forEach(q => {
            if (q !== question) {
                q.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    });
});



// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget &&  e.currentTarget.parentElement && e.currentTarget.parentElement.parentElement;
//         if (question) {
//             question.classList.toggle('show-text');
//         }
//     })
// })