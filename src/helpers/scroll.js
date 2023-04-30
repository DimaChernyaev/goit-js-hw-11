export function scroll(gallery) {
    console.log('hhh');
    const { height: cardHeight } = gallery
    .firstElementChild.getBoundingClientRect();

window.scrollBy({   
    top: cardHeight * 2,
    behavior: "smooth",
})
}