const myConsole = require('./myConsole');

const add = function (x, y) {
  return x + y;
}

const mul = function (x, y) {
  return x * y;
}

myConsole.log('0', () => {
  console.log('add(3, 4);\t', add(3, 4));
  console.log('mul(3, 4);\t', mul(3, 4));
});

// -------------------------------------------------------------------

const identityf = function(x){
  return function(){
    return x;
  }
};

myConsole.log('1', () => {
  const idf = identityf(3);  
  console.log('const idf = identityf (3);');
  console.log('idf();\t', idf())
});

// -------------------------------------------------------------------
