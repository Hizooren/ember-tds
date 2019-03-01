import Route from '@ember/routing/route';
import EmberObject, { computed,get } from '@ember/object';


const Contact=EmberObject.extend({

  datas: null,
  contacts : computed("datas.@each.isDeleted","filtre",function () {
    return this.datas.filter(contact=>!this.deleteds.includes(get(contact,'nom')));
  }),
  deleteds:null,
  deletedsCount: 0

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
      //deleteRecord et ajout au tab deleteds si on veut l'annulation
    }
  }

});
