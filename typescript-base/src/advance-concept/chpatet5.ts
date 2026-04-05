/**
 * 타입 단언 (type Assertion)
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = '이수빈';
person.age = 27;

type Dog = {
    name: string,
    color: string
};

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
} as Dog;


/**
 * 타입 단언의 규칙
 * 단언식 = 값 as 단언
 * A as B
 * A가 B의 Super type이거나
 * A가 B의 Sub type이어야 함 
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string; // 다중 단언 (안좋은 방법임..)


/**
 * const 단언
 */

let num4 = 10 as const;

const cat = {
    name: '야옹이',
    color: 'yellow'
} as const;

// cat.name = ''

/**
 * Non Null 단언
 * -> 위험하기 때문에 확실할 떄만 사용해야함.
 */

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: '게시글1',
    author: '이수빈'
};

const len: number = post.author!.length;