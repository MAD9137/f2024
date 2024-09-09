enum Weather {
    case sunny
    case cloudy
    case rainy
    case windy
}

let currentWeather = Weather.cloudy

switch currentWeather {
case .sunny:
    print("It's sunny!")
case .cloudy:
    print("It's cloudy!")
case .rainy:
    print("It's rainy!")
default:
    print("The weather is windy!")
}

//It's cloudy!
