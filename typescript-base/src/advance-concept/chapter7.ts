/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
    tag: 'ADMIN';
    name: string;
    kickCount: number;
};

type Member = {
    tag: 'MEMBER';
    name: string;
    point: number;
};

type Guest = {
    tag: 'GUEST';
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;


// admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// member -> {name}님 현재까지 {point}모았습니다.
// Guset -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
    if (user.tag === 'ADMIN') {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if (user.tag === 'MEMBER') {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    } else if (user.tag === 'GUEST') {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    }
}
function login2(user: User) {
    switch (user.tag) {
        case 'ADMIN': {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case 'MEMBER': {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        }
        case 'GUEST': {
            console.log(
              `${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`,
            );
            break;
        }
    }
}

/**
 * 복습 겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type AsyncTask = {
    state: "LOADING" | "FAILED" | "SUCCESS";
    error?: {
        msg: string;
    };
    response?: {
        data: string;
    }

};

// 로딩 중 -> 콘솔에 로딩 중 출력
// 실패 -> 실패 : 에러메시지를 출력
// 성공 -> 성공: 데이터를 출력
function processResult(task: AsyncTask) {
    switch (task.state) {
        case 'LOADING': {

            break;
        }
        case 'FAILED': {
            break;
        }
        case 'SUCCESS': {
            break;
        }
    }
}


const loading = {
    state: 'LOADING',
};

const failed = {
    state: 'FAILED',
    error: {
        msg: '오류 발생 원인은 ~~',
    },
};

const success = {
    state: 'SUCCESS',
    response: {
        data: '데이터 ~~',
    },
};