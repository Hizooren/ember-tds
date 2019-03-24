import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  classNames: ['ui'],
  tagName: 'form',
  actions: {
    validation() {
      this.sendAction('validation',this.get('oldValue'),this.get('newValue'));
    },
    cancel() {
        this.sendAction('cancel');
    }
  }
});
