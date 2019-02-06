import Controller from '@ember/controller';
import { set } from '@ember/object';


export default Controller.extend({
  actions: {
    toggleService(service) {

      if (service.active) {
        set(service, "active", false);
      } else if (service.active == false) {
        set(service, "active", true);
      }
    },

    enableCodePromo(model) {
      if(model.get('codePromo')){
        model.set('codePromo',false)
      }else{
        model.set('codePromo',true)
      }
      //console.log(model.get('codePromo'));
    },

    verifCodePromo(value) {
      if (this.model.codePromo) {
        if (value == "B2") {
          this.model.set('remise',0.05);
        } else if (value == "A") {
          this.model.set('remise',0.01);
        } else if (value == "UBOA") {
          this.model.set('remise', 0.02);
        }else{
          this.model.set('remise', 0);
        }
      }
    }
  }
});
