// 구조분해 할당

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ['a', 'b', 'c'];

// const [one, two, three, four, five] = arr1; // 변수의 값이 중복되면 지워지므로 arr1의 값을 분해해서 [변수]에 저장. (순서중요!)
// console.log(one, two, three, four, five);

// const [x, y, z, alpha] = arr2;
// console.log(x, y, z, alpha);    // 변수에 순서대로 들어가는데 마지막은 값이 없으므로 undefined 뜸

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 변수값의 교환, 2개의 변수값을 교환할때 제3의 변수를 사용했어야했다. 그러나 지금은 x
// let num1 = 1;
// let num2 = 2;

// console.log('Before : ', num1, num2);
// [num2, num1] = [num1, num2]
// console.log('After : ', num1, num2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 디폴트값을 지정할 수 있다.
// const lists = ['apple', 'grape'];
// [f1, f2, f3='orange'] = lists;  // 값이 안들어오면 기본값으로 'orange' 지정
// console.log(f1, f2, f3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 객체, object : key 와 value, {}
// const obj = {
//     title : '엘리먼트',
//     content : 'fun',
//     num : 5
// }
// . 표기법
// console.log(obj.num);
// console.log(obj.content);
// console.log(obj.title);
// console.log(obj['title']);
// console.log(obj['content']);
// console.log(obj['num']);

// console.log('-----------------');

// 객체 구조 분해, 디폴트값을 줄수도 있다.
// const {num, title, content, star=100} = obj;
// console.log(num, title, content, star);

// console.log('-----------------');

// const {a1, b1, c1} = obj;   // 같은 이름을 사용해야 한다. (key)
// console.log(a1, b1, c1);    // 결과는 undefined

// undefined : 변수는 할당되었지만 (초기화는 됨), 초기화된 변수에 값이 할당되지 않음.
// let a; // 초기화는 했지만 값을 할당하진 않음.
// let a = 20; // 초기화와 동시에 값을 할당.

// console.log('-----------------');

const lectureInfo = {
    name : 'Coding on',
    part : 'web',
    leader : 'Kim',     // , 맨 마지막에 넣어도 에러x
}
// console.log(lectureInfo);
function getInfo(lecture){
    const {name, part, leader} = lecture;
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`
    return output;
}
const result = getInfo(lectureInfo);
console.log(result);
