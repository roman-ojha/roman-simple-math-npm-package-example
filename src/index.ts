/*
    *) Setup:
        -> you can do all the npm & typescript setup by yourself
        -> after that try to add 'declaration' as true in tsconfig.json, so that it will generate .d.ts file for your package, which will be used by other developers to use your package in their projects and will help them to get the intellisense for your package
*/

interface MathType {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  division(a: number, b: number): number;
}

export default class Math implements MathType {
  add(a: number, b: number): number {
    return a + b;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
  division(a: number, b: number): number {
    return a / b;
  }
}
