import { helper } from '@ember/component/helper';

export function plural(params) {

  let nbServices = params[0];
  if (nbServices == 0){
    return  `Aucun produit n'est séléctionné.`;
  }else if (nbServices == 7){
    return  `Tous les produits sont séléctionnés.`;

  }else if(nbServices == 1){
    return  `Vous avez ${params[0]} produit séléctionné.`;

  }else{
    return  `Vous avez ${params[0]} produits séléctionnés.`;
  }
}


export default helper(plural);
