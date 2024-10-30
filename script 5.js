class resturantManager {
    resturantList = [{
            id: 1,
            resturantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi',
        },
        {
            id: 2,
            resturantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi',
        },
        {
            id: 3,
            resturantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune',
        },
        {
            id: 4,
            resturantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai',
        },
    ];
    printAllResturantNames = () => {
        return this.resturantList.map((resturant)) => resturant.(resturantName);
    };
    filterResturantByCity = (cityName) => {
        return this.resturantList.filter(
            (resturant) => resturant.city == cityName
        );
    };
}
const resturantobj = new resturantManager();
console.log(resturantobj).printAllResturantNames());
console.log(resturantobj).filterResturantByCity('Pune'));

const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getTime());
console.log(date.getHours());

console.log('//Math');

console.log(Math.round(23.456));
console.log(Math.ceil(45.75));
console.log(Math.floor(95.142));
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.random());