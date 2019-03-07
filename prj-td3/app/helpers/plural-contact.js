import { helper } from '@ember/component/helper';

export function pluralContact(params) {

  let nbContacts = params[0];
  if (nbContacts == 1) {
    return `1 contact trouvé.`;
  }else if(nbContacts ==0){
    return `Aucun résultat.`
  }else{
    return  `${params[0]} contacts trouvés.`;
  }
}


export default helper(pluralContact);
