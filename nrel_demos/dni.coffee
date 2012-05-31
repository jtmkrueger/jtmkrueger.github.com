navigator.geolocation.getCurrentPosition (position) ->
  $("#container").html('gathering data...')
  pos = position
  console.log pos

  $.ajax
    url: 'http://api.geonames.org/findNearbyPlaceNameJSON?'
    data:
      username: 'demo'
      lat: pos.coords.latitude
      lng: pos.coords.longitude
    success: (nameData) ->
      city = nameData.geonames[0].name
      state = nameData.geonames[0].adminName1



      $.ajax
        url: 'http://developer.nrel.gov/api/georeserv/service/solar/dni.json'
        data:
          api_key: 'cc461d97df558c2937f83c9a94ea539ae2a73a10'
          lat: pos.coords.latitude
          lon: pos.coords.longitude
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
              name: "#{city}, #{state}"
              data: dataArr
            ]
      , (error) ->
        $("#container").html("there was a problem!")
