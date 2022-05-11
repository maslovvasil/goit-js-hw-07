import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(createGalleryItems);

const galleryContainer = document.querySelector(`.gallery`);
const cardsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);


console.log(galleryItems);
function createGalleryItems(galleryItems){
  return galleryItems.map(({ preview, original, description }) => {
    return  `
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
             <img
             class="gallery__image" src="${preview}"
             alt="${description}"
             />
        </a>
    </div> `;
    })
    .join(``);
}

const gallery = new SimpleLightbox('.gallery a', { 
    captionsData: `alt`, captionPosition: 'bottom', captionDelay: `250ms`,
});
gallery.on(`show.simplelightbox`, function () {
     
});
