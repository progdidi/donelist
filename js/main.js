const notesBtn = document.querySelector('.notes__btn');
const notes = document.querySelector('.notes__content');
const done = document.querySelector('.done');

notesBtn.addEventListener('click', () => {
    notes.classList.toggle('show');
    done.classList.toggle('show');
})