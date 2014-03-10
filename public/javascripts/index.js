KEY_DOWN = 40;
KEY_UP = 38;

function TreeController($scope, $document) {
  $scope.selectNextNote = function() {
    var next_note = $scope.selected_note.nextSibling();
    if(next_note){
      $scope.$apply(function(){
        $scope.selected_note = next_note;
      });
    }
  };

  $scope.selectPreviousNote = function() {
    var prev_note = $scope.selected_note.previousSibling();
    if(prev_note){
      $scope.$apply(function(){
        $scope.selected_note = prev_note;
      });
    }
  };

  $scope.root = new Note();

  // add sample notes
  $scope.root.addChild(new Note('one text'));
  $scope.root.addChild(new Note('another text'));

  // select first note
  $scope.selected_note = $scope.root.firstChild();

  $document.bind('keydown', function(event) {
    if(event.keyCode == KEY_DOWN){
      $scope.selectNextNote();
    } else if(event.keyCode == KEY_UP){
      $scope.selectPreviousNote();
    }
  });

}

