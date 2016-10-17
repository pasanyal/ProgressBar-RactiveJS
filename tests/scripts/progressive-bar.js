var ractivePB;
Ractive.DEBUG = false;
	Ractive.load('templates/progress-bar.html').then(function(ProgressBar){
		ractivePB = new ProgressBar({
			el: '#contentpb',
			data: {	
				bars:[
					{name:'progressbar1', level:0},
					{name:'progressbar2', level:0},
					{name:'progressbar3', level:0},
				],
				increments: [
					{increment:25}, 
					{increment:10}, 
					{increment:-10}, 
					{increment:-25}]
			},
			increaseLevel: function(increment){
				var selectedPbar = this.get('selectedBar');
				if(selectedPbar === null)
					return;
					
				var newLevel = (ractivePB.get('bars[' + selectedPbar + '].level') + increment);
				if(newLevel < 0)
					newLevel = 0;
				
				ractivePB.set('bars[' + selectedPbar + '].level', newLevel);
			}
		});
	});