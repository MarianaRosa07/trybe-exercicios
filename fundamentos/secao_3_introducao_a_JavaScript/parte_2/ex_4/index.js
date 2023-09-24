const mcDonalds = {
    bigMac: 26.90,
    bigTasty: 39.90,
    mcFritas: 13.90,
    topSundayChocolate: 11.90,
    isDelicious: true,
    city: 'Santos',
    unit: 'Shopping Praiamar',
}

// dot notation = notação por ponto
mcDonalds.bigMac = 50.90;

// bracket notation = notação por colchetes
mcDonalds['bigTasty'] = 15.90;
mcDonalds['isOpen'] = true;

// ------------------------

const mcDonaldsKeys = Object.keys(mcDonalds);
console.log(mcDonaldsKeys);
console.log(mcDonaldsKeys[2]);

const mcDonaldsValues = Object.values(mcDonalds);
console.log(mcDonaldsValues);

const mcDonaldsEntries = Object.entries(mcDonalds);
console.log(mcDonaldsEntries);

const cloneMcDonalds = Object.assign({}, mcDonalds);