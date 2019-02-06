import { helper } from '@ember/component/helper';

export function plural(params) {

  let nbServices = params[0];
  if (nbServices == 0){
    return  `Aucun service n'est séléctionné.`;
  }else if (nbServices == 4){
    return  `Tous les services sont séléctionnés.`;

  }else if(nbServices == 1){
    return  `Vous avez ${params[0]} service séléctionné.`;

  }else{
      return  `Vous avez ${params[0]} services séléctionnés.`;
  }
}


export default helper(plural);
