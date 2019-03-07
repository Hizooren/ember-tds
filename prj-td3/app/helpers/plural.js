import { helper } from '@ember/component/helper';

export function plural(params) {

  let nbSupp = params[0];
  if (nbSupp == 1){
    return  `Annuler la suppression.`;
  }else{
    return  `Annuler les suppressions (${params[0]}) .`;
  }
}


export default helper(plural);
