import Controller from '@ember/controller';
import EmberObject,{get,set} from '@ember/object';
import { isEqual } from '@ember/utils';

export default Controller.extend({

  actions:{
    changeDevTemp(devTempIdentity){
      let model = this.get('model');
      set(model,'devTempIdentity',devTempIdentity);
      model.storeDev.forEach(function (dev) {
        if (isEqual(dev.identity,get(model,'devTempIdentity'))){
          set(get(model,'devTemp'),'id',dev.id);
        }
      })
    }
  }
});
