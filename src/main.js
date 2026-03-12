import {getImagesByQuery} from "./js/pixabay-api.js";
import {createGallery} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.form');
const text = document.querySelector('.form input');
const submit = document.querySelector('button[type="submit"]');
submit.disabled = true;

text.addEventListener("input", e => {
    if (e.currentTarget.value.trim() !== "") submit.disabled = false;
    else submit.disabled = true;
});

form.addEventListener("submit", e => {
    e.preventDefault();
    getImagesByQuery(text.value)
        .then(res => {
            console.log(res.data.hits)
            if (res.data.hits.length === 0){
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else createGallery(res.data.hits);
        })
        .catch(err => console.error(err));
});