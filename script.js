const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filterLbl = document.getElementById('filter');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);

  itemList.appendChild(li);

  resetUI();

  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');

  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.className == 'fa-solid fa-xmark') {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      resetUI();
    }
  }
}

function clearItems() {
  if (confirm('Are you sure?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    };
    resetUI();
  }
}

function resetUI() {
  const items = document.querySelectorAll('li')

  if (items.length === 0) {
    filterLbl.classList.add('clear-ui');
    clearBtn.classList.add('clear-ui');
  } else if (filterLbl.classList.contains('clear-ui')){
    filterLbl.classList.remove('clear-ui');
    clearBtn.classList.remove('clear-ui');
  } 
}

// Event Listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

resetUI();