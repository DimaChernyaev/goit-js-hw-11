export function scroll(gallery) {
    const { height: cardHeight } = gallery
    .firstElementChild.getBoundingClientRect();

window.scrollBy({   
    top: cardHeight * 1.5,
    behavior: 'smooth',
})
}