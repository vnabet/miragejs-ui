import type { IPet } from './../models/IPet';

interface IDB {
  pets:IPet[];
}


const db:IDB = {
  pets: [
    {name: 'Guaito', id: 1},
    {name: 'Gandalf', id: 2},
    {name: 'Minette', id: 3},
    {name: 'Corail', id: 4},
  ]
};


export default db;