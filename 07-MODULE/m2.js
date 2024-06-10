const add = (a,b)=>{
    return a+b;
}

const subtract = (a,b)=>{
    return a-b;
}
// add함수는 add에 저장, subtract함수는 subtract에 저장
// module.exports = {
//     add:add,
//     subtract:subtract
// }

// 이름이 같을때는 하나만 써도 됨.
module.exports = {
    add,
    subtract
}