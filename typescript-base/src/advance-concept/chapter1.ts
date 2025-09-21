/**
 * Unknown 타입
 * 특징: 모든 타입이 업캐스팅 가능하지만, Unknown 타입을 대상으로 다운캐스팅은 불가
 */

function unKnownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}


/**
 * Never 타입
 * 특징: 모든 타입의 서브 타입이다. (공집합의 개념임) 그래서 업캐스팅 가능하지만 다른 숫자들로 다운 캐스팅하면 안됨
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10;
    // let never2: never = 'hello';
    // let never3: never = true;
}

/**
 * Void 타입
 * 특징: void는 undefined의 수퍼타입!!!
 */

function voidExam() {
    function voidFunc(): void {
        console.log('hello');
        return undefined;
    }
    let voidVar: void = undefined;
}

/**
 * any 타입
 * 특징: never타입만 제외하고 모든 타입의 수퍼 타입으로도 위치하며 서브 타입으로도 위치 할수있다.
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    // neverVar = anyVar;

}