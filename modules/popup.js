const togglePopUp = () => {
            const popup = document.querySelector('.popup'),
                  popupBtn = document.querySelectorAll('.popup-btn'),
                  popupClose = document.querySelector('.popup-close'),
                  popupContent = document.querySelector('.popup-content');
                  
                  popupBtn.forEach( item => item.addEventListener('click', () => { 
                      popup.style.display = 'block';
                      animate();
                 }) 
            );
                  popupClose.addEventListener('click', (event) => { 
                      event.stopPropagation();   
                      popup.style.display = 'none' } );
                  popup.addEventListener('click', () => { popup.style.display = 'none' } );
                  popupContent.addEventListener('click', (event) => { 
                      event.stopPropagation();  
                      popup.style.display = 'block' });

            // Animation
            let count = 0,
                interval;
            const animate = () => {
                if (window.innerWidth > 612) {
                    interval = requestAnimationFrame(animate);
                    count +=5;
                    if (count < 175) {
                        popupContent.style.top = count + 'px';
                    } else {
                        cancelAnimationFrame(interval);
                        count = 0;
                    }
                } else {
                    cancelAnimationFrame(interval);
                }
            };
        };

export default togglePopUp;