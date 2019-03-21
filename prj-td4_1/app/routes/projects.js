import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object';


export default Route.extend({

  model() {
    return {
      store : this.store.findAll('project'),
      supp : false,
      projTemp : "",
      storeStories: this.store.findAll('story')
    }
  },
  actions: {
    delete(proj, model) {
      if (model.supp) {
        proj.destroyRecord();
        set(model, 'supp', false);
      }
    },
    supp(model, proj) {
      set(model, 'supp', true);
      set(model, 'projTemp', proj);
    },
    cancel(model) {
      set(model, 'supp', false);
    }
  }
});
