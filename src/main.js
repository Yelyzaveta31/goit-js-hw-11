// У файлі main.js напиши всю логіку роботи додатка.

import { createGalleryCard } from "./js/render-function";
import { fetchImageByQuery } from "./js/pixabay-api";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconError from './img/icon-error.svg';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

const searchFormSubmit = event => {
    event.preventDefault();

    const searchQuery = event.target.elements.user_image.value;


fetchImageByQuery(searchQuery)
.then(data => {
    const imageTemplate = data.map(image => createGalleryCard(image))
        const stringImage = imageTemplate.join('');
        
        gallery.innerHTML(stringImage);
})
.catch(error => {
    console.log(error);
});
};

searchForm.addEventListener('submit', searchFormSubmit);

// const checkEmptyInput = searchQuery => {
//     if (searchQuery.trim() === '') {

        
//     }
// }


// iziToast.error({
// title: 'Error',
// message: `❌ Rejected promise in ${delay}ms`,
// backgroundColor: '#ef4040',
// theme: 'dark',
// color: 'red',
// iconUrl: iconError,
// position: 'topRight',
// }); 