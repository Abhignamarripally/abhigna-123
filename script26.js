class EmployeeData {
    emp1 = {
            name: 'Ravi',
            empId: 9867,
            mailId: 'ravimail@gmail.com',
            Address: {
                'city Name': 'Guntur',
                District: 'Prakasham district'
                Pin: 685479,
            },
            Hobbies: ['Reading', 'Swimming', 'Baking'],
        },
        emp2 = {
            name: 'santhosh',
            empId: 8876,
            mailId: 'santhoshmail@gmail.com',
            Address: {
                'city Name': 'Warangal',
                District: 'Hanamkonda district'
                Pin: 996587,
            },
            Hobbies: ['Gym', 'Reading Novels'],
        },
        emp3 = {
            name: 'Surya',
            empId: 3469,
            mailId: 'suryamail@gmail.com',
            Address: {
                'city Name': 'Nizamabad',
                District: 'Nizamabad district'
                Pin: 648597,
            },
            Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
        },
        emp4 = {
            name: 'Kiran',
            empId: 8864,
            mailId: 'kiranmail@gmail.com',
            Address: {
                'city Name': 'Karimnagar',
                District: 'Karimnagar district'
                Pin: 648597,
            },
            Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
        },
        emp5 = {
            name: 'Kiran',
            empId: 8864,
            mailId: 'kiranmail@gmail.com',
            Address: {
                'city Name': 'Karimnagar',
                District: 'Karimnagar district'
                Pin: 666954,
            },
            Hobbies: ['Gaming', 'Cooking', 'Music'],
        },
        const empData = new EmployeeData();

    const body = document.querySelector('#body');

    console.log(body);

    const mainbox = document.createElement('div');
    mainbox.className = 'mainbox';

    body.appendChild(mainbox);
    Object.keys(empData).map((emp, index) => {
                const empbox = document.createElement('div');
                empbox.className = 'emp${index+1}';

                const h2 = document.createElement('h2');
                h2.innerHTML = 'Name:${empData[emp].name}';

                const h3 = document.createElement('h3');
                h3.innerHTML = 'Employee Id:${empData}[emp].empId}';

                const addBox = document.createElement('div');
                addBox.className = 'addressBox';

                const h32 = document.createElement('h32');
                h32.innerHTML = 'Address';

                addBox.appendChild(h32);

                object.keys(empData[emp].Address.map((add)) => {
                        const addComp = document.createElement('p');
                        addComp.innerHTML = '<b>${add}:</b> ${empData[emp].Address'
                    };

                    addBox.appendChild(addComp);
                });

            const hobbies = document.createElement('p';
                const hobHeading = document.createElement('span'); hobHeading.innerHTML = '<strong>Hobbies</strong>;

                hobbies.appendChild(hobHeading);

                empData[emp].Hobbies.map((hobby, index) => {
                    const hobbiesLength = empData[emp].Hobbies.length;
                    const eachHobby = document.createElement('span');

                    if (index + 1 !== hobbiesLength) {
                        eachHobby.innerHTML = '${hobby}.';
                    } else {
                        eachHobby.innerHTML = '${hobby}.';
                    }
                    hobbies.appendChild(eachHobby);
                }); empbox.appendChild(h2); empbox.appendChild(h3); empbox.appendChild(addBox); empbox.appendChild(hobbies); mainbox.appendChild(empbox);
            }
            0; console.log(object.keys(empData));