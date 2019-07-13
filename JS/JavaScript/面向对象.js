
var person = {
    name:'素还真',
    age:'888',
    showName:function(){
        console.log(this.name);
    }
}
person.showName()

var person = new Object();
person.name = "素还真";
person.age = 888;
person.showName = function(){
    console.log(this.name);
}

//-------------------------------------------

function createPerson(name,age){
    var temp = new Object();
    temp.name = name;
    temp.age = age;
    temp.showName = function(){
        console.log(this.name);
    }
    return temp
}

function Person(name,age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        console.log(this.name);
    }
}
var p1 = new Person('素还真',888);
var p2 = new Person('叶小钗',666);
p1.showName();
p2.showName();
console.log(p1.showName === p2.showName);//false

function Person(){}
Person.prototype.name ="素还真";
Person.prototype.age = 888;
Person.prototype.showname = function(){
    console.log(this.name);
}


function Person(){}
Person.prototype = {
    name:'素还真',
    age:888,
    showName:function(){
        console.log(this.name);
    }
}


console.log(p1.showName === p2.showName);






















案例:
function Person(name,age){
    this.name = name;    //公开的属性
    var age = age;     //私有的属性
    this.showName = function(){
        console.log("my name is " + this.name)
    }     //公开的方法
    function showAge(){
        console.log("my age is " + age);
    }   //私有的方法
}

var p = new Person('素还真',888);
alert("p.name = " + p.name + ";"+"p.age=" + p.age) //p.name = 素还真;p.age=undefined
p.showName(); //my name is 素还真
p.showAge(); //p.showAge is not a function

//构造函数

function Person(name){
    this.name = name;
    this.showName = function(){
        console.log(this.name);
    }
}

var p1 = new Person('素还真')
var p2 = new Person('叶小钗')

console.log(p1.name === p2.name);
console.log(p1.showName === p2.showName);

//原型

function Person(name){
    this.name = name;
}
Person.prototype.showName = function(){
    console.log(this.name);
}
var p1 = new Person('素还真')
var p2 = new Person('叶小钗')

console.log(p1.name === p2.name);
console.log(p1.showName === p2.showName);

Person.propotype.test = function(){
    console.log(this.name);
    console.log(age);
    console.log(this.showName);
    console.log(showAge);            
}

var p1 = new Person()
p1.test();

//重载
function Person(){
    this.foo = function(a){
        console.log("foo(a)");
    }
    this.foo = function(a,b){
        console.log("foo(a,b)");
    }
}
var p1 = new Person();
p1.foo("a","b");
p1.foo("a")

//
function Person(){
    this.foo = function(){
        if(arguments.length === 1){
            this.foo1(arguments[0])
        } else if (arguments.length === 2) {
            this.foo2(arguments[0],arguments[1])
        } else if (arguments.length ===3){
            this.foo3(arguments[0],arguments[1],arguments[2])
        }
    }
    this.foo1 = function(a){
        console.log("foo1:"+a);
    }
    this.foo2 = function(a,b){
        console.log("foo2:"+a+"+"+b);
    }
    this.foo3 = function(a,b,c){
        console.log("foo3:"+a+"+"+b+"+"+c);
    }
}

var p = new Person();
p.foo("a");
p.foo("a","b");
p.foo("a","b","c")

//多态
//类
function Master(name){
    this.name = name
}
Master.prototype.feed = function(animal,food){
    console.log(this.name+ "喂"+animal.name + "吃" + food.name);
}
// 动物
function Animal(name){
    this.name = name
}
function Cat(name){
    this.animal = Animal
    this.animal(name);
}
function Dog(name){
    this.animal = Animal
    this.animal(name);
}
function Monkey(name){
    this.animal = Animal
    this.animal(name);
}
// 食物
function Food(name){
    this.name = name
}
function Fish(name){
    this.food = Food
    this.food(name)
}
function Bone(name){
    this.food = Food
    this.food(name)
}
function Peach(name){
    this.food = Food
    this.food(name)
}

var cat=new Cat("猫"); 
var fish=new Fish("鱼"); 

var dog=new Dog("狗"); 
var bone=new Bone("骨头"); 

var monkey=new Monkey("猴"); 
var peach=new Peach("桃"); 

//创建一个主人 
var master=new Master("zs"); 
master.feed(dog,bone); 
master.feed(cat,fish); 
master.feed(monkey,peach);

// -----------------------------------继承--------------------

function Father(){
    this.kongfu = "怒火烧尽九重天";
}
Father.prototype.getKongfu = function(){
    return this.kongfu
}
function Son(){
    this.name = "素续缘"
}

Son.prototype = new Father()
Son.prototype.getName = function(){
    return this.name
}
var p = new Son()
console.log(p.getKongfu());
console.log(p.getName());

function Father(){
    this.kongfu = ["怒火烧尽九重天","石破天惊混元掌"];
}
Father.prototype.getKongfu = function(){
    return this.kongfu
}
function Son(){
    this.name = "素续缘"
}

Son.prototype = new Father()
Son.prototype.getName = function(){
    return this.name
}
var p1 = new Son()
p1.kongfu.push("般若忏")
console.log(p1.getKongfu());
console.log(p1.getName());
var p2 = new Son()
var f1 = new Father()
console.log(f1.getName());
console.log(p2.getKongfu());
console.log(Son.prototype.getName());
//构造继承
function Father(name,kongfu){
    this.name = name
    this.kongfu = ["一使刀狂越九霄","长挥剑痴踏沧浪","狂刀狂乱舞","痴剑痴绝生"]
    this.fight = function(){
        console.log(this.name + "--使出了--" + this.kongfu[0]);
    }
}
    //使用对象冒充实现
function Son1(name){
    this.o = Father;
    this.o(name);
    this.study = function(kongfu) {
        console.log(this.name + "学会了" + kongfu);
    }
}
    //使用call或apply实现
function Son2(name){
    Father.call(this,name)
    //Father.apply(this,[name])
    this.study = function(kongfu) {
        console.log(this.name + "学会了" + kongfu);
    }
}
var p1 = new Son1("刀猿");
p1.fight() //刀猿--使出了--一使刀狂越九霄
p1.study("刀落雪花")// 刀猿学会了刀落雪花
var p2 = new Son2("剑狼")
p2.fight() //剑狼--使出了--一使刀狂越九霄
p2.study("血狼回杀") //剑狼学会了血狼回杀

// 组合继承

function Father(name){
    this.name = name
    this.kongfu = ["一使刀狂越九霄","长挥剑痴踏沧浪"]
}
Father.prototype.fight = function(){
    console.log(this.name + "--使出了--" + this.kongfu[1]);
}

function Son(name,newKongfu){
    Father.apply(this,[name])
    this.newKongfu = newKongfu
}
Son.prototype = new Father()
Son.prototype.constructor = Son
Son.prototype.study = function(){
    console.log(this.name + "学会了" + this.newKongfu);
    this.kongfu.push(this.newKongfu)
}

var s1 =new Son("刀猿","狂刀狂乱舞")
s1.fight()
s1.study()
console.log(s1.kongfu);
var s2 = new Son("剑狼","痴剑痴绝生")
s2.fight()
s2.study()
console.log(s2.kongfu);

//复制继承
function Father(){
    this.kongfu = ["怒火烧尽九重天","石破天惊混元掌"];
}
Father.prototype.getKongfu = function(){
    return this.kongfu
}

var f = new Father()
var s = {}

for(var item in f){
    s[item] = f[item]
}
console.log(s.kongfu);
s.getKongfu();

//extend

Function.prototype.extend = function(obj){
    for(item in obj){
        this.constructor.prototype[item] = obj[item]
    }
}
function Father(){
    this.kongfu = ["怒火烧尽九重天","石破天惊混元掌"];
}
Father.prototype.getKongfu = function(){
    return this.kongfu
}

var s = function(){}
s.extend(new Father())
console.log(s.kongfu);
s.getKongfu();

//多重继承


function F1(organization){
    this.organization = organization;
}
F1.prototype.sayOrganization = function(){
    console.log("所属门派: "+ this.organization);
}

function F2(kongfu){
    this.kongfu = kongfu
}
F2.prototype.fight = function(){
    console.log("武学技能: " + this.kongfu);
}
//封装extend
Function.prototype.extend = function(obj) {  
    for(var item in obj) {  
        this.constructor.prototype[item] = obj[item];  
    }  
}
// 继承不同父类
function S(organization,kongfu){
    F1.call(this,organization)
    F2.call(this,kongfu)
}
S.extend(new F2("活杀留声"));
S.extend(new F1("德风古道"));
console.log(S.organization);//德风古道
console.log(S.kongfu);//活杀留声
S.sayOrganization();//所属门派: 德风古道
S.fight();//武学技能: 活杀留声

//
var person = {
    name:"叶小钗",
    kongfu:["一使刀狂越九霄","长挥剑痴踏沧浪"]
}

var son1 = Object.create(person)
son1.name = "刀疾流星行"
son1.kongfu.push('狂刀狂乱舞');

var son2 = Object(person)
son2.name = "剑影皓月光"
son2.kongfu.push('痴剑痴绝生');

console.log(person.kongfu);//["一使刀狂越九霄", "长挥剑痴踏沧浪", "狂刀狂乱舞", "痴剑痴绝生"]

var person = {
    name:"叶小钗",
    kongfu:["一使刀狂越九霄","长挥剑痴踏沧浪"]
}

var son1 = Object.create(person)
son1.name = "刀疾流星行"
son1.kongfu.push('狂刀狂乱舞');

var son2 = Object.create(person,{
    name:{
        value:"剑影皓月光"
    },
    kongfu:{
        value:'痴剑痴绝生'
    }
})
console.log(son2.name);//剑影皓月光
console.log(son2.kongfu);//痴剑痴绝生
console.log(person.kongfu);//["一使刀狂越九霄", "长挥剑痴踏沧浪", "狂刀狂乱舞"]

//寄生继承
function createSub(sup){
    var o = Object(sup)
    o.study = function(){
        console.log("study....");
    }
    return o
}

var person = {
    name:"叶小钗",
    kongfu:["一使刀狂越九霄","长挥剑痴踏沧浪"]
}

var sub = createSub(person)
sub.study();

//继承函数

function inheritPrototype(sub,sup){
    var o = Object(sup.prototype)  //创建对象    
    o.constructor = sub     //增强对象
    sub.prototype = o   //指定对象
}

function Father(name){
    this.name = name;
    this.kongfu = ["一使刀狂越九霄", "长挥剑痴踏沧浪","活杀留声"]
}
Father.prototype.fight = function(){
    console.log(this.name + "使用了" + this.kongfu[2]);
}

function Son(name,newKongfu){
    Father.call(this,name);
    this.newKongfu = newKongfu;
}

inheritPrototype(Son,Father);
Son.prototype.study= function(){
    this.kongfu.push(this.newKongfu)
    console.log(this.name + "--学会了--" + this.newKongfu);
}

var s1 = new Son("剑狼","痴剑痴绝生");
var s2 = new Son("刀猿","狂刀狂乱舞");

s1.fight();
s2.fight();
console.dir(s1);
console.dir(s2);
s1.study();
s2.study();
console.log(s1.kongfu);
console.log(s2.kongfu);


//es6

class Father{
    constructor(name){
        this.name = name;
        this.kongfu = ["一使刀狂越九霄", "长挥剑痴踏沧浪","活杀留声"];
        console.log("我是实例化时自动调用的");
        //constructor内的方法是类的构造函数的默认方法，通过new命令生成对象实例时，会自动调用该方法。
    }
    fight(){
        console.log(this.name + "使用了" + this.kongfu[2]);
    }
}
let f1 = new Father("叶小钗")//我是实例化时自动调用的
f1.fight()//叶小钗使用了活杀留声

// 类实质上就是一个函数。类自身指向的就是构造函数。
console.log(typeof Father);//function
console.log(Father===Father.prototype.constructor);//true
//类的所有方法都是定义在类的prototype属性上
Father.prototype.fight= function(){
    console.log(this.name + "使用了" + this.kongfu[0]);
}
let  f2 = new Father("魔化叶小钗")
f2.fight();

Object.assign(Father.prototype,{
    getKongfu(){
        console.log(this.kongfu);
    }
})
f2.getKongfu() //["一使刀狂越九霄", "长挥剑痴踏沧浪", "活杀留声"]

//继承

class Son extends Father {
    constructor(name,newKongfu){
        super(name)
        this.newKongfu = newKongfu
    }
    study(){
        console.log(this.name + "学会了" + this.newKongfu);
        this.kongfu.push(this.newKongfu)
    }
}
var s = new Son("刀猿","狂刀狂乱舞")
s.study()
console.log(s.kongfu);
//["一使刀狂越九霄", "长挥剑痴踏沧浪", "活杀留声", "狂刀狂乱舞"]

//静态

class Father{
    static show(){
        console.log("我是静态的,是实例方法,无须实例化,只可在类上或静态方法中调用");
    }
    static test(){
        //调用另一个静态方法
        console.log(this.show());        
    }
}
console.log(Father.show());
console.log(Father.test());
//我是静态的,是实例方法,无须实例化,只可在类上或静态方法中调用

class Son extends Father{
    static alsoshow(){
        console.log(super.show());
    }
}
console.log(Son.show());
console.log(Son.alsoshow())

class Father{
    constructor(){
        this.type = "实例属性"
    }
}
Father.title = "静态属性"
let f = new Father()
console.log(Father.type) //undefined
console.log(Father.title) //静态属性
console.log(f.type); //实例属性
console.log(f.title); //undefined