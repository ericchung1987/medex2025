$(window).on('load',function () {
  let startTime = $('#time').text();
  let minutes_time = 60;
  var target_date = parseInt(startTime) + minutes_time * 60 * 1000 // set the countdown date

  var time_limit = minutes_time * 60 * 1000
  //set actual timer
  setTimeout(function () {
    alert('Your time is up!')
    $.ajax({
      type: 'POST',
      url: '/oscecomplete',
      data: '',
      contentType: 'text/xml',
      dataType: 'text',
      success: function (result) {
        console.log(result)
      },
      error: function (result, status) {
        console.log(result)
      },
    })
    window.location.replace('/userpage')
  }, time_limit)

  var days, hours, minutes, seconds // variables for time units

  var countdown = document.getElementById('tiles') // get tag element

  getCountdown()

  setInterval(function () {
    getCountdown()
  }, 1000)

  function getCountdown() {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime()
    var seconds_left = (target_date - current_date) / 1000

    if (seconds_left >= 0) {
      if (seconds_left * 1000 < time_limit / 2) {
        $('#tiles').removeClass('color-full')
        $('#tiles').addClass('color-half')
      }
      if (seconds_left * 1000 < time_limit / 4) {
        $('#tiles').removeClass('color-half')
        $('#tiles').addClass('color-empty')
      }

      days = pad(parseInt(seconds_left / 86400))
      seconds_left = seconds_left % 86400

      hours = pad(parseInt(seconds_left / 3600))
      seconds_left = seconds_left % 3600

      minutes = pad(parseInt(seconds_left / 60))
      seconds = pad(parseInt(seconds_left % 60))

      // format countdown string + set tag value
      countdown.innerHTML =
        '<span>' +
        hours +
        ':</span><span>' +
        minutes +
        ':</span><span>' +
        seconds +
        '</span>'
    }
  }

  function pad(n) {
    return (n < 10 ? '0' : '') + n
  }

  let current_date = new Date().getTime()
  let seconds_left = (target_date - current_date) / 1000
  if (seconds_left < 0) {
    alert('Your time is up!')
    $.ajax({
      type: 'POST',
      url: '/oscecomplete',
      data: '',
      contentType: 'text/xml',
      dataType: 'text',
      success: function (result) {
        console.log(result)
      },
      error: function (result, status) {
        console.log(result)
      },
    })
    window.location.replace('/userpage')
  }


})
