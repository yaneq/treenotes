
function TreeController( $scope) {
  $scope.root = new Note();
  $scope.selected_note = $scope.root.firstChild();
}

