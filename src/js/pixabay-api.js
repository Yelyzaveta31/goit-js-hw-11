const  BASE_URL = 'https://pixabay.com';
const API_KEY = '43329687-8aa5e523ea6ec5a66d8459b66';

export function fetchImageByQuery(query) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        orientation: 'horizontal',
        safesearch: 'true',
        image_type: 'photo',
    });

return fetch(`${BASE_URL}/api/?${searchParams}`)
.then(response => {
    if(!response.ok){
        throw new Error(response.status);
    }
    return response.json();
})
.catch(error => {
    console.error(error);
});
};
