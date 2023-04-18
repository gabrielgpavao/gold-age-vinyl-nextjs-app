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
        albumImg: 'https://m.media-amazon.com/images/I/91P0awybuML._AC_UL320_.jpg',
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
        albumImg: 'https://m.media-amazon.com/images/I/918SLRbvSfL._AC_UL320_.jpg',
        price: 370.00
    },
    {
        id: 4,
        band: 'Cream',
        name: 'Disraeli Gears',
        category: "Rock Classics",
        albumImg: 'https://m.media-amazon.com/images/I/91ZABdpeywL._AC_UL320_.jpg',
        price: 325.00
    },
    {
        id: 5,
        band: 'Metallica',
        name: 'Ride The Lightning',
        category: "Heavy Metal",
        albumImg: 'https://m.media-amazon.com/images/I/71VpqI19tpL._AC_UL320_.jpg',
        price: 280.00
    },
    {
        id: 6,
        band: 'Black Sabbath',
        name: 'Paranoid',
        category: "Heavy Metal",
        albumImg: 'https://m.media-amazon.com/images/I/61EvGaXSOVL._AC_UL320_.jpg',
        price: 290.00
    },
    {
        id: 7,
        band: 'Deep Purple',
        name: 'Purpendicular',
        category: "Heavy Metal",
        albumImg: 'https://m.media-amazon.com/images/I/81R2zy3h5IL._AC_UL320_.jpg',
        price: 350.00
    },
    {
        id: 8,
        band: 'AC/DC',
        name: 'High Voltage',
        category: "Heavy Metal",
        albumImg: 'https://m.media-amazon.com/images/I/51lcSGjzc0L._AC_UL320_.jpg',
        price: 220.00
    },
    {
        id: 9,
        band: 'Creedence Clear Water',
        name: 'Pendulum',
        category: "Soft Rock",
        albumImg: 'https://m.media-amazon.com/images/I/71-or3I6YJL._AC_UL320_.jpg',
        price: 330.00
    },
    {
        id: 10,
        band: 'The Beatles',
        name: 'Help',
        category: "Soft Rock",
        albumImg: 'https://m.media-amazon.com/images/I/816hQnNLGFL._AC_UL320_.jpg',
        price: 340.00
    },
    {
        id: 11,
        band: 'Red Hot Chili Peppers',
        name: 'Californication',
        category: "Soft Rock",
        albumImg: 'https://m.media-amazon.com/images/I/81kKCMLtpBL._AC_UL320_.jpg',
        price: 210.00
    },
    {
        id: 12,
        band: 'Eagles',
        name: 'Hotel California',
        category: "Soft Rock",
        albumImg: 'https://m.media-amazon.com/images/I/51Qie8IUzgL._AC_UL320_.jpg',
        price: 350.00
    }
]
