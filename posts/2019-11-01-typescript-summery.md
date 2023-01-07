---
title: 'TypeScript syntax summary'
metaTitle: 'TypeScript syntax summary'
metaDesc: "A brief summary of typescript syntax"
socialImage: '/images/old-images/ts.jpg'
date: "2019-11-01"
tags:
    - Typescript
    - Javascript
---


TypeScript is one of the fastest rising technologies of 2018. This brief summary is filled with what you need to know to understand its key concepts.

Reference to FlavioCopes blog, a great place to learn.

---

TypeScript is built by Microsoft. Its open source, developed public at [https://github.com/Microsoft/TypeScript](https://github.com/Microsoft/TypeScript).

A superset of ECMAScript 2015, also know as ES6, which means that any valid JS is also valid TypeScript.

Run `npm install -g typescript`  to globally install the TypeScript compiler on your system, available to you using the `tsc` command.

Create an `app.ts` file.

Write your first program:

```javascript
const greet = () => {
  console.log('Hello world!')
}
greet()
```

As you see, its just plain JavaScript, but stored in a `.ts` file.

Compile the program using the `tsc app.ts` command.

The compiler compiles the program into a new file: `app.js`, with this content:

```javascript
var greet = function () {
  console.log('Hello world!')
};
greet();
```

Just like *old JavaScript*, the TS compiler compiles TypeScript to ES5 by default, which means that its almost guaranteed to be suppored by all modern browsers.

To change the compilation target to another version, for example to ES2018 run the following:

```javascript
`tsc app.ts --target ES2018`:
```


```javascript
const greet = () => {
  console.log('Hello world!');
};
greet();
```

Here almost nothing changed except for the additional semicolons.

Play around with TS to JS compilation, check out [https://www.typescriptlang.org/play/](https://www.typescriptlang.org/play/).

<br>
<br>

# TYPING
---

Most important functionality provided by TypeScript is the type system:

* static types
* interfaces
* type interence
* enums
* hybrid types
* generics
* union/intersection types
* access modifiers
* null checking

It resembles languages like Go or C, so if you've coded these languages you already know how this works. Unike dynamic languages like Python or Ruby, this is all new.

The type system allows adding types to:

* variables
* function arguments
* function return types

Giving a more rigid structure to your programs.

This is how:

### You define a string variable in TypeScript:

```typescript
const greeting : string = "hello!"
```

### A function accepts an argument of a specific type:

```typescript
const multiply = (a: number, b: number) => {
  return a * b
}
```

### You declare their return value:

```typescript
const multiply = (a: number, b: number): number => {
  return a * b
}
```
<br>

Valid types are:
* `number`
* `string`
* `boolean`
*  `enum`
* `void`
* `null`
* `undefined`
* `any`
* `never`
* `Array`
* `tuple`

`any` is a type that identifies, as its name says, **any** type.

<br>

# CLASSES
---

Like JavsScript, you declare classes like this:

```typescript
class Car {

}
```

Defining class fields:

```typescript
class Car {
  color: string
}
```

Fields are public by default. You can set a field to be `private` or `protected`:

```typescript
class Car {
  public color: string
  private name: string
  protected brand: string
}
```

Private fields can only be accessed by the class that its declared in.

Protected fields can only be accessed by deriving classes.

TypeScript also has `static` fields, which are class fields instead of object fields:

```typescript
class Car {
  static numberOfWheels = 4
}
```

`initialize` fields with a constructor:

```typescript
class Car {
  color: string

  constructor(theColor: string){
    this.color = theColor
  }

}
```

Shorthand syntax to make it simpler:

```typescript
class Car {
  constructor(public color: string){}

  printColor() {
    alert(this.color)
  }
}

(new Car('red')).printColor()
```

A field can be `read only`:

```typescript
class Car {
  readonly color: string
}
```

> in this case its value can only be set in the constructor.

Class methods:

```typescript
class Car {
  color: string
  constructor(public color: string) {
    this.color = color
  }
  drive() {
    console.log('You are driving the car')
  }
}
```

You create objects from those classes, like in JavaScript, using the `new` keyword:

```typescript
const myCar = new Car('red')
```

You can extend an existing class using the `extend` keyword:

```typescript
class ElectricCar extends Car {
  //..
}
```

Call `super()` in the constructor and in methods to call the extended class corresponding method.

<br>

# ACCESSORS
---

Getters and setters:

```typescript
class Car {
  private _color: string

  get color(): string {
    return this._color
  }

  set color(color: string) {
    this._color = color
  }
}
```
<br>

# ABSTACT CLASSES
---

To define an abstract class there needs to be a class that extends it, and implements its eventual abstact methods:

```typescript
abstact class Car {
  abstract drive()
}

class SportsCar extends Car {
  drive() {
    console.log('You are driving a sports car')
  }
}
```

<br>

# INTERFACES
---

Interfaces build upon basic types. Use an interface as a type, and its interface can contain other type definitions:

```typescript
interface SetOfNumbers {
  a: number;
  b: number;
}

const multiply = (set: SetOfNumbers) => {
  return set.a * set.b
}

multiply({ a: 1, b: 2 })
```

An interface can also be an interface for a class implementation:

```typescript
interface Car {
  name: 'string'
  new (brand: string)
  drive(): void
}

class SportsCar implements Car {
  public name

  constructor(public brand: string) {
    //..
  }

  drive() {
    console.log('You are driving a sports car')
  }
}
```


<br>

# FUNCTION FEATURES
---

Functions can have optional parameters using the `?` symbol after the parameter name:

```typescript
class Car {
  drive(kilometers?: number) {
    if(kilometers) {
      console.log('Drive the car for ${kilometers} kilometers')
    } else {
      console.log('Drive the car')
    }
  }
}
```

Parameters can have default values:

```typescript
class Car {
  drive(kilometers = 10) {
    console.log('Drive the car for ${kilometers} kilometers')
  }
}
```

Functions can accept a verying number of parameters by using rest parameters:

```typescript
class Car {
  drive(kilometers = 10, ...occupants: string[]) {
    console.log('Drive the car for ${kilometers} kilometers, with those people on it:')
    occupants.map((person) => console.log(person))
  }
}
(new Car()).drive(20, 'Andre', 'Peter', 'Roger')
```


<br>

# ENUMS
---

A great way to defined named constants.

```typescript
enum Order {
  First,
  Second,
  Third,
  Fourth
}
```

Simply reference `Order.First`, `Order.Second` etc.

You can assign values to constants explicitly:

```typescript
enum Order {
  First   = 0,
  Second  = 1,
  Third   = 2,
  Fourth  = 3
}
```

or use strings:

```typescript
enum Order {
  First = 'FIRST' ,
  Second = 'SECOND',
  Third = 'THIRD',
  Fourth = 'FOURTH'
}
```

<br>

# GENERICS
---

A new feature not available in many programming languages. You can create a function, interface or class that works with different types, without specifying the type up front.

It is mutable, so if you change the type at compile time, the compiler will throw an error.

We could do this by omitting types to all or using `any`.

But with generics all the tooling is going to be able to help us.

Example:

```typescript
function greet<T>(a: T) {
  console.log('Hi ${a.name}')
}
greet({name: 'André'})
```

The `T` symbol identifies a generic type.

the type can be resistricted to a certain class family or interface, using the `extends` keyword:

```typescript
interface Greetable { name: string }
function greet<T extends Greetable>(a: T) {
  alert('Hi ${a.name}!')
}
greet({ name: 'André'})
```

# WANT MORE?

We just went over the basics of TypeScript, go to the [official docs](https://www.typescriptlang.org/docs) for more!
