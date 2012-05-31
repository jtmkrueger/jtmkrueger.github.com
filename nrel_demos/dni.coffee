navigator.geolocation.getCurrentPosition (position) ->
  $("#container").html('gathering data...')
  startPos = position
  console.log startPos

  $.ajax
    url: 'http://developer.nrel.gov/api/georeserv/service/solar/dni.json'
    data: {api_key: 'cc461d97df558c2937f83c9a94ea539ae2a73a10', lat: startPos.coords.latitude, lon: startPos.coords.longitude}
    success: (nrelData) ->
      dataArr = [nrelData.outputs.jan, nrelData.outputs.feb, nrelData.outputs.mar, nrelData.outputs.apr, nrelData.outputs.may, nrelData.outputs.jun, nrelData.outputs.jul, nrelData.outputs.aug, nrelData.outputs.sep, nrelData.outputs.oct, nrelData.outputs.nov, nrelData.outputs.dec]
      chart = new Highcharts.Chart
        chart:
          renderTo: 'container'
          type: 'column'
          height: 800
          shadow: true
          showAxies: true

        title:
          text: 'Total Direct Normal Solar Resource Values (watt-hours/m2/day) Monthly Average'

        xAxis:
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        yAxis:
          title:
            text: 'watt-hours/m2/day'

        series: [
          name: "Latitude: #{startPos.coords.latitude} | Longitude: #{startPos.coords.longitude}"
          data: dataArr
        ]
, (error) ->
  $("#container").html("there was a problem!")
