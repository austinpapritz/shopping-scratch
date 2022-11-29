/* Imports */
import { addItem } from './fetch-utils.js';

// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const addForm = document.querySelector('#add-form');
const addIn = document.querySelector('#add-input');
const addBtn = document.querySelector('#add-btn');

/* Events */

addForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(addForm);
    const item = data.get('item');
    addForm.reset();

    await addItem(item);
});

/* Display Functions */
