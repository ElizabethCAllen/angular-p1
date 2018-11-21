import { Todo } from '../model/todo';

export const TODO: Todo[] = [
    { id: 1, name: 'Take out trash', tags: ['Daily','Weekly'], isCompleted: false, isDeleted: false },
    { id: 2, name: 'Walk the dog', tags: ['Daily'], isCompleted: false, isDeleted: false },
    { id: 3, name: 'Clean the bathroom', tags: ['Weekly'], isCompleted: false, isDeleted: false },
    { id: 4, name: 'Do the dishes', tags: ['Daily', 'Weekly'], isCompleted: false, isDeleted: false },
    { id: 5, name: 'Mow the lawn', tags: ['Monthly', 'Yearly'], isCompleted: false, isDeleted: false }
];
