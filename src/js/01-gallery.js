// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryPicturec = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
  });
}
galleryPicturec.insertAdjacentHTML('beforeend', galleryMarkup.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

document.addEventListener('keydown', handleKeyDown);
function handleKeyDown(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', handleKeyDown);
  }
}

console.log(galleryItems);
