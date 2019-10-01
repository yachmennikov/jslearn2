 const slider = () => {
            const slide = document.querySelectorAll('.portfolio-item'),
                  btn = document.querySelectorAll('.portfolio-btn'),
                  dots = document.querySelector('.portfolio-dots'),
                  slider = document.querySelector('.portfolio-content');
                
                  

            let currentSlide = 0,
                interval;

            const prevSlide = (elem, index, strClass) => {
                elem[index].classList.remove(strClass);
                
            };

            const nextSlide = (elem, index, strClass) => {
                elem[index].classList.add(strClass);
            };

            const addDotes = () => {
                for (let i = 0; i < slide.length; i++) {
                    let dot = document.createElement('li');
                    dot.className = 'dot';
                    if (i === 0) {
                        dot.classList.add('dot-active');
                    }
                    dots.appendChild(dot);
                   
                }
               
            };
            addDotes();
            let allDotes = document.querySelectorAll('.dot');
           

            const replaySlider = () => {
                if (currentSlide >= slide.length) {
                    currentSlide = 0;
                } else if (currentSlide < 0) {
                    currentSlide = slide.length - 1;
                }
            };
           
            const autoPlay = () => {
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(allDotes, currentSlide, 'dot-active');
                currentSlide++;
                replaySlider();
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(allDotes, currentSlide, 'dot-active');
               
            };

            const startSlider = (time = 5000) => {
                interval = setInterval(autoPlay, time);
            };

            const stopSlider = () => {
                clearInterval(interval)
            };

            slider.addEventListener('click', (event) => {
                event.preventDefault();
                let target = event.target;
               
               if (!target.matches('.portfolio-btn, .dot')) {
                   return;
               };

                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(allDotes, currentSlide, 'dot-active');
                if ( target.matches('#arrow-right') ) {
                    currentSlide++;
                    replaySlider();
                } else if ( target.matches('#arrow-left') ) {
                    currentSlide--;
                    replaySlider() 
                } 
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(allDotes, currentSlide, 'dot-active'); 
            });

            slider.addEventListener('mouseover', (event) => {
                if(event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                    stopSlider();
                }
            });
            slider.addEventListener('mouseout', (event) => {
                if(event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                    startSlider();
                }
            });

            startSlider(5000);
           
};

export default slider;