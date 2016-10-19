(function () {
	'use strict';
	describe( 'ractive-load', function () {
		var assert, load;
		assert = chai.assert;
		load = Ractive.load;
		
		it( 'Load two progress-bars of 0 width and 4 buttons', function () {
			return load( '../app/views/progressbar.html' ).then( function ( Component ) {
				var ractive = new Component({
					data: {
                        progressbars: [
                            { name: 'ProgressBar1', value: 0, showvalue: 0 },
                            { name: 'ProgressBar2', value: 0, showvalue: 0 }
                        ],
                        intervals: [ +25, +10, -10, -25 ]
                    }
				});
                
				assert.equal( ractive.toHTML(), '<div class="row-pb"><div class="display-label">0%</div> <div class="progress-barB" style="width: 0%"></div></div><div class="row-pb"><div class="display-label">0%</div> <div class="progress-barB" style="width: 0%"></div></div> <select class="row-select"><option selected value="select" selected>Select Progress Bar</option> <option value="0">ProgressBar1</option><option value="1">ProgressBar2</option></select> <button disabled class="btns">+25</button><button disabled class="btns">+10</button><button disabled class="btns">-10</button><button disabled class="btns">-25</button>');
				
				
			});
		});
		
		it( 'Load ProgressBar1 of width:25% and one button', function () {
			return load( '../app/views/progressbar.html' ).then( function ( Component ) {
				var ractive = new Component({
					data: {
                        progressbars: [
                            { name: 'ProgressBar1', value: 25 }
                        ],
                        intervals: [ +25 ]
                    }
				});
				
				assert.equal( ractive.toHTML(), '<div class="row-pb"><div class="display-label">25%</div> <div class="progress-barB" style="width: 25%"></div></div> <select class="row-select"><option selected value="select" selected>Select Progress Bar</option> <option value="0">ProgressBar1</option></select> <button disabled class="btns">+25</button>');
			});
			
		});
        
        it( 'Load ProgressBar1 of width:125% and one button', function () {
			return load( '../app/views/progressbar.html' ).then( function ( Component ) {
				var ractive = new Component({
					data: {
                        progressbars: [
                            { name: 'ProgressBar1', value: 125 }
                        ],
                        intervals: [ -25 ]
                    }
				});
				
				assert.equal( ractive.toHTML(), '<div class="row-pb"><div class="display-label">125%</div> <div class="progress-barR" style="width: 100%"></div></div> <select class="row-select"><option selected value="select" selected>Select Progress Bar</option> <option value="0">ProgressBar1</option></select> <button disabled class="btns">-25</button>');
			});
			
		});
        
        it( 'Load ProgressBar2 of width:100% and one button', function () {
			return load( '../app/views/progressbar.html' ).then( function ( Component ) {
				var ractive = new Component({
					data: {
                        progressbars: [
                            { name: 'ProgressBar2', value: 100 }
                        ],
                        intervals: [ -25 ]
                    }
				});
				
				assert.equal( ractive.toHTML(), '<div class="row-pb"><div class="display-label">100%</div> <div class="progress-barB" style="width: 100%"></div></div> <select class="row-select"><option selected value="select" selected>Select Progress Bar</option> <option value="0">ProgressBar2</option></select> <button disabled class="btns">-25</button>');
			});
			
		});
        
        it( 'Load ProgressBar2 of width:100% and one button', function () {			
            var Template = '{{#each progressbars}}'+
                                '<div class="row-pb">'+
                                    '<div class="display-label">{{showvalue < 0 ? 0 : showvalue}}%</div> '+
                                    '<div class="progress-bar{{value > 100 ? \'R\' : \'B\'}}" style="width: {{value > 100 ? 100 : ( value < 0 ? 0 : value )}}%"></div>'+
                                '</div>'+
                                '{{/each}} '+
                                '<select value="{{selectedProgressBar}}" class="row-select">'+
                                    '<option selected value="select">Select Progress Bar</option> '+
                                    '{{#each progressbars :index}}'+
                                        '<option value="{{index}}">{{name}}</option>'+
                                    '{{/each}}'+
                                '</select> '+
                                '{{#each intervals}}'+
                                    '<button disabled="{{selectedProgressBar == \'select\'}}" on-click="@this.changeInterval(this)" class="btns">'+
                                        '{{this > 0 ? "+" : ""}}{{this}}'+
                                    '</button>'+
                            '{{/each}}';
     
            var ractive = new Ractive({
                template: Template,
				data: {
                    progressbars: [
                        { name: 'ProgressBar2', value: 100, showvalue: 100 }
                    ],
                    intervals: [ -25 ]
                }
			});
				
			assert.equal( ractive.toHTML(), '<div class="row-pb"><div class="display-label">100%</div> <div class="progress-barB" style="width: 100%"></div></div> <select class="row-select"><option selected value="select" selected>Select Progress Bar</option> <option value="0">ProgressBar2</option></select> <button disabled class="btns">-25</button>');
		});        
	});

}());
		
		