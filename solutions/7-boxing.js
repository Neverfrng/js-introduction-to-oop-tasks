// BEGIN
const magic = (...args) => {
    let sum = args.reduce((acc, curr) => acc + curr, 0);
    const inner = (...newArgs) => magic(...args, ...newArgs);
    inner.valueOf = () => {
        return sum;
    };
    return inner;
};
export default magic;
// END
