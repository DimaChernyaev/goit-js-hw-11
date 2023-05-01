export function createMarcupPhoto(arr) {
    const marcup = arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <div class="photo-card">
    <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" class="img-small" loading="lazy"/>
    </a>
        <div class="info">
        <p class="info-item">
            <b>Likes:</b></br>
            <b>${likes}</b>
        </p>
        <p class="info-item">
            <b>Vievs:</b></br>
            <b> ${views}</b>
        </p>
        <p class="info-item">
            <b>Comments:</b></br>
            <b>${comments}</b>
        </p>
        <p class="info-item">
            <b>Dowlands:</b></br>
            <b>${downloads}</b>
        </p>
    </div>

    </div>`).join('');

    return marcup
}

//         <a href="${largeImageURL}"> largeImageURL   </a> для лайтбокс в процесі
