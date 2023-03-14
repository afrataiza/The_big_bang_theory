const saveButton = document.querySelector('#save-button');
const cardsContainer = document.querySelector('#card-container');

function createCard(character) {
    const div = document.createElement('div');
    div.classList.add('w-56', 'bg-[#265F7D]', 'p-2', 'rounded-xl', 'h-80');

    const cardImage = document.createElement('img');
    cardImage.src = character.urlImage;
    cardImage.alt = character.name;
    cardImage.classList.add('w-[208px]', 'h-[140px]', 'rounded-[10px]');
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

function saveCharacter() {
    const nameInput = document.querySelector('#name');
    const imageInput = document.querySelector('#image');
    const descriptionInput = document.querySelector('#description');
    const memoryInput = document.querySelector('#memory');

    const character = {
        name: nameInput.value,
        urlImage: imageInput.value,
        description: descriptionInput.value
    }
    const verification = nameInput.value.length > 0 && imageInput.value.length > 0 && descriptionInput.value.length > 0;

    if (verification) {
        createCard(character);
    }
    
    if (memoryInput) {
       localStorage.setItem('character', JSON.stringify(character));
    }
}

window.onload = () => {
   const character = JSON.parse(localStorage.getItem('character'));
   if(character) {
    createCard(character);
   }
}

saveButton.addEventListener('click', saveCharacter);