const xlsx = require('xlsx');
const fs = require('fs');

// Jouw enums (even aanpassen indien nodig)
const ClothingCategory = {
    HOODIE: 'HOODIE',
    TSHIRT: 'TSHIRT',
    SWEATER: 'SWEATER',
    PET: 'PET',
    ACCESSOIRE: 'ACCESSOIRE',
    ONBEKEND: 'ONBEKEND'
};

const Gender = {
    UNISEX: 'UNISEX',
    MAN: 'MAN',
    VROUW: 'VROUW',
    KIND: 'KIND',
};

const Size = {
    S: 'S',
    M: 'M',
    L: 'L',
    XL: 'XL',
    XXL: 'XXL',
    ONESIZE: 'ONESIZE',
};

const Color = {
    BLACK: 'BLACK',
    BLUE: 'BLUE',
    GRAY: 'GRAY',
    GREEN: 'GREEN',
    RED: 'RED',
    WHITE: 'WHITE',
    YELLOW: 'YELLOW',
    ORANGE: 'ORANGE',
    BROWN: 'BROWN',
    PURPLE: 'PURPLE',
    PINK: 'PINK',
};

// Bestand lezen
const workbook = xlsx.readFile('DENS MERCH PRODUCTEN.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

const result = [];

let idCounter = 1;

data.forEach(row => {
    if (!row.Naam || row.Naam.includes('VOORBEELD')) return;

    // Prijs verwerken
    let price = 0;
    if (row['Prijs (€)']) {
        const priceString = row['Prijs (€)'].toString().split('/')[0].replace(',', '.').trim();
        price = parseFloat(priceString);
    }

    // Maten verwerken
    const sizes = row['Maten'] ? row['Maten'].split(',').map(s => s.trim().toUpperCase()) : [];

    // Kleuren verwerken
    const colors = row['Kleuren'] ? row['Kleuren'].split(',').map(c => c.trim().toUpperCase()) : [];

    // Personalization
    const personalization = row['Personalisatie Toegestaan'] && row['Personalisatie Toegestaan'].toUpperCase() === 'YES';

    const item = {
        id: idCounter++,
        name: row['Naam'] || '',
        description: row['Beschrijving'] || '',
        category: ClothingCategory[row['Categorie']?.toUpperCase()] || ClothingCategory.ONBEKEND,
        gender: Gender[row['Geslacht']?.toUpperCase()] || Gender.UNISEX,
        size: sizes.length > 0 ? sizes : [Size.ONESIZE],
        material: row['Materiaal'] || '',
        color: colors.length > 0 ? colors : [],
        price: price,
        images: row['Afbeeldingen'] ? row['Afbeeldingen'].split(',').map(img => img.trim()) : [],
        personalizationAllowed: personalization,
        personalizationOptions: personalization ? {
            maxTextLength: 20,
            availableFonts: ['Arial', 'Courier New'],
            textColors: ['White', 'Black', 'Red'],
            textLocations: ['Borst', 'Rug'],
            extraCost: 5,
        } : undefined
    };

    result.push(item);
});

// Output naar bestand
fs.writeFileSync('clothing-items.ts', `import { ClothingCategory, Gender, Size, Color } from './enums.model';\nimport { ClothingItem } from './clothing-item.model';\n\nexport const items: ClothingItem[] = ${JSON.stringify(result, null, 2)};`);

console.log('✅ Bestand clothing-items.ts succesvol aangemaakt!');
