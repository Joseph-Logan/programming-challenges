function timeConversion(s: string): string {
  let [hour, minutes, seconds, period] = s.split(/:|(?<=\d)(?=AM|PM)/)
  let timeConversion = `${hour}:${minutes}:${seconds} ${period}`

  let date = new Date(`01/01/2022 ${timeConversion}`)
  let options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }
  let formattedTime = new Intl.DateTimeFormat('en-GB', options).format(date)
  return formattedTime
}

console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('01:05:45AM'))
