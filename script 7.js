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

let usres data = [{
            user Id: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        },
        {
            user Id: 1,
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: false,
        },
        {
            user Id: 1,
            id: 3,
            title: 'fugiat veniam minus',
            completed: false,
        },
        {
            user Id: 1,
            id: 4,
            title: 'et porro tempora',
            completed: false,
        },
        {
            user Id: 1,
            id: 5,
            title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
            completed: false,
        },
        user Id: 1,
        id: 6,
        title: 'qui ullam ratione quibusdam voluptatem quia omnis ',
        completed: false,
    },
    user Id: 1,
    id: 7,
    title: 'illo expedita consequatur quia in',
    completed: false,
},
user Id: 1,
    id: 8,
    title: 'quo adipisci enim quam ut ab',
    completed: false,
},
user Id: 1,
    id: 9,
    title: 'molestiae perspiciants ipsa',
    completed: false,
},
user Id: 1,
    id: 10,
    title: 'illo est ratione doloremque quia maiores aut',
    completed: false,
},
];

const getData = () => {
    const mypromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(usersData);
        }, 3000);
    });
    return mypromise;
};

const myfun = async() => {
    const x = await getData();
    console.log(x);
    x.map((item) => {
        console.log(item.title);
    });
};

myfun();

//spread operator

const spreadFunction = () => {
    let newArr = [...resturantList, [1, 2, 3]];
    console.log(newArr);
};

spreadFunction();

//rest operator

const restFunction = (...args) => {
        args.map((ele => {
                console.log(ele);
            });
        };

        restFunction(...resturantList);