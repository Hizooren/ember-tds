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

  sumActive: computed('service.@each.active',function () {
    let sommeActive = 0;
    this.get('service').forEach(function (element) {
        sommeActive = sommeActive+element.price;
    })
    return sommeActive;
  })
  }
);

export default Route.extend({
  model(){
    return Services.create({services : [
        {
          "name": "Web Development",
          "price": 300,
          "active":true
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
