// BEGIN
export default function bind(obj, fn) {
    return function(...args) {
      return fn.apply(obj, args);
    };
  }
// END