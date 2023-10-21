/* eslint-disable prettier/prettier */
import Realm from 'realm';

class Student extends Realm.Object {}

Student.schema = {
  name: 'Student',
  properties: {
    recordID: 'string',
    name: 'string',
    address: 'string',
    course: 'string',
    yearLevel: 'string',
  },
  primaryKey: 'recordID',
};

const realm = new Realm({ schema: [Student], schemaVersion: 6 });

export default realm;
