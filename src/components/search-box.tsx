import React from 'react';
import { Box } from '../atoms';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  value: string;
  onChangeText: (value: string) => void;
};

const SearchBox = ({ value, onChangeText }: Props) => {
  return (
    <Box
      flexDirection="row"
      gap={'xs'}
      alignItems="center"
      style={{
        width: '100%',
        backgroundColor: 'rgba(0,0,0, 0.05)',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
      }}
    >
      <Ionicons name="search" size={22} color={'rgba(0,0,0, 0.5)'} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search"
        style={{ flex: 1 }}
      />
    </Box>
  );
};

export default SearchBox;
