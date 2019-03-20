import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {copy: {}};
  },
  actions:{
    save(model){
      let copy=model.copy;
      let proj=this.store.createRecord('project',Ember.Object.create(copy));
      proj.save().then(()=> {
        this.transitionTo('projects');
      });
    },
    cancel(){
      this.transitionTo('projects');
    }
  }
});
