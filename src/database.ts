export interface iProductData {
	id: number;
	name: string;
	band: string;
	category: 'Rock Classics' | 'Heavy Metal' | 'Soft Rock';
	albumImg: string;
	price: number;
}


export const database: Array<iProductData> = [
	{
		id: 1,
        band: 'Led Zeppelin',
        name: 'Mothership',
        category: "Rock Classics",
        albumImg: './assets/img/rock/LedZeppelin-Mothership.jpg',
        price: 350.00
    },
    {
        id: 2,
        band: 'Nirvana',
        name: 'Nevermind',
        category: "Rock Classics",
        albumImg: 'https://m.media-amazon.com/images/I/91G5ndi8yFL._AC_UY218_.jpg',
        price: 300.00
    },
    {
        id: 3,
        band: 'Pink Floyd',
        name: 'Animals',
        category: "Rock Classics",
        albumImg: './assets/img/rock/PinkFloyd-Animals.jpg',
        price: 370.00
    },
    {
        id: 4,
        band: 'Cream',
        name: 'Disraeli Gears',
        category: "Rock Classics",
        albumImg: './assets/img/rock/Cream-DisraeliGears.jpg',
        price: 325.00
    },
    {
        id: 5,
        band: 'Metallica',
        name: 'Ride The Lightning',
        category: "Heavy Metal",
        albumImg: './assets/img/rock/Metallica-RideTheLightning.jpg',
        price: 280.00
    },
    {
        id: 6,
        band: 'Black Sabbath',
        name: 'Paranoid',
        category: "Heavy Metal",
        albumImg: './assets/img/rock/BlackSabbath-Paranoid.jpg',
        price: 290.00
    },
    {
        id: 7,
        band: 'Deep Purple',
        name: 'Purpendicular',
        category: "Heavy Metal",
        albumImg: './assets/img/rock/DeepPurple-Purpendicular.jpg',
        price: 350.00
    },
    {
        id: 8,
        band: 'AC/DC',
        name: 'High Voltage',
        category: "Heavy Metal",
        albumImg: './assets/img/rock/ACDC-HighVoltage.jpg',
        price: 220.00
    },
    {
        id: 9,
        band: 'Creedence Clear Water',
        name: 'Pendulum',
        category: "Soft Rock",
        albumImg: './assets/img/rock/CreedenceClearwaterRevival-Pendulum.jpg',
        price: 330.00
    },
    {
        id: 10,
        band: 'The Beatles',
        name: 'Help',
        category: "Soft Rock",
        albumImg: './assets/img/rock/TheBeatles-Help.jpg',
        price: 340.00
    },
    {
        id: 11,
        band: 'Red Hot Chili Peppers',
        name: 'Californication',
        category: "Soft Rock",
        albumImg: './assets/img/rock/RedHotChiliPeppers-Californication.jpg',
        price: 210.00
    },
    {
        id: 12,
        band: 'Eagles',
        name: 'Hotel California',
        category: "Soft Rock",
        albumImg: './assets/img/rock/Eagles-HotelCalifornia.jpg',
        price: 350.00
    }
]
