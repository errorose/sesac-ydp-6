// JSON
const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam"]
}`;

console.log(car);   // format: JSON

console.log('-------------------------');

// 역직렬화: JSON.parse() -> 통신하여 받은 데이터를 객체로 변환
// json to js obj (json을 js obj로 바꾸겠다.)
const obj = JSON.parse(car);
console.log(obj);   // js obj

console.log('-------------------------');

// obj 변수는 js object이므로 .(dot)/[] 연산자를 이용해 키 값에 접근 가능
console.log(obj.model); // ONIQ 5
console.log(obj.price); // 50000000
console.log(obj.hello); // undefined (hello라는 키 값이 존재하지 않으므로)

console.log('-------------------------');

// 직렬화: JSON.stringify() -> 통신하기 쉬운 포멧(JSON)으로 변환
// js obj to json
const json = JSON.stringify(obj);
console.log(json, typeof json);

console.log('-------------------------');

// json 변수는 JSON 형태의 "문자열(string)" 이므로
// .(dot)/[] 연산자를 이용해 키 값에 접근이 불가능
console.log(json.model); // undefined
console.log(json.price); // undefined
console.log(json.hello); // undefined

console.log('-------------------------');

// json 변수는 string 타입이므로
// string 타입에 쓸 수 있는 내장 메소드들은 쓸 수 있음!
console.log(json.split(""));
console.log(json.toUpperCase(""));


