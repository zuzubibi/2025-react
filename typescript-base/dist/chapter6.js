// any
// 특정 변수의 타입을 우리가 확실히 모를때
// 타입 검사를 다 없앰 (타입스크립트의 이점을 없애는 것) -> 런타임에러 나올 가능성 높음
let anyVar = 10;
anyVar = 'hello';
anyVar = true;
anyVar = {};
anyVar = () => { };
// anyVar.toUpperCase();
// anyVar.toFixed();
let num = 10;
num = anyVar;
// unknown
// any와 달리 어떤 변수에 할당을 못함 (타입 정제 이후에는 가능함)
let unknownVar;
unknownVar = "";
unknownVar = 10;
unknownVar = () => { };
if (typeof unknownVar === 'number') {
    num = unknownVar;
}
export {};
