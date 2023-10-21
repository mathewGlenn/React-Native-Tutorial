/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import realm from '../realm/realmConfig';

function LessonDatabaseScreen() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ recordID: '', name: '', address: '', course: '', yearLevel: '' });
  const [selectedStudent, setSelectedStudent] = useState(null);

  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    const students = realm.objects('Student');
    setStudents(students);
  }
  const handleAddStudent = () => {
    realm.write(() => {
      realm.create('Student', newStudent);r
    });
    setNewStudent({ recordID: makeid(10), name: '', address: '', course: '', yearLevel: '' });
  };

  const handleUpdateStudent = () => {
    realm.write(() => {
      const studentToUpdate = realm.objects('Student').filtered(`recordID = "${selectedStudent.recordID}"`)[0];
      studentToUpdate.name = newStudent.name;
      studentToUpdate.address = newStudent.address;
      studentToUpdate.course = newStudent.course;
      studentToUpdate.yearLevel = newStudent.yearLevel;
    });
    setNewStudent({ recordID: '', name: '', address: '', course: '', yearLevel: '' });
    setSelectedStudent(null);
  };

  const handleDeleteStudent = (student) => {
    realm.write(() => {
      realm.delete(student);
    });
    getStudents();
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setNewStudent({
      recordID: student.recordID,
      name: student.name,
      address: student.address,
      course: student.course,
      yearLevel: student.yearLevel,
    });
  };

  return (
    <View>
      <Text>Add/Update Student:</Text>
      <TextInput
        placeholder="Name"
        value={newStudent.name}
        onChangeText={(text) => setNewStudent({ ...newStudent, name: text })}
      />
      <TextInput
        placeholder="Address"
        value={newStudent.address}
        onChangeText={(text) => setNewStudent({ ...newStudent, address: text })}
      />
      <TextInput
        placeholder="Course"
        value={newStudent.course}
        onChangeText={(text) => setNewStudent({ ...newStudent, course: text })}
      />
      <TextInput
        placeholder="Year Level"
        value={newStudent.yearLevel.toString()}
        onChangeText={(text) => setNewStudent({ ...newStudent, yearLevel: text })}
      />
      {selectedStudent ? (
        <Button title="Update" onPress={handleUpdateStudent} />
      ) : (
        <Button title="Add" onPress={handleAddStudent} />
      )}

      <FlatList
        data={students}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={{padding: 20}}>
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.course}</Text>
            <Text>{item.yearLevel}</Text>
            <Button title="Edit" onPress={() => handleSelectStudent(item)} />
            <View style={{marginTop: 10}}  />
            <Button title="Delete" onPress={() => handleDeleteStudent(item)} />
          </View>
        )}
      />
    </View>
  );
}

export default LessonDatabaseScreen;
