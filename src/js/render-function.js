// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.
export const createGalleryCard = ({ tags, urls: { webformatURL } }) => {
    return `
    <li class="gallery-item">
    <a class=""gallery-link" href="${largeImageURL}"

      <img src="${webformatURL}" alt="${tags}" class="gallery-img" />
    </li>
    <ul class="item-info">
    <li class="item-likes">
    <p class="title">Likes</p>
    <p class="value">${likes}</p>
    </li>
    li class="item-views">
    <p class="title">Views</p>
    <p class="value">${views}</p>
     </li>
     <li class="item-comments">
    <p class="title">Comments</p>
    <p class="value">${comments}</p>
    </li>
 <li class="item-downloads">
 <p class="title">Downloads</p>
<p class="value">${downloads}</p>
    </li>
    </ul>
    `;
  };