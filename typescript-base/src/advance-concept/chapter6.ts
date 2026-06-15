/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
    name: string,
    age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date: getTime
function func(value: number | string | Date | null | Person) {
    if (typeof value === 'number') {
        console.log(value.toFixed());
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}

func(21.322332);
func("이수빈");
func('2024-03-04');
