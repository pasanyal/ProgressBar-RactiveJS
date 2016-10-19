import Ractive from 'ractive';  
import Template from '../../views/progressbar.html';

var ProgressbarHandler = Ractive.extend({  
    isolated: true,
    template: Template,

    changeInterval: function (val) {
        var selectedBar = this.get('selectedProgressBar');
        if(selectedBar == null) return;
        
        var keypath = 'progressbars[' + selectedBar + '].value';
        var keypath1 = 'progressbars[' + selectedBar + '].showvalue';
        
        if(this.get(keypath1) < 0) 
        {
            this.set(keypath, 0);
            this.set(keypath1, 0);
        }
        var f = this.get(keypath1) + val;
        this.set(keypath1, f);
        this.animate(keypath, f);        
    },

    data: function () {
        return {
            selectedProgressBar: 'select',
            progressbars: [
                { name: 'ProgressBar1', value: 0, showvalue: 0 },
                { name: 'ProgressBar2', value: 0, showvalue: 0 },
                { name: 'ProgressBar3', value: 0, showvalue: 0 }
            ],
            intervals: [ +25, +10, -10, -25 ]
        };
    }    
});

export default ProgressbarHandler;  