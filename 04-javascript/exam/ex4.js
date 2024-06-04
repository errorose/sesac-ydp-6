// 내장 메소드 실습

/**
 *  1 ~ 100 까지의 배열을 for 문을 사용해서 만들기!
 *  그리고 해당 배열의 합을 
 *      - for 문
 *      - for of 문
 *      - forEach 문을 사용해서 구하기   
 */

let arr = [];

for(let i = 1; i <= 100; i++ ){
    arr.push(i);
}
console.log(arr);

// for 문
let sumFor = 0;

for(let i = 0; i < arr.length; i++){
    sumFor = sumFor + arr[i];
}
console.log(sumFor);

// for of 문
let sumForOf = 0;
for(let num of arr){
    sumForOf = sumForOf + num;
}
console.log(sumForOf);

// forEach 문
let sumForEach = 0;
arr.forEach(function(num){
    sumForEach = sumForEach + num;
})
console.log(sumForEach);

/**
 *    let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
 *    let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];
 *      - 두 배열에서 동일한 요소만을 가지는 배열 same 만들기
 *      - 두 배열에서 서로 다른 요소만을 가지는 배열 diff 만들기
 * 
 *      - 참고)) fruits1은 fruits2를 포함하고 있습니다.  
 */

let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

let same = [];
let diff = [];

// fruits1을 반복하며 fruits2에도 있는지 확인
// 있으면 same[]에 추가
// 없으면 diff[]에 추가

for(let i = 0; i < fruits1.length; i++){
    if(fruits2.includes(fruits1[i])){
        same.push(fruits1[i]);
    }else{
        diff.push(fruits1[i]);
    }
}

// fruits2를 반복하며 fruits1에 없는지 확인
// 없으면 diff[]에 추가

for(let i = 0; i < fruits2.length; i++){
    if(!fruits1.includes(fruits2[i])){
        diff.push(fruits2[i]);
    }
}
console.log(same);
console.log(diff);