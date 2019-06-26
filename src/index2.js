
console.log('index2----')

let demo=()=>{
    console.log('es6 箭头函数');
    let arr=[
        {
            id:'1',
            name:'aaa'
        },
        {
            id:'2',
            name:'bbb'
        },
        {
            id:'3',
            name:'ccc'
        }
    ];
    console.log(arr.findIndex(item=>item['id']=='3'))
    console.log(arr.find(item=>item['id']=='3'))

}

demo()

 class Person{
     constructor(){
         this.name="bigbigStrong"
     }
     sayName(){
         console.log(`my name is ${this.name}`);
     }
 }
 var p = new Person();
 p.sayName();
