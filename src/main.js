import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserDemographic from './js/age.js';

$(document).ready(function() {
  $('#age-activity-form').submit(function(event) {
    event.preventDefault();
    $("div#results").empty();
    let planet = $("button#planet").val();
    let earthAge = $("#age").val();
    let activityLevel = $("#activity-level option:selected").val();

    planetAgeCalc(planet);
    determineLifeExpect();
    let user = new UserDemographic(earthAge, activityLevel, lifeExpect, planetAge);
    calcRemainLife(planet);
    user.remainLife = remainLife;

    $("div#results").append(`On this planet, you are ${user.planetAge} years old.`);


  });
});