$.ajax
  url: 'http://developer.nrel.gov/api/georeserv/service/solar/dni.json'
  data: {api_key: 'cc461d97df558c2937f83c9a94ea539ae2a73a10', lat: '39.73130035400391', lon: '-104.9811019897461'}
  success: (nrelData) ->
    dataArr = [nrelData.outputs.jan, nrelData.outputs.feb, nrelData.outputs.mar, nrelData.outputs.apr, nrelData.outputs.may, nrelData.outputs.jun, nrelData.outputs.jul, nrelData.outputs.aug, nrelData.outputs.sep, nrelData.outputs.oct, nrelData.outputs.nov, nrelData.outputs.dec]
    chart = new Highcharts.Chart
      chart:
        renderTo: 'container'
        type: 'bar'

      title:
        text: 'Total Direct Normal Solar Resource Values (watt-hours/m2/day) Monthly Average'

      xAxis:
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

      yAxis:
        title:
          text: 'watt-hours/m2/day'

      series: [
        name: 'Denver'
        data: dataArr
      ]
