(function () {
	'use strict';
	describe( 'ractive-load', function () {
		var assert, load;
		assert = chai.assert;
		load = Ractive.load;
		
		it( 'should load a progressive-bar component with green bar', function () {
			return load( '../app/views/progressbar.html' ).then( function ( Component ) {
				var ractive = new Component({
					data: {
                        progressbars: [
                            { name: 'ProgressBar1', value: 0 },
                            { name: 'ProgressBar2', value: 0 }
                        ],
                        intervals: [ +25, +10, -10, -25 ]
                    }
				});
                
				assert.equal( ractive.toHTML(), '<div class="row-pb"><div class="display-label">0%</div> <div class="progress-barB" style="width: 0%"></div></div><div class="row-pb"><div class="display-label">0%</div> <div class="progress-barB" style="width: 0%"></div></div> <select class="row-select"><option selected value="select" selected>Select Progress Bar</option> <option value="0">ProgressBar1</option><option value="1">ProgressBar2</option></select> <button disabled class="btns">+25</button><button disabled class="btns">+10</button><button disabled class="btns">-10</button><button disabled class="btns">-25</button>');
				
				
			});
		});
		
		it( 'should load a progressive-bar component with red bar', function () {
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
		
	});

}());
		
		