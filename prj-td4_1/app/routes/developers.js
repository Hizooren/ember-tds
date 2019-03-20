import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object';


export default Route.extend({
  devTemp: null,
  model(){
    return {
      store : this.store.findAll('developer'),
      supp : false,
      devTemp : ""
    }
  },
  actions: {
    delete(dev, model){
      if(model.supp) {
        dev.destroyRecord();
        set(model,'supp',false);
      }
    },
    supp(model, dev){
       set(model,'supp',true);
       set(model,'devTemp',dev);
    },
    cancel(model){
      set(model,'supp',false);
    }
  }
});
