document.getElementById('addItemButton').addEventListener('click', addItem);
document.getElementById('itemInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        const itemSpan = document.createElement('span');
        itemSpan.textContent = itemText;

        const buttonGroup = document.createElement('div');

        const boughtButton = document.createElement('button');
        boughtButton.className = 'btn btn-success btn-sm ml-2';
        boughtButton.textContent = 'Bought';
        boughtButton.addEventListener('click', function() {
            listItem.classList.toggle('bought');
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm ml-2';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        buttonGroup.appendChild(boughtButton);
        buttonGroup.appendChild(deleteButton);

        listItem.appendChild(itemSpan);
        listItem.appendChild(buttonGroup);

        document.getElementById('groceryList').appendChild(listItem);
        itemInput.value = '';
        itemInput.focus();
    }
}