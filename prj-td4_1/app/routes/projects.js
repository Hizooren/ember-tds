import Route from '@ember/routing/route';
import RSVP from 'rsvp';


export default Route.extend({
  model(){
    return RSVP.hash({
      projects:this.get('store').findAll('project'),
      fields:['Name','Description',{name:'sDate',caption:'Start Date'},{name:'dDate',caption:'Due Date'},{name:'owner.identity',caption:'Owner'}],
      operations:[{icon:'remove red',link:'projects.delete'},{icon:'edit',link:'projects.edit'},{icon:'calendar alternate',link:'project'}]
    });
  }
});
