import {getImagesByQuery} from "./js/pixabay-api.js";
import {createGallery} from "./js/render-functions.js";
import {showLoader} from "./js/render-functions.js";
import {hideLoader} from "./js/render-functions.js";
import {clearGallery} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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
    showLoader();
    clearGallery();
    getImagesByQuery(text.value)
        .then(res => {
            console.log(res.hits);
            if (res.hits.length === 0){
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                createGallery(res.hits);
            }
            hideLoader();
        })
        .catch(err => {
            hideLoader();
            console.error(err)
            iziToast.error({
                message: 'An error occurred while trying to fetch images',
            });
        });
});