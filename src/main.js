import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserDemographic from './js/age.js';

$(document).ready(function(){
  $('form#age-activity-form').submit(function(event){
    event.preventDefault();
    let earthAge = $("#age").val();
    let planet = $("#planet option:selected").val();
    let activityLevel = $("#activity-level option:selected").val();
    
    let user = new UserDemographic(earthAge, activityLevel);
    let planetAge = user.planetAgeCalc(planet);
    let lifeExpect = user.determineLifeExpect();
    let remainLife = user.calcRemainLife(planet, lifeExpect, planetAge);
    $("div#results").empty();
    $("div#results").append(`On ${planet}, you are ${planetAge.toFixed(1)} years old.`);
    $("span#years-remaining").empty();
    $("span#years-remaining").append(remainLife);
    $("div#years-div").show();
  });
});