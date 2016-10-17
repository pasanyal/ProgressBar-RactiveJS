import Ractive from 'ractive';  
import template from '../views/app.html';
import ProgressbarHandlerComponent from './components/progressbarHandler';

require("../styles/less/_build.less");

let App = new Ractive({  
  el: '#app',
  template: template,
  components: {
      ProgressbarHandler: ProgressbarHandlerComponent
  }
});

export default App;