import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(createGalleryItems);

const galleryContainer = document.querySelector(`.gallery`);
const cardsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);

galleryContainer.addEventListener(`click`, onGalleryContainerlick);
  
function createGalleryItems(galleryItems){
  return galleryItems.map(({ preview, original, description }) => {
    return  `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img 
          class="gallery__image" src="${preview}"
          data-source="${original}" alt="${description}"
        />
      </a>
    </div> `;
    })
    .join(``);
}

function onGalleryContainerlick(evt) {
  evt.preventDefault();
  console.log(evt.target);
  const imgBig = evt.target.classList.contains(`gallery__image`);
  if (!imgBig) {
    return;
  }
  const imgValue = evt.target;
  let perentImage = imgValue.closest(`.gallery__image`);

  perentImage = basicLightbox.create(`
  <img width="1280" height="800" src="${perentImage.dataset.source}">`).show()
}

//   document.addEventListener('keydown', function(e) {
// if (e.key === 'Escape') {
// //ваша функция закрытия окна
// hideModal(perentImage)
// }
// });