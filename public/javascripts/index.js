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

  $scope.selectNote = function(note){
    $scope.selected_note = note;
  };

  $scope.root = new Note();

  // add sample notes
  var note1 = new Note('one text');
  var note2 = new Note('another text');
  var note22 = new Note('sub text');
  note2.addChild(note22);
  $scope.root.addChild(note1);
  $scope.root.addChild(note2);

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

