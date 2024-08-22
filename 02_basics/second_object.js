const target = {};
target.name = "avinash";
target.email = "avinashsahani66gmail.com";
target.school = 'subhagi devi iner college';
target.age = 56;

// console.log(target);

const myoObj = new Object();

const multi_obj = {
    name: 'kaju',
    education: {
        graduation: 2024,
        inter: 2020,
        highSchool: 2018,
    },
    id: 65,
}

console.log(multi_obj.name);
console.log(multi_obj.education.graduation);
console.log(multi_obj.id);




const obj = {
    id: 5,
    name: 'anshu',
    age: 56,
    location: 'noida',
};
const obj_two = {
    id: 6,
         full_name: 'anshu',
         live: 'utter pradesh',
         city: 'mau',
};

const otherObj = {obj, obj_two};
// console.log(otherObj);
const ont_three = Object.assign({},obj, obj_two);
// console.log(ont_three);

const spreadObj = {...obj, ...obj_two};
console.log(spreadObj);
