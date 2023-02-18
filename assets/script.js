// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  console.log("ready");





$(function () {

  //Created local storage keys
  var hourNineCache = "9 AM";
  var hourTenCache = "10 AM";
  var hourElevenCache = "11 AM";
  var hourTwelveCache = "12 PM";
  var hourOneCache = "1 PM";
  var hourTwoCache = "2 PM";
  var hourThreeCache = "3 PM";
  var hourFourCache = "4 PM";
  var hourFiveCache = "5 PM";

  //Wired up click event listeners for each button
  $('#hour-9').children('button').click(function () {
    var hourNineText = $('#textNine').val();
    localStorage.setItem(hourNineCache, hourNineText);
  });

  $('#hour-10').children('button').click(function () {
    var hourTenText = $('#textTen').val();
    localStorage.setItem(hourTenCache, hourTenText);
  });

  $('#hour-11').children('button').click(function () {
    var hourElevenText = $('#textEleven').val();
    localStorage.setItem(hourElevenCache, hourElevenText);
  });

  $('#hour-12').children('button').click(function () {
    var hourTwelveText = $('#textTwelve').val();
    localStorage.setItem(hourTwelveCache, hourTwelveText);
  });

  $('#hour-1').children('button').click(function () {
    var hourOneText = $('#textOne').val();
    localStorage.setItem(hourOneCache, hourOneText);
  });

  $('#hour-2').children('button').click(function () {
    var hourTwoText = $('#textTwo').val();
    localStorage.setItem(hourTwoCache, hourTwoText);
  });

  $('#hour-3').children('button').click(function () {
    var hourThreeText = $('#textThree').val();
    localStorage.setItem(hourThreeCache, hourThreeText);
  });

  $('#hour-4').children('button').click(function () {
    var hourFourText = $('#textFour').val();
    localStorage.setItem(hourFourCache, hourFourText);
  });

  $('#hour-5').children('button').click(function () {
    var hourFiveText = $('#textFive').val();
    localStorage.setItem(hourFiveCache, hourFiveText);
  });

  //Checks if there is anything in local storage and displays it in the text area
  if (localStorage.getItem(hourNineCache) != null) {
    $('#textNine').val(localStorage.getItem(hourNineCache));
  }
  if (localStorage.getItem(hourTenCache) != null) {
    $('#textTen').val(localStorage.getItem(hourTenCache));
  }
  if (localStorage.getItem(hourElevenCache) != null) {
    $('#textEleven').val(localStorage.getItem(hourElevenCache));
  }
  if (localStorage.getItem(hourTwelveCache) != null) {
    $('#textTwelve').val(localStorage.getItem(hourTwelveCache));
  }
  if (localStorage.getItem(hourOneCache) != null) {
    $('#textOne').val(localStorage.getItem(hourOneCache));
  }
  if (localStorage.getItem(hourTwoCache) != null) {
    $('#textTwo').val(localStorage.getItem(hourTwoCache));
  }
  if (localStorage.getItem(hourThreeCache) != null) {
    $('#textThree').val(localStorage.getItem(hourThreeCache));
  }
  if (localStorage.getItem(hourFourCache) != null) {
    $('#textFour').val(localStorage.getItem(hourFourCache));
  }
  if (localStorage.getItem(hourFiveCache) != null) {
    $('#textFive').val(localStorage.getItem(hourFiveCache));
  }

  //Changes the classes for each div depending on the hour
  var currentHour = dayjs().format('HH');

  if (currentHour < 09 && currentHour >= 0){
    $('#hour-9').addClass('future');
    $('#hour-10').addClass('future');
    $('#hour-11').addClass('future');
    $('#hour-12').addClass('future');
    $('#hour-1').addClass('future');
    $('#hour-2').addClass('future');
    $('#hour-3').addClass('future');
    $('#hour-4').addClass('future');
    $('#hour-5').addClass('future');
  }

  if (currentHour == 09) {
    $('#hour-9').removeClass('future');
    $('#hour-9').addClass('present');
    $('#hour-10').addClass('future');
    $('#hour-11').addClass('future');
    $('#hour-12').addClass('future');
    $('#hour-1').addClass('future');
    $('#hour-2').addClass('future');
    $('#hour-3').addClass('future');
    $('#hour-4').addClass('future');
    $('#hour-5').addClass('future');
  }
  if (currentHour == 10) {
    $('#hour-9').removeClass('present');
    $('#hour-9').addClass('past');
    $('#hour-10').removeClass('future');
    $('#hour-10').addClass('present');
    $('#hour-11').addClass('future');
    $('#hour-12').addClass('future');
    $('#hour-1').addClass('future');
    $('#hour-2').addClass('future');
    $('#hour-3').addClass('future');
    $('#hour-4').addClass('future');
    $('#hour-5').addClass('future');
  }
  if (currentHour == 11) {
    $('#hour-9').addClass('past');
    $('#hour-10').removeClass('present');
    $('#hour-10').addClass('past');
    $('#hour-11').removeClass('future');
    $('#hour-11').addClass('present');
    $('#hour-12').addClass('future');
    $('#hour-1').addClass('future');
    $('#hour-2').addClass('future');
    $('#hour-3').addClass('future');
    $('#hour-4').addClass('future');
    $('#hour-5').addClass('future');
  }
  if (currentHour == 12) {
    $('#hour-9').addClass('past');
    $('#hour-10').addClass('past');
    $('#hour-11').removeClass('future');
    $('#hour-11').addClass('past');
    $('#hour-12').removeClass('future');
    $('#hour-12').addClass('present');
    $('#hour-1').addClass('future');
    $('#hour-2').addClass('future');
    $('#hour-3').addClass('future');
    $('#hour-4').addClass('future');
    $('#hour-5').addClass('future');
  }
  if (currentHour == 13) {
    $('#hour-9').addClass('past');
    $('#hour-10').addClass('past');
    $('#hour-11').addClass('past');
    $('#hour-12').removeClass('present');
    $('#hour-12').addClass('past');
    $('#hour-1').removeClass('future');
    $('#hour-1').addClass('present');
    $('#hour-2').addClass('future');
    $('#hour-3').addClass('future');
    $('#hour-4').addClass('future');
    $('#hour-5').addClass('future');
  }
  if (currentHour == 14) {
    $('#hour-9').addClass('past');
    $('#hour-10').addClass('past');
    $('#hour-11').addClass('past');
    $('#hour-12').addClass('past');
    $('#hour-1').removeClass('present');
    $('#hour-1').addClass('past');
    $('#hour-2').removeClass('future');
    $('#hour-2').addClass('present');
    $('#hour-3').addClass('future');
    $('#hour-4').addClass('future');
    $('#hour-5').addClass('future');
  }
  if (currentHour == 15) {
    $('#hour-9').addClass('past');
    $('#hour-10').addClass('past');
    $('#hour-11').addClass('past');
    $('#hour-12').addClass('past');
    $('#hour-1').addClass('past');
    $('#hour-2').removeClass('present');
    $('#hour-2').addClass('past');
    $('#hour-3').removeClass('future');
    $('#hour-3').addClass('present');
    $('#hour-4').addClass('future');
    $('#hour-5').addClass('future');
  }
  if (currentHour == 16) {
    $('#hour-9').addClass('past');
    $('#hour-10').addClass('past');
    $('#hour-11').addClass('past');
    $('#hour-12').addClass('past');
    $('#hour-1').addClass('past');
    $('#hour-2').addClass('past');
    $('#hour-3').removeClass('present');
    $('#hour-3').addClass('past');
    $('#hour-4').removeClass('future');
    $('#hour-4').addClass('present');
    $('#hour-5').addClass('future');
  }
  if (currentHour == 17) {
    $('#hour-9').addClass('past');
    $('#hour-10').addClass('past');
    $('#hour-11').addClass('past');
    $('#hour-12').addClass('past');
    $('#hour-1').addClass('past');
    $('#hour-2').addClass('past');
    $('#hour-3').addClass('past');
    $('#hour-4').removeClass('present');
    $('#hour-4').addClass('past');
    $('#hour-5').removeClass('future');
    $('#hour-5').addClass('present');
  }
  if (currentHour > 18 && currentHour <= 24) {
    $('#hour-5').removeClass('present');
    $('#hour-5').addClass('past');
    $('#hour-9').addClass('past');
    $('#hour-10').addClass('past');
    $('#hour-11').addClass('past');
    $('#hour-12').addClass('past');
    $('#hour-1').addClass('past');
    $('#hour-2').addClass('past');
    $('#hour-3').addClass('past');
    $('#hour-4').addClass('past');
  }


  //Adds the current date to the header
  var currentDate = dayjs().format('dddd, MM-DD-YYYY HH:mm:ss A');
  $('#currentDay').text(currentDate);

});

});