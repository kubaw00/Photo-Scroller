

document.addEventListener('DOMContentLoaded', () => {

    const imagesContainerEl = document.querySelector('.slider__images-container');
    const img1El = document.querySelector('.slider__image-container--first img');
    const img2El = document.querySelector('.slider__image-container--second img');
   
    const img1ContainerEl = document.querySelector('.slider__image-container--first');
    const img2ContainerEl = document.querySelector('.slider__image-container--second');
    const handleEl = document.querySelector('.slider__handle');
    const dividerEl = document.querySelector('.slider__divider');
    
    let imagesContainerWidth;
    let imagesContainerLeftOffset;
    let dragging = false;

    function getOffset(clientX) {
        const offset = clientX - imagesContainerLeftOffset;
        if (offset < 0) {
            return 0;
        } else if (offset > imagesContainerWidth) {
            return imagesContainerWidth;
        } else {
            return offset;
        }
    }

    function move(clientX) {
        const offset = getOffset(clientX);
        const percent = offset / imagesContainerWidth * 100;
        dividerEl.style.left = `${percent}%`;
        img2ContainerEl.style.width = `${percent}%`;
    }

    
        handleEl.addEventListener('mousedown', (e) => {
            
            dragging = true;
            
        });

        window.addEventListener('mouseup', () => {
            dragging = false;
            
        });

        handleEl.addEventListener('touchstart', () => {
            dragging = true;
        });

        handleEl.addEventListener('touchend', () => {
            dragging = false;
        });

        window.addEventListener('mousemove', e => {
            
            if (dragging) {
                move(e.clientX); 
            }
        });

        window.addEventListener('touchmove', event => {
            if (dragging) {
                move(event.touches[0].clientX);
            }
        });
  

    function adjustImagesSize() {
        imagesContainerWidth = imagesContainerEl.offsetWidth;
        imagesContainerLeftOffset = imagesContainerEl.offsetLeft;
        img1El.style.width = imagesContainerWidth + 'px';
        img2El.style.width = imagesContainerWidth + 'px';
    }

    window.addEventListener('resize', adjustImagesSize);

    adjustImagesSize();

});