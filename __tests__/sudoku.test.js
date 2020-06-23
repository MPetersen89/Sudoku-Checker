import { Row } from './../src/sudoku.js';
import { Column } from './../src/sudoku.js';

describe('Row', () => {

  test('should ensure that each row contains input in each available space', () => {
    const row = new Row(1, 2, 3, 4, 5, 6, 7, 8, 9);
    expect(row.input1).toEqual(1);
    expect(row.input2).toEqual(2);
    expect(row.input3).toEqual(3);
    expect(row.input4).toEqual(4);
    expect(row.input5).toEqual(5);
    expect(row.input6).toEqual(6);
    expect(row.input7).toEqual(7);
    expect(row.input8).toEqual(8);
    expect(row.input9).toEqual(9);
  });

  test('should ensure that each row contains all numbers from 1 to 9 with no repeats', () => {
    const row = new Row(1, 2, 3, 4, 5, 6, 7, 8, 9);
    expect(row.rowCheck()).toEqual(true);
  });
});

describe('Column', () => {

  test('should ensure that each column contains input in each available space', () => {
    const column = new Column(1, 2, 3, 4, 5, 6, 7, 8, 9);
    expect(column.input1).toEqual(1);
    expect(column.input2).toEqual(2);
    expect(column.input3).toEqual(3);
    expect(column.input4).toEqual(4);
    expect(column.input5).toEqual(5);
    expect(column.input6).toEqual(6);
    expect(column.input7).toEqual(7);
    expect(column.input8).toEqual(8);
    expect(column.input9).toEqual(9);
  });
})