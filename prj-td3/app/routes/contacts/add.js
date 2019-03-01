import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.createRecord('contact',{
      nom: 'Pas de nom'
    });
  },
  actions: {
    addContact(contact){
      contact.save().then(
        ()=>{
          this.transitionTo('contacts');
        }
      );
    }
  }
});
