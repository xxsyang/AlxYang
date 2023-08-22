let scrollToTop = () => {
    let scrollButton = document.getElementById('.scroll-top');
    let pos = document.documentElement.scrollTop;
    if(pos > 0) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

window.onscroll = scrollToTop;
window.onload = scrollToTop;