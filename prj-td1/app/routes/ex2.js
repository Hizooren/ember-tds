import Route from '@ember/routing/route';
import { filterBy } from '@ember/object/computed';
import EmberObject, { computed } from '@ember/object';
const Services=EmberObject.extend({
    service: filterBy('services','active',true),

    countActive: computed('service.@each.active',function () {
      let tab = this.get('service');
      return tab.length;
    }),

  name: null,
  price: null,
  active : null,
  codePromo : false,
  B22:0.05,
  AZ:0.01,
  UBOAT:0.02,


  sumActive: computed('service.@each.active',function () {
    let sommeActive = 0;
    this.get('service').forEach(function (element) {
        sommeActive = sommeActive+element.price;
    })
    return sommeActive;
  }),
  remise: null,

  prixRemise:computed('sumActive','remise',function () {
   return this.get('remise') * this.get('sumActive');
  }),

  prixTotal: computed('sumActive','prixRemise',function () {
   /* if (this.get('remise') != 0) {
      return this.get('sumActive') - this.get('sumActive') * this.get('remise');
    }else{
      return 0;
    }*/

   return this.get('sumActive') - this.get('prixRemise');
  })
  }
);

export default Route.extend({
  model(){
    return Services.create({services : [
        {
          "name": "Web Development",
          "price": 300,
          "active":true,
        },{
          "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
      ]
    });
  }
});
