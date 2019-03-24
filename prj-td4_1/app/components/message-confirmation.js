import Component from '@ember/component';


export default Component.extend({
  actions: {
    submitConfirm() {
      this.sendAction('action',this.get('param'));
    },

    cancelConfirm() {
      if(this.get('cancel')){
        this.sendAction('cancel',this.get('param'));
      }
    }
  }
});
