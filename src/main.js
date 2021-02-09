import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Rectangle from './js/rectangle.js';


$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const rectangle = new Rectangle(1,2);
    console.log(rectangle);
  });

  $('#rectangle-area-form').submit(function(event) {
    event.preventDefault();

  });

});