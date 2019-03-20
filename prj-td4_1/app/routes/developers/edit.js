import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object';



export default Route.extend({

  templateName:'developers/new',
  afterModel(model){
    set(model,'copy',JSON.stringify(model));
    return model;
  }
});
