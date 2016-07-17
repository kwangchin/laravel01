function loadWeather() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=Singapore,sg&units=metric&APPID=d8435eae8fde00c466182382647eca58'
  $.getJSON(url, function(data) {
    $('#weather').html('Singapore: ' + data.main.temp + ' Celsius');
  });
}
