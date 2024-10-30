let arr=[1,2,3];

arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

ArrayBuffer.unshift(5);
console.log(arr);

let arr2=[
    {
        name : 'Rahul',
        empId:3567,
        mailId:'mailme@gmail.com',
        Address :{
            'city Name': 'vijayawada',
            District:'Krishna district'
            Pin: 526894, 
    },
    Hobbies : ['Netflix','Tennis','coding'],
},
    {
        name : 'Ravi',
        empId:9867,
        mailId:'ravimail@gmail.com',
        Address :{
            'city Name': 'Guntur',
            District:'Prakasham district'
            Pin: 685479,  
    },
    Hobbies : ['Reading','Swimming','Baking'],
},   
{
    name : 'santhosh',
    empId:8876,
    mailId:'santhoshmail@gmail.com',
    Address :{
        'city Name': 'Warangal',
        District:'Hanamkonda district'
        Pin: 996587,  
},
Hobbies : ['Gym','Reading Novels'],
},   
{
    name : 'Surya',
    empId:3469,
    mailId:'suryamail@gmail.com',
    Address :{
        'city Name': 'Nizamabad',
        District:'Nizamabad district'
        Pin: 648597,  
},
Hobbies : ['Badminton','E-Sports','Netflix'],
},
{
    name : 'Kiran',
    empId:8864,
    mailId:'kiranmail@gmail.com',
    Address :{
        'city Name': 'Karimnagar',
        District:'Karimnagar district'
        Pin: 648597, 
},
Hobbies : ['Badminton','E-Sports','Netflix'],
}, 
{
    name : 'Kiran',
    empId:8864,
    mailId:'kiranmail@gmail.com',
    Address :{
        'city Name': 'Karimnagar',
        District:'Karimnagar district'
        Pin: 666954, 
},
Hobbies : ['Gaming','Cooking','Music'],
}, 
];
arr2.map((ele))=>{
console.log(ele.name);
let arr3=[];
Object.keys(ele.address).map((item))=>{
    arr3.push(ele.address[item]);
});
console.log(arr3);
ele.Hobbies.forEach((hobby))=> {
    console.log(hobby);
 });
});