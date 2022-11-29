/* Imports */
import { addItem, fetchItems } from './fetch-utils.js';

// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { renderItems } from './render-utils.js';

/* Get DOM Elements */
const addForm = document.querySelector('#add-form');
const listDiv = document.querySelector('#list-div');

const deleteBtn = document.querySelector('#delete-btn');

/* Events */
window.addEventListener('load', async () => {
    fetchItems();
    displayItems();
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

deleteBtn.addEventListener('click', async () => {
    console.log('click');
});

/* Display Functions */

async function displayItems() {
    listDiv.innerHTML = '';

    let items = await fetchItems();
    if (items) {
        for (let item of items) {
            const itemEl = renderItems(item);
            listDiv.append(itemEl);
        }
    }
}
