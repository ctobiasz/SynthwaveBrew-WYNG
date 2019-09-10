const input_dates     = document.getElementsByClassName('input-dates');
const subBtn          = document.querySelector("#submit-button");
const boxBoy          = document.querySelector(".container");
const wowza           = document.querySelector(".wowza");
const message_alert   = document.querySelector(".message-alerts");
const sucessful_alert = document.querySelector(".successful-alert");
const failure_alert   = document.querySelector(".failure-alert");
const current_date    = new Date();
const current_year = current_date.getFullYear();

const no_access = function(){
  message_alert.style.visibility = "visible";
  message_alert.style.backgroundColor = "rgb(0, 0, 0, 0.6)";
  message_alert.style.color = "white";
  message_alert.innerHTML = "You are not allowed to view this content.";
  message_alert.style.boxShadow = "0 0 20px black";
}

const over21 = function(){
        message_alert.style.visibility = "visible";
        message_alert.style.backgroundColor = "rgb(0, 0, 0, 0.6)";
        message_alert.style.color = "white";
        message_alert.innerHTML = "Welcome to Synthwave Brew."
        message_alert.style.boxShadow = "0 0 20px black";
            setTimeout(
                    function(){
                    message_alert.style.visibility = "hidden";
                  }, 3000);
}

const ageGate = function(){
  let dateYear = document.querySelector("#date-year").value;
  let current_age = current_year - dateYear;
  if(current_age < 21) {
    for(let i=0; i<input_dates.length; i++){
      input_dates[i].disabled = true;
    };
    // subBtn.style.display= "none"; MAYBE I"LL INCLUDE THIS *****
  no_access();
  } else {
    document.cookie = "overtwentyone=true; expires=Thu, 01 Jan 3000 00:00:00 UTC; path=/";
        over21();
    }
};

subBtn.addEventListener("click", ageGate);
if(document.cookie.includes('overtwentyone=true')){
    over21()};
