import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      nom:null,
      prenom:null,
      email:null
    }
  },
  actions: {
    addContact(contact){
     let row = this.store.createRecord('contact',{
        nom: contact.nom,
        prenom: contact.prenom,
        email:contact.email
      });
      row.save().then(
        ()=>{
          this.transitionTo('contacts');
        }
      );
    }
  }
});
