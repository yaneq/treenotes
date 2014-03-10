KEY_DOWN = 40;
KEY_UP = 38;
KEY_RIGHT = 39;
KEY_LEFT = 37;

var root = [];

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

  $scope.selectFirstChild = function() {
    var first_child = $scope.selected_note.firstChild();
    if(first_child) {
      $scope.$apply(function() {
        $scope.selected_note = first_child;
      });
    }
  };

  $scope.selectParent = function() {
    var parent = $scope.selected_note.parent;
    if(parent && parent != $scope.root) {
      $scope.$apply(function() {
        $scope.selected_note = parent;
      });
    }
  };

  $scope.selectNote = function(note){
    $scope.selected_note = note;
  };

  $scope.root = root = new Note();

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
    } else if(event.keyCode == KEY_RIGHT){
      $scope.selectFirstChild();
    } else if(event.keyCode == KEY_LEFT){
      $scope.selectParent();
    }
  });
}
