// BEGIN
export default function make(numer = 0, denom = 1) {
    let _numer = numer;
    let _denom = denom;
  
    return {
      setNumer(value) {
        _numer = value;
      },
      setDenom(value) {
        if (value === 0) {
          throw new Error("Denominator cannot be zero");
        }
        _denom = value;
      },
      getNumer() {
        return _numer;
      },
      getDenom() {
        return _denom;
      },
      toString() {
        return `${_numer}/${_denom}`;
      },
      add(other) {
        const newNumer = _numer * other.getDenom() + _denom * other.getNumer();
        const newDenom = _denom * other.getDenom();
        return make(newNumer, newDenom);
      },
    };
  }
// END