var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var countriesData = JSON.parse(request.responseText);
            console.log(countriesData); 
            // Problem 1: Get all the countries from Asia continent/region using Filter method
            var countriesInAsia = countriesData.filter(country => country.region === 'Asia');
            console.log("Countries in Asia:", countriesInAsia.map(country => country.name.common));

            // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter method
            var countriesWithPopulationLessThan2Lakhs = countriesData.filter(country => country.population < 200000);
            console.log("Countries with population less than 2 lakhs:", countriesWithPopulationLessThan2Lakhs.map(country => country.name.common));

            // Problem 3: Print the following details name, capital, flag, using forEach method
            console.log("Details of countries (name, Region, SubRegion and population):");
            countriesData.forEach(country => {
                console.log(`Name: ${country.name.common}, Region: ${country.region},SubRegion: ${country.subregion},Population:${country.population}`);
            });

            // Problem 4: Print the total population of countries using reduce method
            var totalPopulation = countriesData.reduce((acc, country) => acc + country.population, 0);
            console.log("Total population of countries:", totalPopulation);

            // Problem 5: Print the country that uses US dollars as currency
            var countryUsingUSD = countriesData.find(country => country.currencies && country.currencies.USD);
            if (countryUsingUSD) {
                console.log("Country that uses US dollars as currency:", countryUsingUSD.name.common);
            } else {
                console.log("No country uses US dollars as currency.");
            }
            
        } else {
            // Log an error message if the request is not successful
            console.error("Error:", request.status, request.statusText);
        }
    }
};
