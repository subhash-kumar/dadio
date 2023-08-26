import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Slider from "@react-native-community/slider";
import Foundation from 'react-native-vector-icons/Foundation';

const MySearchPreference = () => {

    const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedOnline, setSelectedOnline] = useState(false);
  const [selectedOffline, setSelectedOffline] = useState(false);
  const [ageRange, setAgeRange] = useState([18, 70]);
  const [distanceRange, setDistanceRange] = useState(5000);

  const toggleGender = (gender) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter((item) => item !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  return (
     <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>I want to find</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              selectedGenders.includes("Male") && styles.checkboxSelected,
            ]}
            onPress={() => toggleGender("Male")}
          >
            <Text>Male <Foundation name="male-symbol" size={20} color="black" /></Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.checkbox,
              selectedGenders.includes("Female") && styles.checkboxSelected,
            ]}
            onPress={() => toggleGender("Female")}
          >
            <Text>Female <Foundation name="female-symbol" size={20} color="black" /></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Show people from {ageRange[0]}-{ageRange[1]}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={18}
          maximumValue={70}
          step={1}
          value={(ageRange[0] + ageRange[1]) / 2} // Use the average of the age range
          onValueChange={(value) =>
            setAgeRange([ageRange[0], value, ageRange[1]])
          }
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Distance from 0 to {distanceRange}+
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10000}
          step={100}
          value={distanceRange}
          onValueChange={(value) => setDistanceRange(value)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Find people who are</Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, selectedOnline && styles.checkboxSelected]}
            onPress={() => setSelectedOnline(!selectedOnline)}
          >
            <Text>Online</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.checkbox,
              selectedOffline && styles.checkboxSelected,
            ]}
            onPress={() => setSelectedOffline(!selectedOffline)}
          >
            <Text>Offline</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.ButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MySearchPreference

const styles = StyleSheet.create({
    container: {
    padding: 10,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft:10
  },
  checkbox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: "lightblue",
    borderColor: "blue",
  },
  slider: {
    width: "100%",
  },
  searchButton: {
    alignItems:"center",
    borderWidth:1,
    borderColor:"black",
    padding:12,
    marginTop:10,
    backgroundColor:"black",
    borderRadius:20,
  },
  ButtonText: {
    fontSize:20,
    color:"white",
    fontWeight:"bold"
  },
})