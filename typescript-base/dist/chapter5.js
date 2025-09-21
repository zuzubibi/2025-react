// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
    Language["japanese"] = "ja";
})(Language || (Language = {}));
const user1 = {
    name: '이수빈',
    role: Role.ADMIN,
    lang: Language.korean,
};
const user2 = {
    name: '박준면',
    role: Role.USER,
    lang: Language.english,
};
const user3 = {
    name: '이대호',
    role: Role.GUEST,
    lang: Language.japanese
};
console.log(user1, user2, user3);
export {};
