import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Rectangle from './js/rectangle.js';

$(document).ready(function () {
  $("form#deliveryForm").submit(function (event) {
    event.preventDefault();
    let city = $("#city").val();
    console.log(city);
    // let key = "ab7ba791f82c0434f2bb21a621464f64";

    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    let xmlObject = new XMLHttpRequest();

    xmlObject.onreadystatechange = function () {  //Arrow fucntion wont work
      if(this.readyState===4 && this.status===200) {
        // alert("I am here-1");
        let response = JSON.parse(this.responseText);
        console.log(response);
        displayFunc(response);
      }
    };
    xmlObject.open("GET", url, true);
    xmlObject.send();

    const displayFunc = (response) => {
      // alert("I am here");
      let textValue = `Temperature in city ${city} is ${response.main.temp}`;
      console.log(textValue);
      $('#hidden').text(textValue);
      // $("#hidden").text(`The humidity in ${city} is ${response.main.humidity}%`);
    };

  });

  $('#rectangle-area-form').submit(function (event) {
    event.preventDefault();

  });

});