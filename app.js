/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const addForm = document.querySelector('#add-form');

/* Events */

addForm.addEventListener('click', (e) => {
    e.preventDefault();
});

/* Display Functions */
