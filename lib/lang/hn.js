function join_with_shared_prefix(a, b, joiner) {
  var m = a,
      i = 0,
      j;
 while(i !== a.length &&
        i !== b.length &&
        a.charCodeAt(i) === b.charCodeAt(i))
    ++i;

  while(i && a.charCodeAt(i - 1) !== 32)
    --i;

  return a.slice(0, i) + a.slice(i) + joiner + b.slice(i);
}

module.exports = require("../template")({
  "clear": "साफ़ दिन",
  "no-precipitation": "कोई वर्षा नहीं",
  "mixed-precipitation": "ओले के साथ वर्षा",
  "possible-very-light-precipitation": "हल्की वर्षा की संभावना है",
  "very-light-precipitation": "बहुत हल्की वर्षा",
  "possible-light-precipitation": "हल्की वर्षा की संभावना है",
  "light-precipitation": "हल्की वर्षा",
  "medium-precipitation": "तेज़ी",
  "heavy-precipitation": "जोरदार बर्षा",
  "possible-very-light-rain": "बूंदा बांदी की संभावना है",
  "very-light-rain": "बूंदा बांदी",
  "possible-light-rain": "हल्की बारिश की संभावना है",
  "light-rain": "हल्की बारिश",
  "medium-rain": "बारिश",
  "heavy-rain": "भारी बारिश",
  "possible-very-light-sleet": "संभावित बहुत हल्की तुषार-वर्षा",
  "very-light-sleet": "बहुत हल्की तुषार-वर्षा",
  "possible-light-sleet": "संभावित कमजोर तुषार-वर्षा",
  "light-sleet": "हल्की तुषार-वर्षा",
  "medium-sleet": "sleet",
  "heavy-sleet": "heavy sleet",
  "possible-very-light-snow": "possible flurries",
  "very-light-snow": "flurries",
  "possible-light-snow": "possible light snow",
  "light-snow": "light snow",
  "medium-snow": "snow",
  "heavy-snow": "heavy snow",
  "possible-thunderstorm": "possible thunderstorms",
  "thunderstorm": "thunderstorms",
  "light-wind": "breezy",
  "medium-wind": "windy",
  "heavy-wind": "dangerously windy",
  "low-humidity": "dry",
  "high-humidity": "humid",
  "fog": "foggy",
  "light-clouds": "partly cloudy",
  "medium-clouds": "mostly cloudy",
  "heavy-clouds": "overcast",
  "today-morning": "this morning",
  "later-today-morning": "later this morning",
  "today-afternoon": "this afternoon",
  "later-today-afternoon": "later this afternoon",
  "today-evening": "this evening",
  "later-today-evening": "later this evening",
  "today-night": "tonight",
  "later-today-night": "later tonight",
  "tomorrow-morning": "tomorrow morning",
  "tomorrow-afternoon": "tomorrow afternoon",
  "tomorrow-evening": "tomorrow evening",
  "tomorrow-night": "tomorrow night",
  "morning": "in the morning",
  "afternoon": "in the afternoon",
  "evening": "in the evening",
  "night": "overnight",
  "today": "today",
  "tomorrow": "tomorrow",
  "sunday": "on Sunday",
  "monday": "on Monday",
  "tuesday": "on Tuesday",
  "wednesday": "on Wednesday",
  "thursday": "on Thursday",
  "friday": "on Friday",
  "saturday": "on Saturday",
  "next-sunday": "next Sunday",
  "next-monday": "next Monday",
  "next-tuesday": "next Tuesday",
  "next-wednesday": "next Wednesday",
  "next-thursday": "next Thursday",
  "next-friday": "next Friday",
  "next-saturday": "next Saturday",
  "minutes": "$1 min.",
  "fahrenheit": "$1\u00B0F",
  "celsius": "$1\u00B0C",
  "inches": "$1 in.",
  "centimeters": "$1 cm.",
  "less-than": "< $1",
  "and": function(a, b) {
    return join_with_shared_prefix(
      a,
      b,
      a.indexOf(",") !== -1 ? "," : ""
    );
  },
  "through": function(a, b) {
    return join_with_shared_prefix(a, b, "  ");
  },
  "with": "$1$2",
  "range": "$1\u2013$2",
  "parenthetical": "$1 ($2)",
  "for-hour": "$1",
  "starting-in": "$1$2",
  "stopping-in": "$1$2",
  "starting-then-stopping-later": "$1$2、$3",
  "stopping-then-starting-later": "$1$2、$3",
  "for-day": "$1",
  "starting": "$1$2",
  "until": function(condition, period) {
    return  condition + period + " " ;
  },
  "until-starting-again": function(condition, a, b) {
    return condition + a + "" + b +  ",  " ;
  },
  "starting-continuing-until": function(condition, a, b) {
    return condition + a + " " + b + ",  " ;
  },
  "during": "$1から$2にかけて",
  "for-week": "$1",
  "over-weekend": "$1",
  "temperatures-peaking": "$1 $2",
  "temperatures-rising": "$1 $2",
  "temperatures-valleying": "$1 $2",
  "temperatures-falling": "$1 $2",
  "title": "$1",
  /* Add a period if there isn't already one. */
  "sentence": function(str) {
    if(str.charAt(str.length - 1) !== "。")
      str += "。";

    return str;
  }
});
