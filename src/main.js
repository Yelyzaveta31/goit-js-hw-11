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
    if (searchQuery === '') {
        alert('Please enter a search query');
        return;
    }

  
fetchImageByQuery(searchQuery)
.then(data => {
    if (data.hits.length === 0) {
        iziToast.error({
                title: 'Error',
                message: "Sorry, there are no images matching your search query. Please try again!",
                backgroundColor: '#ef4040',
                theme: 'dark',
                color: 'red',
                iconUrl: iconError,            position: 'topRight',
        
        });
    }
    else{
    const imageTemplate = data.hits.map(image => createGalleryCard(image)).join('');
        gallery.innerHTML = imageTemplate;}
})
.catch(error => {
    iziToast.error({
        title: 'Error',
        message: "Sorry, there are no images matching your search query. Please try again!",
        backgroundColor: '#ef4040',
        theme: 'dark',
        color: 'red',
        iconUrl: iconError,     
       position: 'topRight',
})
        console.log(error);
});
};

searchForm.addEventListener('submit', searchFormSubmit);


