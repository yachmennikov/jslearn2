const countTimer = (deadline) => {
    
    const timerHours = document.querySelector('#timer-hours'),
          timerMinutes = document.querySelector('#timer-minutes'),
          timerSeconds = document.querySelector('#timer-seconds');

          const getTimeRemaining = () => {
              let dateStop = new Date(deadline).getTime(),
                  dateNow = new Date().getTime(),
                  timeRemaining = (dateStop - dateNow) / 1000,
                  seconds = Math.floor(timeRemaining % 60),
                  minutes = Math.floor( (timeRemaining / 60) % 60),
                  hours = Math.floor(timeRemaining / 60 / 60);

                  return {timeRemaining, hours, minutes, seconds}
          };
             
          const countDown = () => {
              let timer = getTimeRemaining();
              const conditions = (item) => {
                  return item < 10 ? '0' + item : item;      
              };
              timerHours.textContent = conditions(timer.hours);
              timerMinutes.textContent = conditions(timer.minutes);
              timerSeconds.textContent = conditions(timer.seconds);

              if (timer.timeRemaining < 0) {
                  clearInterval(stopDeadline);
                  timerHours.textContent = '00';
                  timerMinutes.textContent = '00';
                  timerSeconds.textContent = '00';
              };      
          };  
          const stopDeadline = setInterval(countDown, 1000);  
  };

  export default  countTimer;