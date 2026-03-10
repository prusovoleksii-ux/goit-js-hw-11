import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const dateTimePicker = document.querySelector("input#datetime-picker");
const startButton = document.querySelector("[data-start]");
startButton.disabled = true;
dateTimePicker.disabled = false;

const displayDays = document.querySelector("[data-days]");
const displayHours = document.querySelector("[data-hours]");
const displayMinutes = document.querySelector("[data-minutes]");
const displaySeconds = document.querySelector("[data-seconds]");

let dateTimeChosen;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


const addLeadingZero = val => val.toString().padStart(2, "0");


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  minDate: "today",
  onClose(selectedDates) {
    if (selectedDates[0].getTime() > Date.now()){
        dateTimeChosen = selectedDates[0];
        startButton.disabled = false;
    } else {
        iziToast.error({
            message: 'Please choose a date in the future',
        });
        startButton.disabled = true;
    }
  },
};
flatpickr(dateTimePicker, options);

startButton.addEventListener("click", e => {
    startButton.disabled = true;
    dateTimePicker.disabled = true;

    const intervalId = setInterval(() => {
        let timeDifference = dateTimeChosen.getTime() - Date.now();
        
        displayDays.textContent = addLeadingZero(convertMs(timeDifference).days); 
        displayHours.textContent = addLeadingZero(convertMs(timeDifference).hours); 
        displayMinutes.textContent = addLeadingZero(convertMs(timeDifference).minutes); 
        displaySeconds.textContent = addLeadingZero(convertMs(timeDifference).seconds); 
        
        if (timeDifference <= 0){
            clearInterval(intervalId);
            dateTimePicker.disabled = false;
            
            displayDays.textContent = "00"; 
            displayHours.textContent = "00"; 
            displayMinutes.textContent = "00"; 
            displaySeconds.textContent = "00"; 
        }
    }, 1000);
});

