/**
 * 타입 추론
 * let이 const 보다 범용적으로 사용할 수 있게 한다.
 * -> 타입 넓히기
 */

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: '이수빈',
    profile: {
        nickname: 'winterwood',
    },
    urls: ['https://winterwood.com'],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(msg = "hello") {
    return "hello";
}


// ------ any 타입의 진화 ----------
let d; // 암묵적으로 any 타입이 됨
d = 10; // any -> number로 진화
d.toFixed();

d = "hello"; // number -> string으로 진화
d.toUpperCase();
// d.toFixed();
//---------------------------------


const num = 10;
const str = "hello";

let arr = [1, "string"];



