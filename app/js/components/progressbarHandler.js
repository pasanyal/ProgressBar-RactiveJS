import Ractive from 'ractive';  
import Template from '../../views/progressbar.html';

var ProgressbarHandler = Ractive.extend({  
    isolated: true,
    template: Template,

    changeInterval: function (val) {
        var selectedBar = this.get('selectedProgressBar');
        if(selectedBar == null) return;
        
        var keypath = 'progressbars[' + selectedBar + '].value';
        if(this.get(keypath) < 0)
            this.set(keypath, 0);
        this.add(keypath, val);
    },

    data: function () {
        return {
            selectedProgressBar: 'select',
            progressbars: [
                { name: 'ProgressBar1', value: 0 },
                { name: 'ProgressBar2', value: 0 }
            ],
            intervals: [ +25, +10, -10, -25 ]
        };
    }    
});

export default ProgressbarHandler;  