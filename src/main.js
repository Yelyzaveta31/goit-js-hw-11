

import { createGalleryCard } from "./js/render-function";
import { fetchImageByQuery } from "./js/pixabay-api";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.search-form');

const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const searchFormSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.user_image.value.trim();
    if (searchQuery === '') {
        gallery.innerHTML = '';
        iziToast.warning({
            title: 'Caution',
            message: 'Please enter a search query',
            position: 'topRight',
            timeout: 2000,
        });
        event.target.reset();
        return;
    }

   loaderEl.classList.add('is-visible');
  
fetchImageByQuery(searchQuery)
.finally(()  => {
    loaderEl.classList.remove('is-visible')
})
.then(data => {
    if (data.hits.length === 0) {
        gallery.innerHTML = '';
        event.target.reset();
        iziToast.error({
                title: 'Error',
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: 'topRight',
                maxWidth: '432px',
                timeout: 3000,
        
        });
    }
    else{
    const imageTemplate = data.hits.map(image => createGalleryCard(image)).join('');
        gallery.innerHTML = imageTemplate;
        lightbox.refresh();}
})
.catch(error => {
    iziToast.error({
        title: 'Error',
        message: "Sorry, there are no images matching your search query. Please try again!",   
       position: 'topRight',
       maxWidth: '432px',
       timeout: 3000,
})
        console.log(error);
});
};

searchForm.addEventListener('submit', searchFormSubmit);


const lightbox = new SimpleLightbox('.gallery a');
