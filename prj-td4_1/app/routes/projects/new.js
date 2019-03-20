import Route from '@ember/routing/route';
import EmberObject,{get,set,  observer} from '@ember/object';
import { isEqual } from '@ember/utils';



export default Route.extend({
  model() {
    return {
      copy: {},
      storeDev: this.store.findAll('developer'),
      devTemp: {"id":"",identity:'developer'},
      devTempIdentity: "",
    }
    },
  actions:{
    save(model) {
      let copy = model.copy;
      if (isEqual(model.devTemp.id, "")) {
        return;
      } else {
        let proj = this.store.createRecord('project', Ember.Object.create(copy));
        proj.save().then(() => {
          let dev = this.store.find('developer', model.devTemp.id).then(function (dev) {
            proj.set('owner', dev);
          });
          this.transitionTo('projects');
        });
      }
    },
    cancel(){
      this.transitionTo('projects');
    }
  }
});
