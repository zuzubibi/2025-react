// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}
let user: User = {
    id: 1,
    name: '이정환',
    nickname: 'winterlood',
    birth: '1999.02.09',
    bio: "안녕하세요",
    location: '부천시',
}
let user2: User = {
    id: 2,
    name: '이수빈',
    nickname: 'winterlood',
    birth: '1999.02.09',
    bio: "안녕하세요",
    location: '서울시',
}

// 인덱스 시그니처
type countryCodes = {
    [key: string]: string;
}

let countryCodes: countryCodes = {
    korea: 'ko',
    UniteState: 'us',
    UnitedKingdom: 'uk',
}

type countryNumberCodes = {
    [key: string]: number;
    Korea: number;
}

let countryNumberCodes: countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}