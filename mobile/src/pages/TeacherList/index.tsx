import React, { useState } from  'react';
import { View, ScrollView, Text, TextInput, AsyncStorage } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacherDTO } from '../../components/TeacherItem';
import api from '../../services/api';

function TeacherList(){
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const teacherFavorites = JSON.parse(response);
        const teacherIdFavorites = teacherFavorites.map((teacher:ITeacherDTO) => { return teacher.id})
        setFavorites(teacherIdFavorites);
      }
    });
  }
  async function handleFilterSubmit(){
    loadFavorites()
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });
    setIsFilterVisible(false);
    setTeachers(response.data)
  }

  function handleToggleFilterVisible() {
    setIsFilterVisible(!isFiltersVisible)
  }
  return (
    <View style={ styles.container }>
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={20} color="#FFF"/>
          </BorderlessButton>
        )}>
        { isFiltersVisible &&( 
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={ text => setSubject(text) }
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria?"
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  style={styles.input}
                  value={week_day}
                  onChangeText={ text => setWeekDay(text) }
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"/>
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput 
                  style={styles.input}
                  value={time}
                  onChangeText={ text => setTime(text) }
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o horário?"
                />
              </View>
            </View>
            <RectButton 
              onPress={handleFilterSubmit} 
              style={styles.submitButton}
            >
              <Text style={styles.submitText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{paddingHorizontal: 16,
        paddingBottom:16,
      }}
      >
        {teachers.map((teacher: ITeacherDTO) => { 
          return (
            <TeacherItem 
              key={teacher.id} 
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          )
        })}      
       
      </ScrollView>
      
    </View>
  );
}
export default TeacherList;