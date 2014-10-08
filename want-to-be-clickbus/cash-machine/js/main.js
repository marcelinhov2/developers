angular.module('app', []);

angular.module('app').controller('cashMachineController', ['$scope', function($scope){
	$scope.calculate = function(e){
		e.preventDefault()

		$scope.money = []

		var notes = []
		var banknotes = [100, 50, 20, 10]
		var total_amount = $scope.amount

		if(!total_amount){
			$scope.money.push('Empty Set')
			return false
		}

		if(total_amount < 0){
			alert('InvalidArgumentException')
			return false
		}

		while(total_amount > 0){
			for(var i = 0; i < banknotes.length; i++){
				note = banknotes[i]

				while(total_amount >= 0){
					if(total_amount - note < 0)
						break;

					notes.push(note)
					total_amount -= note
				}
			}

			if(total_amount > 0){
				alert('NoteUnavailableException')
				return false
			}
		}

		$scope.money = notes;
	}
}]);