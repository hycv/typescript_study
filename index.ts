let 이름 : string | number = 'kim';   //* union type (stirng | number | boolean ) 처럼 정리하기 위해 소괄호도 가능 

이름 = 123 ; //* 이제 이름은 union 이 아니라 number 하나로 할당됨 
이름 = 'hi'; //* 물론 이렇게 재할당 도 가능 

type 내타입 = string | number ; // 타입명은 보통 대문자로 시작 . Name 처럼 . 일반 변수와 구분 

let 이르음 : 내타입 = 123;

console.log(이르음 * 2)

function 함수 (x: number) :number {
    return x*2 
}
//* 파라미터로 number, return 값으로 number 

type Member = [number, boolean]; //* 튜플 타입 . 첫번째엔 넘버, 두번째엔 불리언 
let john:Member = [123, true]

type Member2 = {
    name : string 
}

let smith : Member2 = {name : 'kim'}

//* object 내에 속성들이 너무 많아 다 지정하기 귀찮을때

type Member3 = {
    [key : string] : string
    //* [key: string 뜻 - 문자(string) 로 들어오는 모든 object 속성들이 ([key : ]) : string 타입을 가져야 한다. 
}

let hy : Member3 = {name : 'Kim', age : '123', /*height : 345*/ }

class User {
    name : string; 
    constructor(name: string){
        this.name = name; 

    }
}

//* 타입스크립트 기본 타입 정리 예제 문제 

//* 1 
let myname :string = 'hy';
let myage : number = 24;
let myplace : string = 'suwon';

//*2
//* 트라이 1 : 
let myPlalist = {
    //*songName : string = 'wonderwall'
}
//* 트라이 2 : 

type myPlalist = {
    songName:string , 
    artist : string
}

let hyp : myPlalist = {songName : 'wonderwall', artist : 'oasis', };

//* 모범답안 : 

var 내플레이리스트 : {
    song : string , 
    singer: string
} = {song : 'wonderwll', singer : 'oasis'}

//*3 

let project : {
    member : string[],
    days : number,
    started : boolean
}= {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }

  //* let project = {member : ~ , days : ~ , } 로 object 를 만들어 준건데 이 앞에 변수지정용을 하나 더 넣었다고 생각하면 됨. 
  

  //! 타입을 미리 정하기 애매할 때 (union type, any, unknown) 예제 

  //* 1 
let user : string = 'kim';
let age : undefined | number = undefined;
let married : boolean = false; 
let 철수 : (string | undefined | boolean | number) []= [user, age, married];

//*2 
let 학교 :{
    score : (number | boolean) [],
    teacher : string,
    friend : string[] | string
}= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]


function 내함수(x? :number) :void { 
    console.log(x*2);
  }  

내함수(3);

//!함수에 타입 지정하는 법 & void 타입 문제들
//* 1 
//내답 : 
function hihong() : string{
    return "이름이 없습니다."
} //문제 완전 잘못이해함 
//모범답안 : 

function sayHi (x? : string) :void{
    if(x){
        console.log('안녕하세요' + x)
    }else {
        console.log('왜입력안해요')
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

function letterCount (x: number | string) : number {

    if(typeof(x) === 'number'){
        x = x.toString();
    }

    return x.length;

}

//*3 

function marriable (x : number , y : boolean, z : string) : string | void /*내답변 : (undefined | string)*/ {

    if(y){
        x = x + 500
    }

    if(z === '상') {
        x = x+ 100
    }

    if(x >= 600) {
        return "결혼가능";
    }

}
console.log(marriable(100,true,'상'))


function 내함수2(x :number | string){
    if (typeof x === 'number') {
      return x + 1
    } 
    else if (typeof x === 'string') {
      return x + 1
    }
  }

//! 타입 확정하기 Narrowing & Assertion 문제 

//* 1 

function cleaning (x : (number|string)[]) : number[]{

    let answer : number[]= [];

    for( var i = 0; i < x.length ; i++){
        if(typeof (x[i]) === 'string' ){
           answer.push(Number(x[i]))
        }
        else {
            answer.push(x[i])
        }
        
    }
    return answer;
}

function 클리닝함수(a :(number|string)[]){

    let 클리닝완료된거 :number[] = [];
  
    a.forEach((b)=>{
      if (typeof b === 'string') {
        클리닝완료된거.push(parseFloat(b))
      } else {
        클리닝완료된거.push(b)
      }
    })
  
    return 클리닝완료된거
  }

console.log(cleaning([1,2,'3']));
