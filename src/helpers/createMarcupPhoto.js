export function createMarcupPhoto(arr) {
    const marcup = arr.map(({ webformatURL, tags, likes, views, comments, downloads }) => `
    <div class="photo-card">

        <img src="${webformatURL}" alt="${tags}" class="img-small" loading="lazy"/>
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

//         <a href="${largeImageURL}"></a>
