/* eslint-disable prettier/prettier */
import Realm from 'realm';

class Student {}

Student.schema = {
  name: 'Student',
  properties: {
    name: 'string',
    address: 'string',
    course: 'string',
    yearLevel: 'string',
  },
};

const realm = new Realm({ schema: [Student] });

export default realm;
