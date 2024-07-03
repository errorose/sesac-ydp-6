// crypto
// - Node.js 내장 모듈
// - 암호화 기능 제공
// - bcrypt 모듈 보다 범용성이 큼

// crypto 내장 모듈을 불러오기
const crypto = require('crypto');

// createHash()
// - 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 함수

// 매개변수로 받은 pw를 암호화하는 함수
const createHashedPw = (pw) => {
    // createHash(알고리즘).update(암호화할값).digest(인코딩방식)
    return crypto.createHash('sha512').update(pw).digest('base64');
}

// 해시 함수의 한계: 같은 input에 대해서 같은 암호화된 output이 출력됨
// -> 평문(input)으로 되돌아 갈수는 없지만 output이 동일하다면 input이 동일함까지는 유추 가능 
// (레인보우 테이블에서도 암호화된 output을 역추적해서 찾아낼 수도 있음)
console.log(createHashedPw('1234'));
console.log(createHashedPw('1234')); // 같은 pw가 들어오면 같은 hash 값을 반환
console.log(createHashedPw('1233')); // 미세한 변화에도 hash 값은 완전히 다름

// --------------------------------------------
// pbkdf2
// - 비밀번호 기반 키 도출 함수로 주로 비밀번호 저장할 때 사용

// 단방향 암호화 생성 함수
// saltAndHashPw: 임의의 salt값을 생성한 후, pbkdf2Sync함수를 사용해서 해당 솔트와 비밀번호를 기반으로 해시를 생성
const saltAndHashPw = (pw) => {
    const salt = crypto.randomBytes(16).toString('base64'); // salt 생성
    const iterations = 100000; // 반복 횟수
    const keylen = 64; // 생성할 키의 길이
    const digest = 'sha512'; // 해시 알고리즘

    // pbkdf2Sync(비밀번호_원문, 솔트, 반복횟수, 키의 길이, 알고리즘)
    const hash = crypto
        .pbkdf2Sync(pw, salt, iterations, keylen, digest) // pw 값을 암호화 
        .toString('base64'); // 암호화된 Buffer 형식의 데이터를 "base64 문자열로 변환"해서 저장하거나 전송하기 쉽도록

    return {
        salt, hash
    }
}

// --------------------------------------------
// 비밀번호 비교 함수
const comparePw = (inputPw, savedSalt, savedHash) => {
    // saltAndHashPw 함수에서 정의한 값들이랑 일치
    const iterations = 100000; // 반복 횟수
    const keylen = 64; // 생성할 키의 길이
    const digest = 'sha512'; // 해시 알고리즘

    const hash = crypto
        .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, digest) 
        .toString('base64');
    
    // hash: 사용자가 주장하는 비밀번호를 savedSalt와 조합해서 암화한 해시 값
    // savedHash: 정답 비밀번호에 대한 해시 값

    return hash === savedHash;
}

// --------------------------
// 암호 비교 예제
console.log('');

const password = '1234!'; // 정답 비밀번호

// 비밀번호 암호화
const { salt, hash } = saltAndHashPw(password);
console.log(`Salt: ${salt} // Hash: ${hash}`);

const inputPassword = '1234!#'; // 주장하는 비밀번호
const isMatch = comparePw(inputPassword, salt, hash); 
console.log(`비밀번호가 ${isMatch ? '일치합니다.' : '일치하지 않습니다.'}`);