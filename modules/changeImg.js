const changeImg = () => {
        let img = document.querySelectorAll('.command__photo');
            img.forEach( (item) =>  {
                let srcImg = item.src;
                item.addEventListener('mouseover', () => {
                    item.src = item.getAttribute('data-img');
                });
                item.addEventListener('mouseout', () => {
                    item.src = srcImg;
                });
            }); 
    };

export default changeImg;