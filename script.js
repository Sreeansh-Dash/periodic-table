// Elements data
const elements = [
    {
        "name": "Hydrogen",
        "symbol": "H",
        "number": 1,
        "category": "nonmetal",
        "atomic_mass": 1.008,
        "xpos": 1,
        "ypos": 1,
        "phase": "Gas"
    },
    {
        "name": "Helium",
        "symbol": "He",
        "number": 2,
        "category": "noble",
        "atomic_mass": 4.0026,
        "xpos": 18,
        "ypos": 1,
        "phase": "Gas"
    },
    {
        "name": "Lithium",
        "symbol": "Li",
        "number": 3,
        "category": "alkali",
        "atomic_mass": 6.94,
        "xpos": 1,
        "ypos": 2,
        "phase": "Solid"
    },
    {
        "name": "Beryllium",
        "symbol": "Be",
        "number": 4,
        "category": "alkaline",
        "atomic_mass": 9.0122,
        "xpos": 2,
        "ypos": 2,
        "phase": "Solid"
    },
    {
        "name": "Boron",
        "symbol": "B",
        "number": 5,
        "category": "metalloid",
        "atomic_mass": 10.81,
        "xpos": 13,
        "ypos": 2,
        "phase": "Solid"
    },
    {
        "name": "Carbon",
        "symbol": "C",
        "number": 6,
        "category": "nonmetal",
        "atomic_mass": 12.011,
        "xpos": 14,
        "ypos": 2,
        "phase": "Solid"
    },
    {
        "name": "Nitrogen",
        "symbol": "N",
        "number": 7,
        "category": "nonmetal",
        "atomic_mass": 14.007,
        "xpos": 15,
        "ypos": 2,
        "phase": "Gas"
    },
    {
        "name": "Oxygen",
        "symbol": "O",
        "number": 8,
        "category": "nonmetal",
        "atomic_mass": 15.999,
        "xpos": 16,
        "ypos": 2,
        "phase": "Gas"
    },
    {
        "name": "Fluorine",
        "symbol": "F",
        "number": 9,
        "category": "halogen",
        "atomic_mass": 18.998,
        "xpos": 17,
        "ypos": 2,
        "phase": "Gas"
    },
    {
        "name": "Neon",
        "symbol": "Ne",
        "number": 10,
        "category": "noble",
        "atomic_mass": 20.180,
        "xpos": 18,
        "ypos": 2,
        "phase": "Gas"
    },
    {
        "name": "Sodium",
        "symbol": "Na",
        "number": 11,
        "category": "alkali",
        "atomic_mass": 22.990,
        "xpos": 1,
        "ypos": 3,
        "phase": "Solid"
    },
    {
        "name": "Magnesium",
        "symbol": "Mg",
        "number": 12,
        "category": "alkaline",
        "atomic_mass": 24.305,
        "xpos": 2,
        "ypos": 3,
        "phase": "Solid"
    },
    {
        "name": "Aluminum",
        "symbol": "Al",
        "number": 13,
        "category": "metal",
        "atomic_mass": 26.982,
        "xpos": 13,
        "ypos": 3,
        "phase": "Solid"
    },
    {
        "name": "Silicon",
        "symbol": "Si",
        "number": 14,
        "category": "metalloid",
        "atomic_mass": 28.085,
        "xpos": 14,
        "ypos": 3,
        "phase": "Solid"
    },
    {
        "name": "Phosphorus",
        "symbol": "P",
        "number": 15,
        "category": "nonmetal",
        "atomic_mass": 30.974,
        "xpos": 15,
        "ypos": 3,
        "phase": "Solid"
    },
    {
        "name": "Sulfur",
        "symbol": "S",
        "number": 16,
        "category": "nonmetal",
        "atomic_mass": 32.06,
        "xpos": 16,
        "ypos": 3,
        "phase": "Solid"
    },
    {
        "name": "Chlorine",
        "symbol": "Cl",
        "number": 17,
        "category": "halogen",
        "atomic_mass": 35.45,
        "xpos": 17,
        "ypos": 3,
        "phase": "Gas"
    },
    {
        "name": "Argon",
        "symbol": "Ar",
        "number": 18,
        "category": "noble",
        "atomic_mass": 39.948,
        "xpos": 18,
        "ypos": 3,
        "phase": "Gas"
    },
    {
        "name": "Potassium",
        "symbol": "K",
        "number": 19,
        "category": "alkali",
        "atomic_mass": 39.098,
        "xpos": 1,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Calcium",
        "symbol": "Ca",
        "number": 20,
        "category": "alkaline",
        "atomic_mass": 40.078,
        "xpos": 2,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Scandium",
        "symbol": "Sc",
        "number": 21,
        "category": "transition",
        "atomic_mass": 44.956,
        "xpos": 3,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Titanium",
        "symbol": "Ti",
        "number": 22,
        "category": "transition",
        "atomic_mass": 47.867,
        "xpos": 4,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Vanadium",
        "symbol": "V",
        "number": 23,
        "category": "transition",
        "atomic_mass": 50.942,
        "xpos": 5,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Chromium",
        "symbol": "Cr",
        "number": 24,
        "category": "transition",
        "atomic_mass": 51.996,
        "xpos": 6,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Manganese",
        "symbol": "Mn",
        "number": 25,
        "category": "transition",
        "atomic_mass": 54.938,
        "xpos": 7,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Iron",
        "symbol": "Fe",
        "number": 26,
        "category": "transition",
        "atomic_mass": 55.845,
        "xpos": 8,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Cobalt",
        "symbol": "Co",
        "number": 27,
        "category": "transition",
        "atomic_mass": 58.933,
        "xpos": 9,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Nickel",
        "symbol": "Ni",
        "number": 28,
        "category": "transition",
        "atomic_mass": 58.693,
        "xpos": 10,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Copper",
        "symbol": "Cu",
        "number": 29,
        "category": "transition",
        "atomic_mass": 63.546,
        "xpos": 11,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Zinc",
        "symbol": "Zn",
        "number": 30,
        "category": "transition",
        "atomic_mass": 65.38,
        "xpos": 12,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Gallium",
        "symbol": "Ga",
        "number": 31,
        "category": "metal",
        "atomic_mass": 69.723,
        "xpos": 13,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Germanium",
        "symbol": "Ge",
        "number": 32,
        "category": "metalloid",
        "atomic_mass": 72.630,
        "xpos": 14,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Arsenic",
        "symbol": "As",
        "number": 33,
        "category": "metalloid",
        "atomic_mass": 74.922,
        "xpos": 15,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Selenium",
        "symbol": "Se",
        "number": 34,
        "category": "nonmetal",
        "atomic_mass": 78.971,
        "xpos": 16,
        "ypos": 4,
        "phase": "Solid"
    },
    {
        "name": "Bromine",
        "symbol": "Br",
        "number": 35,
        "category": "halogen",
        "atomic_mass": 79.904,
        "xpos": 17,
        "ypos": 4,
        "phase": "Liquid"
    },
    {
        "name": "Krypton",
        "symbol": "Kr",
        "number": 36,
        "category": "noble",
        "atomic_mass": 83.798,
        "xpos": 18,
        "ypos": 4,
        "phase": "Gas"
    },
    {
        "name": "Rubidium",
        "symbol": "Rb",
        "number": 37,
        "category": "alkali",
        "atomic_mass": 85.468,
        "xpos": 1,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Strontium",
        "symbol": "Sr",
        "number": 38,
        "category": "alkaline",
        "atomic_mass": 87.62,
        "xpos": 2,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Yttrium",
        "symbol": "Y",
        "number": 39,
        "category": "transition",
        "atomic_mass": 88.906,
        "xpos": 3,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Zirconium",
        "symbol": "Zr",
        "number": 40,
        "category": "transition",
        "atomic_mass": 91.224,
        "xpos": 4,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Niobium",
        "symbol": "Nb",
        "number": 41,
        "category": "transition",
        "atomic_mass": 92.906,
        "xpos": 5,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Molybdenum",
        "symbol": "Mo",
        "number": 42,
        "category": "transition",
        "atomic_mass": 95.95,
        "xpos": 6,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Technetium",
        "symbol": "Tc",
        "number": 43,
        "category": "transition",
        "atomic_mass": 98,
        "xpos": 7,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Ruthenium",
        "symbol": "Ru",
        "number": 44,
        "category": "transition",
        "atomic_mass": 101.07,
        "xpos": 8,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Rhodium",
        "symbol": "Rh",
        "number": 45,
        "category": "transition",
        "atomic_mass": 102.91,
        "xpos": 9,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Palladium",
        "symbol": "Pd",
        "number": 46,
        "category": "transition",
        "atomic_mass": 106.42,
        "xpos": 10,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Silver",
        "symbol": "Ag",
        "number": 47,
        "category": "transition",
        "atomic_mass": 107.87,
        "xpos": 11,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Cadmium",
        "symbol": "Cd",
        "number": 48,
        "category": "transition",
        "atomic_mass": 112.41,
        "xpos": 12,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Indium",
        "symbol": "In",
        "number": 49,
        "category": "metal",
        "atomic_mass": 114.82,
        "xpos": 13,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Tin",
        "symbol": "Sn",
        "number": 50,
        "category": "metal",
        "atomic_mass": 118.71,
        "xpos": 14,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Antimony",
        "symbol": "Sb",
        "number": 51,
        "category": "metalloid",
        "atomic_mass": 121.76,
        "xpos": 15,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Tellurium",
        "symbol": "Te",
        "number": 52,
        "category": "metalloid",
        "atomic_mass": 127.6,
        "xpos": 16,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Iodine",
        "symbol": "I",
        "number": 53,
        "category": "halogen",
        "atomic_mass": 126.9,
        "xpos": 17,
        "ypos": 5,
        "phase": "Solid"
    },
    {
        "name": "Xenon",
        "symbol": "Xe",
        "number": 54,
        "category": "noble",
        "atomic_mass": 131.29,
        "xpos": 18,
        "ypos": 5,
        "phase": "Gas"
    },
    {
        "name": "Cesium",
        "symbol": "Cs",
        "number": 55,
        "category": "alkali",
        "atomic_mass": 132.91,
        "xpos": 1,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Barium",
        "symbol": "Ba",
        "number": 56,
        "category": "alkaline",
        "atomic_mass": 137.33,
        "xpos": 2,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Lanthanum",
        "symbol": "La",
        "number": 57,
        "category": "lanthanoid",
        "atomic_mass": 138.91,
        "xpos": 3,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Cerium",
        "symbol": "Ce",
        "number": 58,
        "category": "lanthanoid",
        "atomic_mass": 140.12,
        "xpos": 4,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Praseodymium",
        "symbol": "Pr",
        "number": 59,
        "category": "lanthanoid",
        "atomic_mass": 140.91,
        "xpos": 5,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Neodymium",
        "symbol": "Nd",
        "number": 60,
        "category": "lanthanoid",
        "atomic_mass": 144.24,
        "xpos": 6,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Promethium",
        "symbol": "Pm",
        "number": 61,
        "category": "lanthanoid",
        "atomic_mass": 145,
        "xpos": 7,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Samarium",
        "symbol": "Sm",
        "number": 62,
        "category": "lanthanoid",
        "atomic_mass": 150.36,
        "xpos": 8,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Europium",
        "symbol": "Eu",
        "number": 63,
        "category": "lanthanoid",
        "atomic_mass": 151.96,
        "xpos": 9,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Gadolinium",
        "symbol": "Gd",
        "number": 64,
        "category": "lanthanoid",
        "atomic_mass": 157.25,
        "xpos": 10,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Terbium",
        "symbol": "Tb",
        "number": 65,
        "category": "lanthanoid",
        "atomic_mass": 158.93,
        "xpos": 11,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Dysprosium",
        "symbol": "Dy",
        "number": 66,
        "category": "lanthanoid",
        "atomic_mass": 162.5,
        "xpos": 12,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Holmium",
        "symbol": "Ho",
        "number": 67,
        "category": "lanthanoid",
        "atomic_mass": 164.93,
        "xpos": 13,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Erbium",
        "symbol": "Er",
        "number": 68,
        "category": "lanthanoid",
        "atomic_mass": 167.26,
        "xpos": 14,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Thulium",
        "symbol": "Tm",
        "number": 69,
        "category": "lanthanoid",
        "atomic_mass": 168.93,
        "xpos": 15,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Ytterbium",
        "symbol": "Yb",
        "number": 70,
        "category": "lanthanoid",
        "atomic_mass": 173.05,
        "xpos": 16,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Lutetium",
        "symbol": "Lu",
        "number": 71,
        "category": "lanthanoid",
        "atomic_mass": 174.97,
        "xpos": 17,
        "ypos": 9,
        "phase": "Solid"
    },
    {
        "name": "Hafnium",
        "symbol": "Hf",
        "number": 72,
        "category": "transition",
        "atomic_mass": 178.49,
        "xpos": 4,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Tantalum",
        "symbol": "Ta",
        "number": 73,
        "category": "transition",
        "atomic_mass": 180.95,
        "xpos": 5,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Tungsten",
        "symbol": "W",
        "number": 74,
        "category": "transition",
        "atomic_mass": 183.84,
        "xpos": 6,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Rhenium",
        "symbol": "Re",
        "number": 75,
        "category": "transition",
        "atomic_mass": 186.21,
        "xpos": 7,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Osmium",
        "symbol": "Os",
        "number": 76,
        "category": "transition",
        "atomic_mass": 190.23,
        "xpos": 8,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Iridium",
        "symbol": "Ir",
        "number": 77,
        "category": "transition",
        "atomic_mass": 192.22,
        "xpos": 9,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Platinum",
        "symbol": "Pt",
        "number": 78,
        "category": "transition",
        "atomic_mass": 195.08,
        "xpos": 10,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Gold",
        "symbol": "Au",
        "number": 79,
        "category": "transition",
        "atomic_mass": 196.97,
        "xpos": 11,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Mercury",
        "symbol": "Hg",
        "number": 80,
        "category": "transition",
        "atomic_mass": 200.59,
        "xpos": 12,
        "ypos": 6,
        "phase": "Liquid"
    },
    {
        "name": "Thallium",
        "symbol": "Tl",
        "number": 81,
        "category": "metal",
        "atomic_mass": 204.38,
        "xpos": 13,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Lead",
        "symbol": "Pb",
        "number": 82,
        "category": "metal",
        "atomic_mass": 207.2,
        "xpos": 14,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Bismuth",
        "symbol": "Bi",
        "number": 83,
        "category": "metal",
        "atomic_mass": 208.98,
        "xpos": 15,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Polonium",
        "symbol": "Po",
        "number": 84,
        "category": "metal",
        "atomic_mass": 209,
        "xpos": 16,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Astatine",
        "symbol": "At",
        "number": 85,
        "category": "halogen",
        "atomic_mass": 210,
        "xpos": 17,
        "ypos": 6,
        "phase": "Solid"
    },
    {
        "name": "Radon",
        "symbol": "Rn",
        "number": 86,
        "category": "noble",
        "atomic_mass": 222,
        "xpos": 18,
        "ypos": 6,
        "phase": "Gas"
    },
    {
        "name": "Francium",
        "symbol": "Fr",
        "number": 87,
        "category": "alkali",
        "atomic_mass": 223,
        "xpos": 1,
        "ypos": 7,
        "phase": "Solid"
    },
    {
        "name": "Radium",
        "symbol": "Ra",
        "number": 88,
        "category": "alkaline",
        "atomic_mass": 226,
        "xpos": 2,
        "ypos": 7,
        "phase": "Solid"
    },
    {
        "name": "Actinium",
        "symbol": "Ac",
        "number": 89,
        "category": "actinoid",
        "atomic_mass": 227,
        "xpos": 3,
        "ypos": 7,
        "phase": "Solid"
    },
    {
        "name": "Thorium",
        "symbol": "Th",
        "number": 90,
        "category": "actinoid",
        "atomic_mass": 232.04,
        "xpos": 4,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Protactinium",
        "symbol": "Pa",
        "number": 91,
        "category": "actinoid",
        "atomic_mass": 231.04,
        "xpos": 5,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Uranium",
        "symbol": "U",
        "number": 92,
        "category": "actinoid",
        "atomic_mass": 238.03,
        "xpos": 6,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Neptunium",
        "symbol": "Np",
        "number": 93,
        "category": "actinoid",
        "atomic_mass": 237,
        "xpos": 7,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Plutonium",
        "symbol": "Pu",
        "number": 94,
        "category": "actinoid",
        "atomic_mass": 244,
        "xpos": 8,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Americium",
        "symbol": "Am",
        "number": 95,
        "category": "actinoid",
        "atomic_mass": 243,
        "xpos": 9,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Curium",
        "symbol": "Cm",
        "number": 96,
        "category": "actinoid",
        "atomic_mass": 247,
        "xpos": 10,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Berkelium",
        "symbol": "Bk",
        "number": 97,
        "category": "actinoid",
        "atomic_mass": 247,
        "xpos": 11,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Californium",
        "symbol": "Cf",
        "number": 98,
        "category": "actinoid",
        "atomic_mass": 251,
        "xpos": 12,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Einsteinium",
        "symbol": "Es",
        "number": 99,
        "category": "actinoid",
        "atomic_mass": 252,
        "xpos": 13,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Fermium",
        "symbol": "Fm",
        "number": 100,
        "category": "actinoid",
        "atomic_mass": 257,
        "xpos": 14,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Mendelevium",
        "symbol": "Md",
        "number": 101,
        "category": "actinoid",
        "atomic_mass": 258,
        "xpos": 15,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Nobelium",
        "symbol": "No",
        "number": 102,
        "category": "actinoid",
        "atomic_mass": 259,
        "xpos": 16,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Lawrencium",
        "symbol": "Lr",
        "number": 103,
        "category": "actinoid",
        "atomic_mass": 266,
        "xpos": 17,
        "ypos": 10,
        "phase": "Solid"
    },
    {
        "name": "Rutherfordium",
        "symbol": "Rf",
        "number": 104,
        "category": "transition",
        "atomic_mass": 267,
        "xpos": 4,
        "ypos": 7,
        "phase": "Solid"
    },
    {
        "name": "Dubnium",
        "symbol": "Db",
        "number": 105,
        "category": "transition",
        "atomic_mass": 268,
        "xpos": 5,
        "ypos": 7,
        "phase": "Solid"
    },
    {
        "name": "Seaborgium",
        "symbol": "Sg",
        "number": 106,
        "category": "transition",
        "atomic_mass": 269,
        "xpos": 6,
        "ypos": 7,
        "phase": "Solid"
    },
    {
        "name": "Bohrium",
        "symbol": "Bh",
        "number": 107,
        "category": "transition",
        "atomic_mass": 270,
        "xpos": 7,
        "ypos": 7,
        "phase": "Solid"
    },
    {
        "name": "Hassium",
        "symbol": "Hs",
        "number": 108,
        "category": "transition",
        "atomic_mass": 269,
        "xpos": 8,
        "ypos": 7,
        "phase": "Solid"
    },
    {
        "name": "Meitnerium",
        "symbol": "Mt",
        "number": 109,
        "category": "transition",
        "atomic_mass": 278,
        "xpos": 9,
        "ypos": 7,
        "phase": "Unknown"
    },
    {
        "name": "Darmstadtium",
        "symbol": "Ds",
        "number": 110,
        "category": "transition",
        "atomic_mass": 281,
        "xpos": 10,
        "ypos": 7,
        "phase": "Unknown"
    },
    {
        "name": "Roentgenium",
        "symbol": "Rg",
        "number": 111,
        "category": "transition",
        "atomic_mass": 282,
        "xpos": 11,
        "ypos": 7,
        "phase": "Unknown"
    },
    {
        "name": "Copernicium",
        "symbol": "Cn",
        "number": 112,
        "category": "transition",
        "atomic_mass": 285,
        "xpos": 12,
        "ypos": 7,
        "phase": "Unknown"
    },
    {
        "name": "Nihonium",
        "symbol": "Nh",
        "number": 113,
        "category": "metal",
        "atomic_mass": 286,
        "xpos": 13,
        "ypos": 7,
        "phase": "Unknown"
    },
    {
        "name": "Flerovium",
        "symbol": "Fl",
        "number": 114,
        "category": "metal",
        "atomic_mass": 289,
        "xpos": 14,
        "ypos": 7,
        "phase": "Unknown"
    },
    {
        "name": "Moscovium",
        "symbol": "Mc",
        "number": 115,
        "category": "metal",
        "atomic_mass": 290,
        "xpos": 15,
        "ypos": 7,
        "phase": "Unknown"
    },
    {
        "name": "Livermorium",
        "symbol": "Lv",
        "number": 116,
        "category": "metal",
        "atomic_mass": 293,
        "xpos": 16,
        "ypos": 7,
        "phase": "Unknown"
    },
    {
        "name": "Tennessine",
        "symbol": "Ts",
        "number": 117,
        "category": "halogen",
        "atomic_mass": 294,
        "xpos": 17,
        "ypos": 7,
        "phase": "Unknown"
    },
    {
        "name": "Oganesson",
        "symbol": "Og",
        "number": 118,
        "category": "noble",
        "atomic_mass": 294,
        "xpos": 18,
        "ypos": 7,
        "phase": "Unknown"
    }
];


// Dobereiner's triads data
const triads = [
    { 
        name: "Alkali Metals", 
        elements: [
            {symbol: 'Li', name: 'Lithium', atomicMass: 7},
            {symbol: 'Na', name: 'Sodium', atomicMass: 23},
            {symbol: 'K', name: 'Potassium', atomicMass: 39}
        ]
    },
    { 
        name: "Alkaline Earth Metals", 
        elements: [
            {symbol: 'Ca', name: 'Calcium', atomicMass: 40.1},
            {symbol: 'Sr', name: 'Strontium', atomicMass: 87.6},
            {symbol: 'Ba', name: 'Barium', atomicMass: 137.3}
        ]
    },
    { 
        name: "Halogens", 
        elements: [
            {symbol: 'Cl', name: 'Chlorine', atomicMass: 35.4},
            {symbol: 'Br', name: 'Bromine', atomicMass: 79.9},
            {symbol: 'I', name: 'Iodine', atomicMass: 126.9}
        ]
    },
    { 
        name: "Chalcogens", 
        elements: [
            {symbol: 'S', name: 'Sulfur', atomicMass: 32.1},
            {symbol: 'Se', name: 'Selenium', atomicMass: 78.9},
            {symbol: 'Te', name: 'Tellurium', atomicMass: 127.6}
        ]
    },
    { 
        name: "Transition Metals", 
        elements: [
            {symbol: 'Fe', name: 'Iron', atomicMass: 55.8},
            {symbol: 'Co', name: 'Cobalt', atomicMass: 58.9},
            {symbol: 'Ni', name: 'Nickel', atomicMass: 58.7}
        ]
    }
];

// Newlands' octaves data
const octaves = [
    ['H', 'Li', 'G', 'Bo', 'C', 'N', 'O'],
    ['F', 'Na', 'Mg', 'Al', 'Si', 'P', 'S'],
    ['Cl', 'K', 'Ca', 'Cr', 'Ti', 'Mn', 'Fe'],
    ['Co, Ni', 'Cu', 'Zn', 'Y', 'In', 'As', 'Se'],
    ['Br', 'Rb', 'Sr', 'Ce, La', 'Zr', 'Di, Mo', 'Ro, Ru'],
    ['Pd', 'Ag', 'Cd', 'U', 'Sn', 'Sb', 'Te'],
    ['I', 'Cs', 'Ba,V', 'Ta', 'W', 'Nb', 'Au'],
    ['Pt, Ir', 'Tl', 'Pb', 'Th', 'Hg', 'Bi', 'Os']
];

// DOM loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Make the first section visible
    document.getElementById('hero').classList.add('visible');
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', handleScroll);
    
    // Initialize with more elements if needed
    initializeMoreElements();
});

// Handle scroll events for animations
function handleScroll() {
    // Make sections visible when they enter viewport
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
            
            // If it's the history section, animate timeline items
            if (section.id === 'history') {
                animateTimelineItems();
            }
            
            // If it's the uses section, animate use cards
            if (section.id === 'uses') {
                animateUseCards();
            }
        }
    });
}

// Animate timeline items with a delay
function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 200);
    });
}

// Animate use cards with a delay
function animateUseCards() {
    const useCards = document.querySelectorAll('.use-card');
    useCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150);
    });
}

// Check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight - 150 &&
        rect.bottom >= 0
    );
}

// Navigate to a specific table view
function navigateTo(tableType) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('visible');
    });
    
    // Show the selected table section
    const tableSection = document.getElementById(`${tableType}-table`);
    tableSection.classList.remove('hidden');
    tableSection.classList.add('visible');
    
    // Render the appropriate table
    switch (tableType) {
        case 'modern':
            renderModernTable();
            break;
        case 'triads':
            renderTriads();
            break;
        case 'octaves':
            renderOctaves();
            break;
        case 'mendeleev':
            renderMendeleev();
            break;
    }
}

// Return to the main page
function showMainPage() {
    // Hide all table sections
    document.querySelectorAll('.table-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show all main sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('hidden');
    });
    
    // Scroll to explore section
    const exploreSection = document.getElementById('explore');
    exploreSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Re-trigger scroll effects
    handleScroll();
}

// Initialize with more elements if needed
function initializeMoreElements() {
    // This is where you would add code to populate the elements array
    // with more elements from an external source or hard-coded data
}

// Render the modern periodic table
function renderModernTable() {
    const tableContainer = document.getElementById('table');
    tableContainer.innerHTML = '';
    
    // Create a container for the table with proper spacing
    const tableGrid = document.createElement('div');
    tableGrid.className = 'periodic-table';
    tableContainer.appendChild(tableGrid);
    
    // Add description
    const description = document.createElement('div');
    description.className = 'table-description';
    description.innerHTML = `
        <p>The modern periodic table arranges elements by atomic number and electron configuration, 
        creating a systematic organization that reveals periodic trends in element properties.</p>
        <p>The table's current form was developed primarily by Henry Moseley in 1913, who showed 
        that elements should be arranged by atomic number rather than atomic weight.</p>
    `;
    

    // Create and add the legend
    const legend = document.createElement('div');
    legend.className = 'element-legend';
    legend.innerHTML = `
        <div class="legend-grid">
            <div class="legend-item">
                <span class="color-box alkali"></span>
                <span>Alkali Metals</span>
            </div>
            <div class="legend-item">
                <span class="color-box alkaline"></span>
                <span>Alkaline Earth Metals</span>
            </div>
            <div class="legend-item">
                <span class="color-box transition"></span>
                <span>Transition Metals</span>
            </div>
            <div class="legend-item">
                <span class="color-box metal"></span>
                <span>Post-Transition Metals</span>
            </div>
            <div class="legend-item">
                <span class="color-box metalloid"></span>
                <span>Metalloids</span>
            </div>
            <div class="legend-item">
                <span class="color-box nonmetal"></span>
                <span>Nonmetals</span>
            </div>
            <div class="legend-item">
                <span class="color-box halogen"></span>
                <span>Halogens</span>
            </div>
            <div class="legend-item">
                <span class="color-box noble"></span>
                <span>Noble Gases</span>
            </div>
            <div class="legend-item">
                <span class="color-box lanthanoid"></span>
                <span>Lanthanides</span>
            </div>
            <div class="legend-item">
                <span class="color-box actinoid"></span>
                <span>Actinides</span>
            </div>
        </div>
    `;
    
    // First, create an empty grid
    const totalRows = 10; // 7 main rows + lanthanoids + actinoids + spacing
    const totalCols = 18;
    for (let row = 1; row <= totalRows; row++) {
        for (let col = 1; col <= totalCols; col++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'element-cell empty';
            emptyCell.style.gridRow = row;
            emptyCell.style.gridColumn = col;
            tableGrid.appendChild(emptyCell);
        }
    }
    
    // Then place elements in the correct positions
    elements.forEach(el => {
        let ypos = el.ypos;
        
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${el.category}`;
        elementDiv.style.gridColumn = el.xpos;
        elementDiv.style.gridRow = ypos;
        
        // Determine group number - use 3 for lanthanides and actinides
        let groupNumber = el.category === 'lanthanoid' || el.category === 'actinoid' ? 3 : el.xpos;
        
        // Create element content
        elementDiv.innerHTML = `
            <div class="number">${el.number}</div>
            <div class="symbol">${el.symbol}</div>
            <div class="name">${el.name.length > 10 ? el.name.slice(0, 8) + '...' : el.name}</div>
            <div class="tooltip">
                <div>Group ${groupNumber}</div>
                <div>${el.name}</div>
                <div>Mass: ${el.atomic_mass}</div>
                <div>Phase: ${el.phase}</div>
            </div>
        `;
        
        // Add event listeners for hover effects
        elementDiv.addEventListener('mouseover', () => {
            elementDiv.classList.add('hovered');
        });
        
        elementDiv.addEventListener('mouseout', () => {
            elementDiv.classList.remove('hovered');
        });
        
        tableGrid.appendChild(elementDiv);
    });
    
    // Add labels for groups and periods
    addTableLabels(tableGrid);

    // Add the legend before the back button
    const backButton = tableContainer.querySelector('.back-btn');
    
    tableContainer.insertBefore(description, backButton);
    
}

// Helper function to add group and period labels
function addTableLabels(tableGrid) {
    // Group labels (top)
    for (let i = 1; i <= 18; i++) {
        const label = document.createElement('div');
        label.className = 'table-label group-label';
        label.textContent = i;
        label.style.gridRow = 0;
        label.style.gridColumn = i;
        tableGrid.appendChild(label);
    }
    
    // Period labels (left)
    for (let i = 1; i <= 7; i++) {
        const label = document.createElement('div');
        label.className = 'table-label period-label';
        label.textContent = i;
        label.style.gridRow = i;
        label.style.gridColumn = 0;
        tableGrid.appendChild(label);
    }
    
    // Labels for lanthanides and actinides
    const lanthanideLabel = document.createElement('div');
    lanthanideLabel.className = 'table-label series-label';
    lanthanideLabel.textContent = 'Lanthanides';
    lanthanideLabel.style.gridRow = 9;
    lanthanideLabel.style.gridColumn = 2;
    tableGrid.appendChild(lanthanideLabel);
    
    const actinideLabel = document.createElement('div');
    actinideLabel.className = 'table-label series-label';
    actinideLabel.textContent = 'Actinides';
    actinideLabel.style.gridRow = 10;
    actinideLabel.style.gridColumn = 2;
    tableGrid.appendChild(actinideLabel);
}


// Render Dobereiner's Triads
function renderTriads() {
    const container = document.getElementById('triads-container');
    container.innerHTML = '';
    container.className = 'triad-container';
    
    triads.forEach(triad => {
        const triadDiv = document.createElement('div');
        triadDiv.className = 'triad-group';
        
        triadDiv.innerHTML = `
            <div class="triad-title">${triad.name}</div>
            <div class="triad-elements">
                ${triad.elements.map(el => `
                    <div class="element">
                        <div class="symbol">${el.symbol}</div>
                        <div class="mass">${el.atomicMass}</div>
                    </div>
                `).join('')}
            </div>
            <div class="triad-property">
                <p>Mean of first and last: ${((triad.elements[0].atomicMass + triad.elements[2].atomicMass) / 2).toFixed(1)}</p>
                <p>Middle element: ${triad.elements[1].atomicMass}</p>
            </div>
        `;
        
        container.appendChild(triadDiv);
    });
}

// Render Newlands' Octaves
// Improved render function for Newlands' Octaves
function renderOctaves() {
    const container = document.getElementById('octaves-container');
    container.innerHTML = '';
    container.className = 'octave-container';
    
    // First, add an explanation
    const explanation = document.createElement('div');
    explanation.className = 'octaves-explanation';
    explanation.innerHTML = `
        <p>In 1865, John Newlands arranged the known elements by increasing atomic weight. 
        He noticed that every eighth element exhibited similar properties, 
        which he called the "Law of Octaves" (similar to musical octaves).</p>
        <p>Elements highlighted in the same column position show the pattern Newlands observed.</p>
    `;
    container.appendChild(explanation);
    
    // Create each row
    octaves.forEach((row, rowIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'octave-row';
        
        // Add each element in this row
        row.forEach((element, colIndex) => {
            const elementDiv = document.createElement('div');
            elementDiv.className = 'element';
            
            // If this element is in the same column position as the row number (modulo 7),
            // highlight it to show the octave pattern
            if (colIndex === rowIndex % 7) {
                elementDiv.classList.add('highlighted');
            }
            
            elementDiv.innerHTML = element;
            rowDiv.appendChild(elementDiv);
        });
        
        container.appendChild(rowDiv);
    });
}


// Render Mendeleev's Table
function renderMendeleev() {
    const container = document.getElementById('mendeleev-container');
    container.innerHTML = '';
    container.className = 'mendeleev-container';

    // Add explanation
    const explanation = document.createElement('div');
    explanation.className = 'mendeleev-explanation';
    explanation.innerHTML = `
        <p>Mendeleev's periodic table (1869) arranged elements by atomic weight and chemical properties.
        He left gaps for undiscovered elements and predicted their properties, which were later proven correct.</p>
    `;
    container.appendChild(explanation);

    // Create Mendeleev's table
    const tableDiv = document.createElement('div');
    tableDiv.className = 'mendeleev-table';

    // Mendeleev's original groups (I to VIII)
    const mendeleevGroups = [
        ['H 1', 'Li 7', 'Na 23', 'K 39', 'Cu 63', 'Rb 85', 'Ag 108', 'Cs 133', 'Au 197'],
        ['Be 9', 'Mg 24', 'Ca 40', 'Zn 65', 'Sr 87', 'Cd 112', 'Ba 137', 'Hg 201'],
        ['B 11', 'Al 27', 'Sc 44', 'Ga 70', 'Y 89', 'In 113', 'La 139', 'Tl 204'],
        ['C 12', 'Si 28', 'Ti 48', 'Ge 73', 'Zr 91', 'Sn 119', 'Ce 140', 'Pb 207'],
        ['N 14', 'P 31', 'V 51', 'As 75', 'Nb 93', 'Sb 122', 'Di 144', 'Bi 208'],
        ['O 16', 'S 32', 'Cr 52', 'Se 78', 'Mo 96', 'Te 128', '--', '--'],
        ['F 19', 'Cl 35', 'Mn 55', 'Br 80', '--', 'I 127', '--', '--'],
        ['--', '--', 'Fe 56', '--', 'Ru 104', '--', '--', '--'],
        ['--', '--', 'Co 59', '--', 'Rh 104', '--', '--', '--'],
        ['--', '--', 'Ni 59', '--', 'Pt 198', '--', '--', '--'],
        ['--', '--', '--', '--', 'Ir 198', '--', '--', '--'],
        ['--', '--', '--', '--', 'Os 199', '--', '--', '--']
    ];

    // Create table structure
    const table = document.createElement('table');
    table.className = 'mendeleev-grid';

    // Add group numbers (I to VIII)
    const headerRow = document.createElement('tr');
    for (let i = 0; i <= mendeleevGroups.length; i++) {
        const th = document.createElement('th');
        th.textContent = i === 0 ? '' : `Group ${toRomanNumeral(i)}`;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    // Add elements
    const maxRows = Math.max(...mendeleevGroups.map(g => g.length));
    for (let row = 0; row < maxRows; row++) {
        const tr = document.createElement('tr');
        
        // Add period number
        const periodTd = document.createElement('td');
        periodTd.className = 'period-number';
        periodTd.textContent = `Period ${row + 1}`;
        tr.appendChild(periodTd);

        // Add elements for each group
        for (let group = 0; group < mendeleevGroups.length; group++) {
            const td = document.createElement('td');
            if (mendeleevGroups[group][row]) {
                const [symbol, weight] = mendeleevGroups[group][row].split(' ');
                td.className = 'mendeleev-element';
                td.innerHTML = `
                    <div class="symbol">${symbol}</div>
                    <div class="weight">${weight}</div>
                `;
            } else {
                td.className = 'empty-cell';
                td.textContent = '--';
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    tableDiv.appendChild(table);
    container.appendChild(tableDiv);
}

// Helper function to convert numbers to Roman numerals
function toRomanNumeral(num) {
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
    return romanNumerals[num - 1] || num.toString();
}

// Filter elements by category
function filterCategory(category) {
    const elements = document.querySelectorAll('.element');
    
    elements.forEach(el => {
        if (category === 'all' || el.classList.contains(category)) {
            el.style.opacity = '1';
        } else {
            el.style.opacity = '0.3';
        }
    });
}
