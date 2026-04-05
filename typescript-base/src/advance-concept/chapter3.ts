/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */


/**
 * 1. 합집합 -> Union 타입
 * union1은 Dog
 * union2는 Person
 * union3는 Dog와 Person의 교집합
 * union4는 두 집합에 포함되지 않는 것
 */

let a: string | number | boolean | undefined | {};
a = 1;
a = "hello";

a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
}


let union2: Union1 = {
    name: "",
    language: '',
}

let union3: Union1 = {
    name: '',
    color: '',
    language: '',
}

// let union4: Union1 = {
//     name: '',
// }



/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;

type Dog1 = {
  name: string;
  color: string;
};

type Person1 = {
  name: string;
  language: string;
};

type Intersection = Dog1 & Person1;


let intersection: Intersection = {
    name: '',
    color: '',
    language: '',
}