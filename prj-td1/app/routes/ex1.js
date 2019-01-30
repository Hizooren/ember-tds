import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';
const Note=EmberObject.extend({
    content: 'Entrez votre texte',
    MAX: 100,
    info: null,
    size: computed('content',function () {
      this.set('info',null);
      return this.MAX-this.content.length;
    }),
    style: computed('size',function () {
      let size=this.get('size');
      if(size < 20){
        return "alert-danger";
      }else if(size < 50){
        return "alert-warning";
      }else{
        return "alert-info";
      }
    })
  }
);
export default Route.extend({
  model(){
    return Note.create();
  }
});
