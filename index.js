var 이름 = 'kim'; //* union type (stirng | number | boolean ) 처럼 정리하기 위해 소괄호도 가능 
이름 = 123; //* 이제 이름은 union 이 아니라 number 하나로 할당됨 
이름 = 'hi'; //* 물론 이렇게 재할당 도 가능 
var 이르음 = 123;
console.log(이르음 * 2);
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var smith = { name: 'kim' };
var hy = { name: 'Kim', age: '123', /*height : 345*/ };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
//* 타입스크립트 기본 타입 정리 예제 문제 
//* 1 
var myname = 'hy';
var myage = 24;
var myplace = 'suwon';
//*2
//* 트라이 1 : 
var myPlalist = {
//*songName : string = 'wonderwall'
};
var hyp = { songName: 'wonderwall', artist: 'oasis', };
//* 모범답안 : 
var 내플레이리스트 = { song: 'wonderwll', singer: 'oasis' };
//*3 
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
//* let project = {member : ~ , days : ~ , } 로 object 를 만들어 준건데 이 앞에 변수지정용을 하나 더 넣었다고 생각하면 됨. 
//! 타입을 미리 정하기 애매할 때 (union type, any, unknown) 예제 
//* 1 
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
//*2 
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 내함수(x) {
    console.log(x * 2);
}
내함수(3);
//!함수에 타입 지정하는 법 & void 타입 문제들
//* 1 
//내답 : 
function hihong() {
    return "이름이 없습니다.";
} //문제 완전 잘못이해함 
//모범답안 : 
function sayHi(x) {
    if (x) {
        console.log('안녕하세요' + x);
    }
    else {
        console.log('왜입력안해요');
    }
}
/*
//*if( value ) {
}
will evaluate to true if value is not:

null
undefined
NaN
empty string ''
0
false
*/
//*2
function letterCount(x) {
    if (typeof (x) === 'number') {
        x = x.toString();
    }
    return x.length;
}
//*3 
function marriable(x, y, z) {
    if (y) {
        x = x + 500;
    }
    if (z === '상') {
        x = x + 100;
    }
    if (x >= 600) {
        return "결혼가능";
    }
}
console.log(marriable(100, true, '상'));
function 내함수2(x) {
    if (typeof x === 'number') {
        return x + 1;
    }
    else if (typeof x === 'string') {
        return x + 1;
    }
}
//! 타입 확정하기 Narrowing & Assertion 문제 
//* 1 
function cleaning(x) {
    var answer = [];
    for (var i = 0; i < x.length; i++) {
        if (typeof (x[i]) === 'string') {
            answer.push(Number(x[i]));
        }
        else {
            answer.push(x[i]);
        }
    }
    return answer;
}
function 클리닝함수(a) {
    var 클리닝완료된거 = [];
    a.forEach(function (b) {
        if (typeof b === 'string') {
            클리닝완료된거.push(parseFloat(b));
        }
        else {
            클리닝완료된거.push(b);
        }
    });
    return 클리닝완료된거;
}
console.log(cleaning([1, 2, '3']));
