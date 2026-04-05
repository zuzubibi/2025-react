"use strict";
/**
 *  기본 타입간의 호환성
 */
let num1 = 10;
let num2 = 10;
num1 = num2;
let animal = {
    name: '기린',
    color: 'yellow',
};
let dog = {
    name: '돌돌이',
    color: "brown",
    breed: '진도',
};
animal = dog;
let book;
let programmingBook = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    skill: "reactjs",
};
book = programmingBook;
// programmingBook = book;
/**
 * 초과 프로퍼티 검사
 * 특징: 선언할때 객체 리터럴로 값을 명시할때, 만약 없는 프로퍼티도 같이 등록하면 오류남.
 * 다만, 할당은 아님.
 */
let book2 = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    // skill: "reactjs ",
};
let book3 = programmingBook;
