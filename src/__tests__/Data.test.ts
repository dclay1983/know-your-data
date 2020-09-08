import Data from '../index';
import { Graph } from '../graph/index';
//import { LinkedList } from '../linkedlist/LinkedList';
import { LinkedList } from '../index';

test('Data should exist', () => {
  expect(Data).toBeDefined();
});

test('Data should have property graph', () => {
  expect(Data).toHaveProperty('Graph');
});

test('Data should have property linkedList', () => {
  expect(Data).toHaveProperty('LinkedList');
});

test('Data.graph should be a new instance of Graph', () => {
  expect(new Data.Graph()).toBeInstanceOf(Graph);
});

test('Data.linkedList should be a new instance of LinkedList', () => {
  expect(new Data.LinkedList()).toBeInstanceOf(LinkedList);
});
