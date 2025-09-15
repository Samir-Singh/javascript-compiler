let obj = {
  name: "John",
};

function printName(age, city) {
  console.log(`Hello my name is ${this.name} ${age} yrs old from ${city}`);
}

// Call Polyfill
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} should be a function`);
  }

  context.fn = this;

  context.fn(...args);

  delete context.fn;
};

// Apply Polyfill
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} should be a function`);
  }

  if (!Array.isArray(args)) {
    throw new Error(`${args} should be an array`);
  }

  context.fn = this;
  context.fn(...args);

  delete context.fn;
};

// Bind Polyfill
Function.prototype.myBind = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} should be a function`);
  }

  if (!Array.isArray(args)) {
    throw new Error(`${args} should be an array`);
  }

  context.fn = this;
  return function () {
    return context.fn(...args);
  };
};

printName.myCall(obj, 25, "Gurugram");
printName.myApply(obj, [25, "Gurugram"]);
const bindFunc = printName.myBind(obj, [25, "Gurugram"]);
bindFunc();
