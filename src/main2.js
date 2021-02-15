import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Rectangle from './js/rectangle.js';

$(document).ready(function () {
  $("form#deliveryForm").submit(function (event) {
    event.preventDefault();
    let city = $("#city").val();

    const checkText = function (city) {
      console.log("city is " + city);
      if (typeof city ==='string') {
        return new Error("Some error message");
      }
      else {
        return true;
      }
    };

    try {
      const checkNumber = checkText(city);
      if (checkNumber instanceof Error) {
        throw RangeError("some message");
      }
      else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
        let xmlObject = new XMLHttpRequest();
        debugger;
        xmlObject.onreadystatechange = function () {  //Arrow fucntion wont work
          if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            displayFunc(response);
          }
        };
        xmlObject.open("GET", url, true);
        xmlObject.send();
        const displayFunc = (response) => {
          let textValue = `Temperature in city ${city} is ${response.main.temp}`;
          $('#hidden').text(textValue);
        };
      }
    }
    catch (SALIM) {
      debugger;
      console.log(SALIM instanceof RangeError);
      console.log(`In catch: see passed message here: ${SALIM.message}`);
    }
  });

});