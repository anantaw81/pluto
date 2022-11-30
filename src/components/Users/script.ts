import { Mixins } from 'vue-property-decorator';

export default class PlutoUser extends Mixins() {
  // create list
  // timeRangeLists(startTime: string, endTime: string) {
  //   function toMinutes(str: string): any {
  //     return str.split(":").reduce((h: string, m: string): any => Number(h) * 60 + Number(m))
  //   }

  //   function makeTimeString(min: any) {
  //     return (Math.floor(min / 60) + ":" + (min % 60).toString()).replace(/\b\d\b/, "0$&")
  //   }

  //   let start = toMinutes(startTime);
  //   let end = toMinutes(endTime);
  //   console.log(start)
  //   console.log(end)
  //   return Array.from({ length: Math.floor((end - start) / 30) + 1 }
  //     , (_, i) => {
  //       return makeTimeString(start + i * 30) + ":00"
  //     }
  //   )
  // }


  // TODO: It's work for 24 hours
  timeRangeLists() {
    var x = 30; //minutes interval
    var times = []; // time array
    var tt = 0; // start time

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      var mm = (tt % 60); // getting minutes of the hour in 0-55 format
      times[i] = ("0" + (hh % 24)).slice(-2) + ':' + ("0" + mm).slice(-2) + ":00"; // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }

    return times
  }

  // TODO: This work for AM PM
  timeRangeListinAMPM() {
    var x = 5; //minutes interval
    var times = []; // time array
    var tt = 0; // start time
    var ap = ['AM', 'PM']; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      var mm = (tt % 60); // getting minutes of the hour in 0-55 format
      times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }

    console.log(times);
  }

  startTimeList = this.timeRangeLists()
  endTimeList = this.timeRangeLists()

}

