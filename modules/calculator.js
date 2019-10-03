const calc = (price = 100) => {
       const calcBlock = document.querySelector('.calc-block'),
             calcType = document.querySelector('.calc-type'),
             calcSquare = document.querySelector('.calc-square'),
             calcDay = document.querySelector('.calc-day'),
             calcCount = document.querySelector('.calc-count'),
             totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1,
                typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

                if (calcCount.value > 1) {
                    countValue += (calcCount.value - 1) / 10;
                };

                if (calcDay && calcDay.value < 5) {
                    dayValue *= 2;
                } else if (calcDay && calcDay.value < 10) {
                    dayValue *= 1.5;
                }

                if (typeValue && squareValue) {
                    total = price * typeValue * squareValue * countValue * dayValue;
                }

            totalValue.textContent = Math.ceil(total);
        };
        
        calcBlock.addEventListener('change', (event) => {
            let target = event.target;
            if (target === calcType || target === calcSquare ||
                target === calcDay || target === calcCount) {
                countSum();
            }
        })

};

export default calc;