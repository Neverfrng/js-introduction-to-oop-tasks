// BEGIN
export default function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }
  
  Money.prototype.getValue = function() {
    return this.value;
  };
  
  Money.prototype.getCurrency = function() {
    return this.currency;
  };
  
  Money.prototype.exchangeTo = function(targetCurrency) {
    if (this.currency === targetCurrency) {
      return new Money(this.value, this.currency);
    }
  
    let exchangedValue;
    if (this.currency === 'usd' && targetCurrency === 'eur') {
      exchangedValue = this.value * 0.7;
    } else if (this.currency === 'eur' && targetCurrency === 'usd') {
      exchangedValue = this.value * 1.2;
    } else {
      throw new Error(`Unsupported currency conversion: ${this.currency} -> ${targetCurrency}`);
    }
  
    return new Money(exchangedValue, targetCurrency);
  };
  
  Money.prototype.add = function(otherMoney) {
    if (!(otherMoney instanceof Money)) {
      throw new Error('Argument must be a Money instance');
    }
  
    let otherValueInThisCurrency;
    if (this.currency === otherMoney.getCurrency()) {
      otherValueInThisCurrency = otherMoney.getValue();
    } else {
      otherValueInThisCurrency = otherMoney.exchangeTo(this.currency).getValue();
    }
  
    return new Money(this.value + otherValueInThisCurrency, this.currency);
  };
  
  Money.prototype.format = function() {
    const currencyCode = this.currency.toUpperCase();
  
    return this.value.toLocaleString(undefined, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
// END
