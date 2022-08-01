import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.   +
// Используй готовый код из первого задания.                                                                +
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.                                      +
// Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.               +
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery.              +
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».        +
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.   +
// Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.                 +

const gallaryContainer = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__card">
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>`;
    }).join('');
};

gallaryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const captionImg = new SimpleLightbox('.gallery__item', { captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
