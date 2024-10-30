const ratingData = [
    { resturant: 'KFC', rating: 5 },
    { resturant: 'Burger King', rating: 4 },
    { resturant: 'KFC', rating: 3 },
    { resturant: 'Domino', rating: 2 },
    { resturant: 'Subway', rating: 3 },
    { resturant: 'Domino', rating: 1 },
    { resturant: 'Subway', rating: 4 },
    { resturant: 'Pizza Hut', rating: 5 },
];

const avgRating = () => {
        const headers = Array.from(
                new Set(ratingData.map(({ resturant }) => resturant)) let arr = []; headers.map((head) => {
                        let total = 0;
                        let count = 0;
                        const filteredratingData = ratingData.filter(
                            (obj) => obj.resturant == head
                        );
                        filteredratingData.map((item) => {
                            total = filteredratingData.reduce((prev, next) => prev + next.rating, 0);
                            count++;
                        });
                        arr.push({
                            resturant: head,
                            avgRating: (total / count.toFixed(2));
                        });
                        return arr;
                    };

                    const arr = avgRating();

                    console.log(arr);

                    console.log(arr.filter((item) => item.avgRating >= 4));