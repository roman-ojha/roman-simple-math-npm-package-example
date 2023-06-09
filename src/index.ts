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

    *) Publishing the package to npm registry:
      -> if you don't have an account on npm registry, then first you have to create an account on npm registry
      -> first we have to login to npm registry using 'npm login' command
      -> if you want to see you username, then you can use 'npm whoami' command
      -> after that we have to publish our package using 'npm publish' command

    *) Using the published package:
      -> now we have successfully published our package now we will use this package in another project '../example'
      -> 
        -> npm i roman-simple-math

    *) Things to remember:
      *) Update you package:
        => when you will make some changes on your package, and want to publish the changes, then you have to increase the version number of your package, or else you will get an error while publishing the package
          -> or you can ever clear the cache of npm registry using 'npm cache clean --force' command, and then publish the package
        => if you want to unpublish your package, then you can use 'npm unpublish
        => if you want to update your package, then you can use 'npm version patch' command, which will increase the version number of your package by 0.0.1
        => if you want to update your package, then you can use 'npm version minor' command, which will increase the version number of your package by 0.1.0

      => you can publish the package is by using 'npm publish --access public' command as well, which will publish the package without asking for the version number

      => you can't publish the package having same name as of any other package, so you have to change the name of your package before publishing it to npm registry or else you will get an error
        -> you can change the name of your package inside package.json file
*/

interface MathType {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  division(a: number, b: number): number;
}

export class Math implements MathType {
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
