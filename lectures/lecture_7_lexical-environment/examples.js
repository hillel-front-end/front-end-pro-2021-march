// ––––––––––––––––- Lecture Examples ––––––––––––––––––

var somethingGlobal = "I'm global";

function levelOneFirst(a, b) {
  /**
   levelOneFirst.LexicalEnvironment = {
     environmentRecords : {
       localFirst: undefined
       additional: TDZ
       a: undefined
       b: undefined
     }
     outer: [[Global]]
   }
   */
  var localFirst = "local first 1";
  let additional = false;
}

function levelOneSecond() {
  /**
   levelOneSecond.LexicalEnvironment = {
     environmentRecords : {
       localFirst: undefined
       levelTwo: fn()
     }
     outer: [[Global]]
   }
   */
  var localFirst = "local first 2";

  function levelTwo() {
    /**
     levelTwo.LexicalEnvironment = {
       environmentRecords : {
         localSecond: undefined
       }
       outer: [[levelOneSecond]]
     }
     */

    var localSecond = "local second 1";
  }
}

// ***************

var a = "hello";

function f1() {
  var a = "demo";
  f2();
}

function f2() {
  console.log(a);
}

f1();



// ––––––––––––––––- Tricky Errors ––––––––––––––––––
function test(){
  var foo = 33;
  if (foo) {
    let foo = (foo + 55);
    console.log(foo)
  }
}
test();

// ***************

function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) {
    console.log(n);
  }
}

go({a: [1, 2, 3]});
