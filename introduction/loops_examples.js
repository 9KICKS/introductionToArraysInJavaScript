let array = [34, 21, 7, 6, 77];
array.forEach(Fola => {
    console.log(Fola**2);
});

let semicolon = {
    cohort10: {
        name: "Dekanobs",
        total: 60,
        graduated: false
    },
    cohort11: {
        name: "Starlinks",
        total: 40,
        graduated: false
    },
    cohort14: {
        name: "Regnos",
        total: 39,
        graduated: false
    }
};

for(i in semicolon) {
    console.log(semicolon[i].total)
}

for(i of Object.entries(semicolon)) {
    console.log(i);
}
