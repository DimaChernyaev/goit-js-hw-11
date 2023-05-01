import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function modalOpen() {

    let gallery = new SimpleLightbox('.gallery a', { 
        overlayOpacity: 0.3,
        captionSelector: "img",
        captionType: "attr",
        captionDelay: 250,
        captionsData: "alt",
    });

    gallery.refresh();

}
