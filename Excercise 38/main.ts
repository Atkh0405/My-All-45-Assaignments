/* Question #37;Cities: 
            Write a function called describe_city() that accepts the name of a city and its country. The function 
            should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a 
            default value. Call your function for three different cities, at least one of which is not in the
            default country.
*/
function describe_city(city_name:string="Makkah",country:string="Saudia Arabia") {
    console.log(`${city_name} is in ${country}.`);
    
}describe_city();
describe_city("Madinah");
describe_city("Karachi","Pakistan");