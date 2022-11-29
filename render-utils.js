export function renderItems(item) {
    const divEl = document.createElement('div');
    const itemP = document.createElement('p');

    itemP.textContent = item.item;

    divEl.append(itemP);
    return divEl;
}
