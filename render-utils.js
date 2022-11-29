export function renderItems(item) {
    const divEl = document.createElement('div');
    const itemP = document.createElement('p');

    if (item.checked) {
        itemP.classList.add('checkmark');
    } else {
        itemP.classList.add('x');
    }

    divEl.classList.add('card');
    itemP.textContent = item.item;

    divEl.append(itemP);
    return divEl;
}
