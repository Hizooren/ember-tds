import { helper } from '@ember/component/helper';

export function formatCurrency(params, namedArgs) {
  let value = params[0],
    euros = Math.floor(value),
    cents = Math.floor((value - euros) *100 % 100),
    sign = namedArgs.sign === undefined ? '$' : namedArgs.sign;

  if (cents.toString().length === 1) { cents = '0' + cents; }
  return `${euros},${cents}${sign}`;
}

export default helper(formatCurrency);
