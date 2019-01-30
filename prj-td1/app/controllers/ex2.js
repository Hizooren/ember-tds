import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleService(service) {
      console.log(service[0].get('active'));
    }
  }
});
