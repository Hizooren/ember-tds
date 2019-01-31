import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    toggleService(service) {

      if (service.active) {
        set(service, "active", false);
      }

      else if (service.active == false) {
        set(service, "active", true);
      }
    }
  }
});
