import { galleryItems } from './gallery-items.js';
// Change code below this line


// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.    +
// Реализация делегирования на div.gallery и получение url большого изображения.                             +
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и 
// добавь в проект ссылки на минифицированные (.min) файлы библиотеки.                                       +
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.  +
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку 
// модального окна с изображением из примеров библиотеки basicLightbox.                                      +


const gallaryContainer = document.querySelector('.gallery');
const imgMarkup = createGalleryMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML('beforeend', imgMarkup)

gallaryContainer.addEventListener('click', onImageClick);

function createGalleryMarkup(galleryItems){
    return galleryItems.map(({ preview, original, description }) => { 
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>`;
    }).join('');
};

function onImageClick(e){
    e.preventDefault();
    const targetImg = e.target.classList.contains('gallery__image');

    if (!targetImg) {
            return;
        } 
        const urlImg = e.target.dataset.source;
        
        const bigPicture = basicLightbox.create(`<img src="${urlImg}">`);
        bigPicture.show(() => window.addEventListener('keydown', onKeyDown));
        
        function onKeyDown(e) {
            if (e.key === 'Escape') {
                bigPicture.close(() => window.removeEventListener('keydown', onKeyDown));
                return;
            }
            return;
        };
        
};
