import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import dummyContacts from '../assets/data/contacts.json';
// const [data, setData] = useState([]);
// const navigation = useNavigation();


const Random = () => {

const [searchTerm, setSearchTerm] = useState('');
 const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

 useEffect(() => {
    const newContacts = dummyContacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilteredContacts(newContacts);
  }, [searchTerm]);

  return (
    <SafeAreaView>
      <View style={styles.page}>
        <TextInput value={searchTerm} onChangeText={setSearchTerm} style={styles.searchInput} placeholder='Search...' />
    <FlatList style={styles.contactName}
      data={filteredContacts}
      renderItem={({item})=> <Text style={styles.contactName}>{item.user_display_name}</Text>}
      ItemSeparatorComponent={()=> <View style={styles.separator} />}
    />
    </View>
    </SafeAreaView>
  )
}

export default Random

const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  contactName: {
    fontSize: 16,
    marginVertical: 10,
  },
  separator:{
    width: '100%',
    height: 2,
    backgroundColor: '#f0f0f0'
  },
  searchInput:{
    backgroundColor: '#fbffff',
    padding: 10,
    borderRadius: 5,
  },
})