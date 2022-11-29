/* Imports */
import { addItem, fetchItems } from './fetch-utils.js';

// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const addForm = document.querySelector('#add-form');
const listDiv = document.querySelector('#list-div');

/* Events */
window.addEventListener('load', async () => {
    fetchItems();
});

addForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(addForm);
    const item = data.get('item');
    addForm.reset();

    const newItem = await addItem(item);

    if (newItem) {
        displayItems();
    } else {
        listDiv.textContent = 'There was an error loading your list';
    }
});

/* Display Functions */

async function displayItems() {
    listDiv.innerHTML = '';

    let items = await fetchItems();
    if (items) {
        for (let item of items) console.log(item);
    }
}
