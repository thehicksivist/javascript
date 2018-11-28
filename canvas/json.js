// Here's some JSON from Yahoo!'s weather API (2018-03-28) (LINK ON CANVAS)

// Copy the JSON into your code and parse it using JSON.parse
// Log the sunrise and sunset dates
// Log the forecast for the week, make it look nice
// Temperatures are in fahrenheit, fix this with a fahrenheitToCelcius method.

// Beast Mode
// The sunrise time is missing a zero. Create a method to fix this. E.g: 
// Input: 7:5 AM, output: 7:50AM
// Input: 7:50 AM, output: 7:50AM

// Beast Mode++
// Figure out a way to get the current weather from Yahoo! weather in your browser.

// Hint 1: We used this url (LINK ON CANVAS)
// Hint 2: Get a brief understanding of CORS (a common interview question)
// Hint 3: Get a brief understanding of JSONP (a common interview question)
// Hint 4: Yahoo! Weather API & Demo (LINK ON CANVAS)
// Got it? now use HTML elements to make it look nice!

let weather = JSON.parse('{"query":{"count":1,"created":"2018-03-28T00:57:28Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Sydney, NSW, AU","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","description":"Yahoo! Weather for Sydney, NSW, AU","language":"en-us","lastBuildDate":"Wed, 28 Mar 2018 11:57 AM AEDT","ttl":"60","location":{"city":"Sydney","country":"Australia","region":" NSW"},"wind":{"chill":"77","direction":"0","speed":"11"},"atmosphere":{"humidity":"56","pressure":"1013.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"7:5 am","sunset":"6:56 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Sydney, NSW, AU at 11:00 AM AEDT","lat":"-33.856281","long":"151.020966","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","pubDate":"Wed, 28 Mar 2018 11:00 AM AEDT","condition":{"code":"32","date":"Wed, 28 Mar 2018 11:00 AM AEDT","temp":"77","text":"Sunny"},"forecast":[{"code":"32","date":"28 Mar 2018","day":"Wed","high":"83","low":"57","text":"Sunny"},{"code":"32","date":"29 Mar 2018","day":"Thu","high":"85","low":"61","text":"Sunny"},{"code":"30","date":"30 Mar 2018","day":"Fri","high":"85","low":"64","text":"Partly Cloudy"},{"code":"30","date":"31 Mar 2018","day":"Sat","high":"75","low":"66","text":"Partly Cloudy"},{"code":"30","date":"01 Apr 2018","day":"Sun","high":"90","low":"62","text":"Partly Cloudy"},{"code":"30","date":"02 Apr 2018","day":"Mon","high":"83","low":"66","text":"Partly Cloudy"},{"code":"30","date":"03 Apr 2018","day":"Tue","high":"75","low":"65","text":"Partly Cloudy"},{"code":"30","date":"04 Apr 2018","day":"Wed","high":"74","low":"63","text":"Partly Cloudy"},{"code":"30","date":"05 Apr 2018","day":"Thu","high":"81","low":"61","text":"Partly Cloudy"},{"code":"34","date":"06 Apr 2018","day":"Fri","high":"77","low":"62","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false"}}}}}}'
)

console.log(weather.query.results.channel.astronomy.sunrise)
console.log(weather.query.results.channel.astronomy.sunset)
let forecast = weather.query.results.channel.item.forecast

function FtoC(num){
    let ans = (num - 32) * 5/9
    return ans
}


for (day of forecast) {
    let dayow = day.day
    let date = day.date
    let hi = (FtoC(day.high)).toFixed(1)
    let lo = (FtoC(day.low)).toFixed(1)
    let outlook = day.text
    console.log(`The forecast for ${dayow}: ${date} is: \n High: ${hi} Low: ${lo} \n ${outlook}`)
    console.log("\n")
}


// ORGANISED THE JSON FILE SO IT WAS EASIER TO READ BELOW
// '{"query":{"count":1, "created":"2018-03-28T00:57:28Z","lang":"en-US",
// "results":
// {"channel":
// {"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},
// "title":"Yahoo! Weather - Sydney, NSW, AU",
// "link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/",
// "description":"Yahoo! Weather for Sydney, NSW, AU",
// "language":"en-us",
// "lastBuildDate":"Wed, 28 Mar 2018 11:57 AM AEDT",
// "ttl":"60",
// "location":{"city":"Sydney","country":"Australia","region":" NSW"},
// "wind":{"chill":"77","direction":"0","speed":"11"},
// "atmosphere":{"humidity":"56","pressure":"1013.0","rising":"0","visibility":"16.1"},
// "astronomy":{"sunrise":"7:5 am","sunset":"6:56 pm"},
// "image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},
// "item":{"title":"Conditions for Sydney, NSW, AU at 11:00 AM AEDT","lat":"-33.856281","long":"151.020966","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","pubDate":"Wed, 28 Mar 2018 11:00 AM AEDT","condition":{"code":"32","date":"Wed, 28 Mar 2018 11:00 AM AEDT","temp":"77","text":"Sunny"},
// "forecast":[{"code":"32","date":"28 Mar 2018","day":"Wed","high":"83","low":"57","text":"Sunny"},{"code":"32","date":"29 Mar 2018","day":"Thu","high":"85","low":"61","text":"Sunny"},{"code":"30","date":"30 Mar 2018","day":"Fri","high":"85","low":"64","text":"Partly Cloudy"},{"code":"30","date":"31 Mar 2018","day":"Sat","high":"75","low":"66","text":"Partly Cloudy"},{"code":"30","date":"01 Apr 2018","day":"Sun","high":"90","low":"62","text":"Partly Cloudy"},{"code":"30","date":"02 Apr 2018","day":"Mon","high":"83","low":"66","text":"Partly Cloudy"},{"code":"30","date":"03 Apr 2018","day":"Tue","high":"75","low":"65","text":"Partly Cloudy"},{"code":"30","date":"04 Apr 2018","day":"Wed","high":"74","low":"63","text":"Partly Cloudy"},{"code":"30","date":"05 Apr 2018","day":"Thu","high":"81","low":"61","text":"Partly Cloudy"},{"code":"34","date":"06 Apr 2018","day":"Fri","high":"77","low":"62","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false"}}}}}}'
// console.log(weather)



