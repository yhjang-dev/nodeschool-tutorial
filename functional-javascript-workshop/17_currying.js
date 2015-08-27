function curryN(fn, n) {
    n = n || fn.length
    return function curried() {
        var args = Array.prototype.slice.call(arguments, 0);
        if (args.length === n) {
            return fn.apply(null, args);
        }
        else {
            return function () {
                var args2 = Array.prototype.slice.call(arguments, 0);
                return curried.apply(null, args.concat(args2))
            }
        }
    }
}

module.exports = curryN
