setInterval
Thingy.onHumidity(function(data) {
  const response = {
    temperature: data.temperature,
    humidity: data.humidity
  }
  console.log(response)
})
