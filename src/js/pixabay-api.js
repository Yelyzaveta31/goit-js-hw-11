// У файлі pixabay-api.js зберігай функції для HTTP-запитів.


export function fetchImageByQuery(query) {
return fetch(`https://pixabay.com/api/?key=43329687-8aa5e523ea6ec5a66d8459b66&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
.then(response => {
    if(!response.ok){
        throw new Error(response.status);
    }
    return response.json();
});
}
