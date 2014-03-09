function Note(parent){
  this.parent = parent;
  this.children = [
    { text: 'some text' },
    { text: 'some text' }
  ];
}

Note.prototype.firstChild = function() {
  if(this.children.length > 0) {
    return this.children[0];
  }
  return null;
};

Note.prototype.lastChild = function() {
  if(this.childen.length > 0) {
    return this.children[this.childen.length-1];
  }
  return null;
};

Note.prototype.nextSibling = function() {
  if(this.parent) {
    var idx = this.parent.children.indexOf(this);
    if(this.parent.children.length < idx + 2) {
      return this.parent.children[idx + 1];
    }
  }
  return null;
};

// Tree.prototype.addNew = function(){
//   this.notes.push({
//     text: 'another text'
//   });
// };
