export function Row(input1, input2, input3, input4, input5, input6, input7, input8, input9) {
  this.input1 = input1;
  this.input2 = input2;
  this.input3 = input3;
  this.input4 = input4;
  this.input5 = input5;
  this.input6 = input6;
  this.input7 = input7;
  this.input8 = input8;
  this.input9 = input9;
}

Row.prototype.rowCheck = function() {
  if ((this.input1 !== this.input2) && (this.input2 !== this.input3) && (this.input3 !== this.input4) && (this.input4 !== this.input5) && (this.input5 !== this.input6) && (this.input6 !== this.input7) && (this.input7 !== this.input8) && (this.input8 !== this.input9)) {
    return true;
  }
  else {
    return false;
  }
};

export function Column(input1, input2, input3, input4, input5, input6, input7, input8, input9) {
  this.input1 = input1;
  this.input2 = input2;
  this.input3 = input3;
  this.input4 = input4;
  this.input5 = input5;
  this.input6 = input6;
  this.input7 = input7;
  this.input8 = input8;
  this.input9 = input9;
}

Column.prototype.columnCheck = function() {
  if ((this.input1 !== this.input2) && (this.input2 !== this.input3) && (this.input3 !== this.input4) && (this.input4 !== this.input5) && (this.input5 !== this.input6) && (this.input6 !== this.input7) && (this.input7 !== this.input8) && (this.input8 !== this.input9)) {
    return true;
  }
  else {
    return false;
  }
}