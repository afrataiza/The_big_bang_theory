const saveButton = document.querySelector('#save-button');
const cardsContainer = document.querySelector('#card-container');
const errorMessage = document.querySelector('#error-message');
const nameInput = document.querySelector('#name');
const imageInput = document.querySelector('#image');
const descriptionInput = document.querySelector('#description');
const memoryInput = document.querySelector('#memory');


function createCard(character) {
  const div = document.createElement('div');
  div.classList.add('w-56', 'bg-[#265F7D]', 'p-2', 'rounded-xl', 'h-80');

  const cardImage = document.createElement('img');
  cardImage.src = character.urlImage;
  cardImage.alt = character.name;
  cardImage.classList.add('w-[208px]', 'h-[140px]', 'rounded-[10px]', 'object-cover');
  div.appendChild(cardImage);

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('font-bold', 'text-center', 'mt-2');
  cardTitle.innerText = character.name;
  div.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('text-xs', 'text-left', 'px-1', 'mt-1');
  cardDescription.innerText = character.description;
  div.appendChild(cardDescription);

  cardsContainer.appendChild(div);
}

function resetModal() {
    errorMessage.innerText = ''
    nameInput.value = ''
    imageInput.value = ''
    descriptionInput.value = ''
}

function verification() {
  const verifyLength =
    nameInput.value.length > 3 &&
    descriptionInput.value.length > 3;

  const isEmpty = 
    nameInput.value.trim().length > 0 &&
    imageInput.value.trim().length > 0 &&
    descriptionInput.value.trim().length > 0;

  if (verifyLength && isEmpty) {
    saveButton.removeAttribute('disabled');
  } else {
    saveButton.setAttribute('disabled', true);
  }
}

function saveCharacter() {
  const character = {
    name: nameInput.value,
    urlImage: imageInput.value,
    description: descriptionInput.value,
  };

  createCard(character);
  if (memoryInput.checked) {
    localStorage.setItem('character', JSON.stringify(character));
  }
  resetModal();
  saveButton.setAttribute('disabled', true); 
}

const character = JSON.parse(localStorage.getItem('character'));
if (character) {
  createCard(character);
}

nameInput.addEventListener('input', verification);
imageInput.addEventListener('input', verification);
descriptionInput.addEventListener('input', verification);
saveButton.addEventListener('click', saveCharacter);
