import Controller from '@ember/controller';

export default Controller.extend({

  actions: {

    addToIncluded(model) {
      Ember.get("includedItems",model).pushAll(Ember.get("dispoItems_",model));

    },
    addAllToIncluded(){

    },
    removeFromIncluded(){

    },
    removeAllFromIncluded(){

    }
  }
});
