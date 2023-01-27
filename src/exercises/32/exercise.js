// Get the details of an airport
// - Create an Airport class
// - Have a getInfoFromIATA() method on the Airport class which returns an airport details given its iata code
// - Have a getInfoFromICAO() method on the Airport class which returns an airport details given its icao code
// - Use Promises for async calls.
// - Use the following API : https://rapidapi.com/Active-api/api/airport-info

// Example :

// Airport.getInfoFromIATA("HYD")
// Airport.getInfoFromICAO("HYD")

// Returns
/*
{
    "id": 3081,
    "iata": "HYD",
    "icao": "VOHS",
    "name": "Rajiv Gandhi International Airport",
    "location": "Hyderabad, Telangana, India",
    "street_number": "",
    "street": "",
    "city": "Hyderabad",
    "county": "Ranga Reddy",
    "state": "Telangana",
    "country_iso": "IN",
    "country": "India",
    "postal_code": "500409",
    "phone": "+91 40 6654 6370",
    "latitude": 17.240263,
    "longitude": 78.42938,
    "uct": 330,
    "website": "http://www.hyderabad.aero/"
}


*/
class Airport{
  getInfoFromIATA(iataCode){
    let encodedParams=new URLSearchParams();
    encodedParams.append('iata',iataCode);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8d3691d9c9mshd8623ec7fa66ba3p1cc31ajsnbeca13510f60',
            'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
        },
    };
    
    return Promise.all(
        iataCode
        .map(code =>
        fetch("https://airport-info.p.rapidapi.com/airport?iata="+code, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err))
        )
        );
  }
  getInfoFromICAO(icao){
    let encodedParams=new URLSearchParams();
    encodedParams.append('iata',iataCode);
    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8d3691d9c9mshd8623ec7fa66ba3p1cc31ajsnbeca13510f60',
            'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
        },
    };
    
    return Promise.all(
    icaoCode
    .map(code =>
    fetch("https://airport-info.p.rapidapi.com/airport?iata="+iataCode, options1)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
    )
    );

  }
}
A1 = new Airport();
A1.getInfoFromIATA(['JFK']);
