const demographist_regions = [
    {name: 'Lagos', population: 15946000, temperature: 5.0, currency: "NGN"},
    {name: 'Abuja', population: 3839646, temperature: 7.0, currency: "NGN"},
    {name: 'Accra', population: 2660072, temperature: 10.0, currency: "GHS"},
    {name: 'Johannesburg', population: 5635000, temperature: 3.0, currency: "ZAR"},
    {name: "Cairo", population: 9054000, temperature: 2.0, currency: "EGP"}
];
console.table(demographist_regions);

function totalPopulation(raw_array) {
    let total = 0;
    for (let i = 0; i < raw_array.length; i++) {
        let region = raw_array[i];
        if (region.temperature <= 10) {
            total += region.population;
        }
    }
    return total;
}
console.log("The total population of regions with temperature <= 10°C =", totalPopulation(demographist_regions));