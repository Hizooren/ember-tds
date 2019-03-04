import Route from '@ember/routing/route';

export default Route.extend({
  actions:{
  edit(model){
    let edited = model.get('editedContact');
    this.store.findRecord('contact', model.get('editedContact').id).then(function(con) {
      con.set('nom',edited.nom);
      con.set('prenom',edited.prenom);
      con.set('email',edited.email);
      con.save();
    });
  }
  }

});
