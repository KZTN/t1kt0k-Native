import React from 'react';
import {NewButton} from './styles.js';
import EntypoIcons from 'react-native-vector-icons/Entypo';

export default function Button() {
  return (
    <NewButton>
      <EntypoIcons name="plus" size={22} color="#000" />
    </NewButton>
  );
}
