/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import realm from '../realm/realmConfig';

function LessonDatabaseScreen() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', address: '', course: '', yearLevel: 0 });
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const students = realm.objects('Student');
    setStudents(students);
  }, []);

  const handleAddStudent = () => {
    realm.write(() => {
      realm.create('Student', newStudent);
    });
    setNewStudent({ name: '', address: '', course: '', yearLevel: 0 });
  };

  const handleUpdateStudent = () => {
    realm.write(() => {
      const studentToUpdate = realm.objects('Student').filtered(`name = "${selectedStudent.name}"`)[0];
      studentToUpdate.name = newStudent.name;
      studentToUpdate.address = newStudent.address;
      studentToUpdate.course = newStudent.course;
      studentToUpdate.yearLevel = newStudent.yearLevel;
    });
    setNewStudent({ name: '', address: '', course: '', yearLevel: 0 });
    setSelectedStudent(null);
  };

  const handleDeleteStudent = (student) => {
    realm.write(() => {
      realm.delete(student);
    });
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setNewStudent({
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
        onChangeText={(text) => setNewStudent({ ...newStudent, yearLevel: parseInt(text) })}
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
          <View>
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.course}</Text>
            <Text>{item.yearLevel}</Text>
            <Button title="Edit" onPress={() => handleSelectStudent(item)} />
            <Button title="Delete" onPress={() => handleDeleteStudent(item)} />
          </View>
        )}
      />
    </View>
  );
}

export default LessonDatabaseScreen;
