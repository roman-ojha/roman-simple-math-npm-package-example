/*
    *) Setup:
        -> you can do all the npm & typescript setup by yourself
        -> after that try to add 'declaration' as true in tsconfig.json, so that it will generate .d.ts file for your package, which will be used by other developers to use your package in their projects and will help them to get the intellisense for your package

    *) Setup for NPM package to publish:
        -> you might want to ignore some folders & files while publishing your package, so that you can add those files in .npmignore file
        -> in this case we just want to publish the lib folder
        -> another method is to add 'files' in package.json, which will only publish the files which are mentioned in 'files' array
        -> so now what ever files we specify inside 'files' array will be published to npm registry.
        -> NOTE: but two files like package.json & README.md will be published by default automatically
        -> now we will write a script 'prepare' in package.json, which will run before publishing the package to npm registry
            -> so now only after building the package, it will be published to npm registry
        -> also we have to specify the entry point so that when we import our package in other project, it will know from where to start
            -> so because our entry point is index.js file which will get build in lib folder, so we will specify the entry point as 'lib/index.js' inside package.json
        -> we also have to specify where our types or declaration file exist so that other developers can get the intellisense for our package
            -> so we will specify the path of our declaration file inside 'types' property in package.json
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
