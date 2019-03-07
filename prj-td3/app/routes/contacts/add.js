import Route from '@ember/routing/route';
import { match } from '@ember/object/computed';

export default Route.extend({


  model(){
    return {
      nom:null,
      prenom:null,
      email:null,
    }
  },
  actions: {
    addContact(contact){
      if(contact.nom !== null && match(contact.email, /^.+@.+\..+$/)) {
        let row = this.store.createRecord('contact', {
          nom: contact.nom.toUpperCase(),
          prenom: contact.prenom,
          email: contact.email
        });
        row.save().then(
          () => {
            this.transitionTo('contacts');
          }
        );
      }
    }
  }
});
