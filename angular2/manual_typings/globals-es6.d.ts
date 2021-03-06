/**
 * Declarations angular depends on for compilation to ES6.
 * This file is also used to propagate our transitive typings
 * to users.
 */


// TODO: ideally the node.d.ts reference should be scoped only for files that need and not to all
//       the code including client code
/// <reference path="../typings/node/node.d.ts" />

declare var assert: any;


interface BrowserNodeGlobal {
  Object: typeof Object;
  Array: typeof Array;
  Map: typeof Map;
  Set: typeof Set;
  Date: typeof Date;
  RegExp: typeof RegExp;
  JSON: typeof JSON;
  Math: typeof Math;
  assert(condition: any): void;
  Reflect: any;
  zone: typeof Object;
  getAngularTestability: Function;
  getAllAngularTestabilities: Function;
  frameworkStabilizers: Array<Function>;
  setTimeout: Function;
  clearTimeout: Function;
  setInterval: Function;
  clearInterval: Function;
}
