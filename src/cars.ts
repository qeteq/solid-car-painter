export interface Car {
    name: string;
    slice: [x: number, y: number, width: number, height: number];
    hue: number;
}

const cars: Car[] = [
    {
        name: "Ambulance",
        slice: [59, 24, 38, 21],
        hue: 0,
    },
    {
        name: "Buggy",
        slice: [154, 160, 23, 14],
        hue: 209,
    },
    {
        name: "Bus",
        slice: [0, 113, 45, 21],
        hue: 134,
    },
    {
        name: "School Bus",
        slice: [0, 92, 46, 21],
        hue: 43,
    },
    {
        name: "Convertible",
        slice: [122, 97, 32, 13],
        hue: 209,
    },
    {
        name: "Cycle",
        slice: [103, 12, 16, 10],
        hue: 43,
    },
    {
        name: "Low Cycle",
        slice: [66, 175, 16, 8],
        hue: 134,
    },
    {
        name: "Firetruck",
        slice: [44, 154, 44, 21],
        hue: 0,
    },
    {
        name: "Formula 1",
        slice: [97, 22, 33, 9],
        hue: 0,
    },
    {
        name: "Hot-Dog Van",
        slice: [47, 72, 40, 29],
        hue: 0,
    },
    {
        name: "Kart",
        slice: [44, 175, 22, 8],
        hue: 0,
    },
    {
        name: "Police",
        slice: [88, 147, 33, 14],
        hue: 209,
    },
    {
        name: "Riot",
        slice: [45, 113, 40, 21],
        hue: 209,
    },
    {
        name: "Rounded 1",
        slice: [122, 42, 32, 13],
        hue: 134,
    },
    {
        name: "Rounded 2",
        slice: [122, 110, 31, 12],
        hue: 0,
    },
    {
        name: "Rounded 3",
        slice: [118, 134, 33, 11],
        hue: 43,
    },
    {
        name: "Scooter",
        slice: [121, 174, 15, 9],
        hue: 0,
    },
    {
        name: "Sedan 1",
        slice: [130, 28, 29, 13],
        hue: 134,
    },
    {
        name: "Sedan 2",
        slice: [153, 70, 29, 13],
        hue: 209,
    },
    {
        name: "Vintage Sedan",
        slice: [82, 134, 36, 13],
        hue: 209,
    },
    {
        name: "Sports Convertible",
        slice: [119, 122, 33, 11],
        hue: 0,
    },
    {
        name: "Sport Car 1",
        slice: [122, 70, 29, 11],
        hue: 134,
    },
    {
        name: "Racing Car",
        slice: [85, 122, 34, 12],
        hue: 43,
    },
    {
        name: "Sport Car 2",
        slice: [103, 0, 33, 12],
        hue: 0,
    },
    {
        name: "Sport Car 3",
        slice: [97, 31, 33, 11],
        hue: 43,
    },
    {
        name: "Station",
        slice: [87, 81, 34, 13],
        hue: 0,
    },
    {
        name: "SUV 1",
        slice: [122, 55, 31, 15],
        hue: 0,
    },
    {
        name: "Closed SUV",
        slice: [154, 83, 28, 15],
        hue: 0,
    },
    {
        name: "SUV 2",
        slice: [153, 55, 30, 15],
        hue: 134,
    },
    {
        name: "Large SUV",
        slice: [121, 159, 33, 15],
        hue: 43,
    },
    {
        name: "Military SUV",
        slice: [154, 98, 28, 14],
        hue: 134,
    },
    {
        name: "Travel SUV",
        slice: [121, 81, 32, 16],
        hue: 43,
    },
    {
        name: "Taxi",
        slice: [121, 145, 33, 14],
        hue: 43,
    },
    {
        name: "Tow Truck",
        slice: [0, 134, 45, 20],
        hue: 0,
    },
    {
        name: "Tractor",
        slice: [154, 142, 24, 18],
        hue: 134,
    },
    {
        name: "Transport",
        slice: [87, 64, 35, 17],
        hue: 209,
    },
    {
        name: "Truck",
        slice: [0, 24, 59, 24],
        hue: 43,
    },
    {
        name: "Cabin Truck",
        slice: [48, 48, 39, 24],
        hue: 209,
    },
    {
        name: "Vintage Cabin Truck",
        slice: [152, 122, 30, 20],
        hue: 0,
    },
    {
        name: "Dark Truck",
        slice: [85, 101, 37, 21],
        hue: 43,
    },
    {
        name: "Delivery Truck",
        slice: [0, 154, 44, 24],
        hue: 134,
    },
    {
        name: "Tank Track",
        slice: [0, 0, 65, 24],
        hue: 43,
    },
    {
        name: "Van",
        slice: [88, 161, 33, 17],
        hue: 134,
    },
    {
        name: "Flat Van",
        slice: [45, 134, 37, 17],
        hue: 134,
    },
    {
        name: "Large Van",
        slice: [87, 45, 35, 19],
        hue: 209,
    },
    {
        name: "Small Van",
        slice: [130, 12, 31, 16],
        hue: 134,
    },
    {
        name: "Vendor Truck",
        slice: [65, 0, 38, 22],
        hue: 134,
    },
    {
        name: "Vintage",
        slice: [46, 101, 36, 12],
        hue: 209,
    },
];

cars.sort((a, b) => a.name.localeCompare(b.name));

export { cars };
