// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

export const fetchImageByQuery = query => {
    return fetch(`https://pixabay.com/api/?key={ KEY }&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
.then(response => {
    if(!response.ok){
        throw new Error(response.status);
    }
    return response.json();
});
};
