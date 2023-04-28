
function receivesAFunction(callback) {
   callback();
}

function callMe(){
   console.log("I'm the callback function")
}

receivesAFunction(callMe)


function returnsANamedFunction() {
   return (function greeting() {
      console.log("Hello World!")
   })
}

function greeting() {
   console.log("Hello World!")
}

function returnsAnAnonymousFunction() {
   return function() {
      console.log("Hello World!")
   }
}