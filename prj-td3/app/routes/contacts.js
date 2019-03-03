import Route from '@ember/routing/route';
import EmberObject, { computed,get} from '@ember/object';


const Contact=EmberObject.extend({

  datas: null,
  contacts : computed("datas.@each.isDeleted","filtre",function () {
    if(this.filtre === ""){
      return this.datas.filter(contact=>!this.deleteds.includes(contact));
    }else {
      return this.datas.filter(contact => contact.nom.indexOf(this.filtre) !== -1
        || contact.prenom.indexOf(this.filtre) !== -1
        || contact.email.indexOf(this.filtre) !== -1 && !this.deleteds.includes(contact));
    }
  }),
  deleteds:null,
  deletedsCount: computed("deleteds.@each",function () {
    return this.deleteds.length;
  }),
  filtre:""
});

export default Route.extend({
  model() {
    return Contact.create({
      datas : this.store.findAll('contact'),
      deleteds: []
    })
  },
  actions:{
    delete(contact){
      this.controller.get('model').get('deleteds').pushObject(contact);
      this.controller.get('model').get('contacts').removeObject(contact);
    },
    cancelDelete(model){
      model.get('deleteds').forEach(function (contact) {
        model.get('contacts').pushObject(contact);
      });
      model.get('deleteds').clear();
    }
  }

});
