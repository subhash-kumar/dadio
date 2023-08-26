import { ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity } from 'react-native';
import  React, { useEffect, useState } from 'react';
import { Picker } from "@react-native-picker/picker";

const BasicInfo = () => {

   const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState();
  const [profession, setProfession] = useState("");

  const basicinfo = async () => {
    try {
      const response = await fetch(
        "https://www.dadio.in/apps/serverapi/server/basic-info.php?api_key=HASH490J669&user_id=2"
      );
      const data = await response.json();
      if (response.ok) {
        setData(data);
        setName(data.name);
        setDisplayname(data.display_name);
        setAge(data.age);
        setHeight(data.height);
        setProfession(data.profession);
      }
    } catch (err) {
      console.log("Error on fetching basic info", err);
    }
  };
  useEffect(() => {
    basicinfo();
  }, []);
  console.log(data);

  //Handle Selectstate

  const [statedata, setStateData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  const state = async () => {
    try {
      const response = await fetch(
        "https://www.dadio.in/apps/serverapi/server/state.php"
      );
      const data = await response.json();
      if (response.ok) {
        setStateData(data);
      }
    } catch (err) {
      console.log("Error on fetching state data", err);
    }
  };
  useEffect(() => {
    state();
  }, []);

  const handleSelectState = (selectedValue) => {
    setSelectedState(selectedValue);
  };

  //Handle City
  const [cityData, setCityData] = useState([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const fetchCityData = async () => {
    try {
      const response = await fetch(
        "https://www.dadio.in/apps/serverapi/server/city.php?state_id=2"
      );
      const data = await response.json();
      if (response.ok) {
        setCityData(data);
      }
    } catch (err) {
      console.log("Error on fetching city data", err);
    }
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const handleSelectCity = (selectedValue) => {
    setSelectedCity(selectedValue);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Display Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Display name"
          value={displayname}
          onChangeText={(text) => setDisplayname(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={(text) => setAge(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Height"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Profession</Text>
        <TextInput
          style={styles.input}
          placeholder="Profession"
          value={profession}
          onChangeText={(text) => setProfession(text)}
        />
      </View>
      <View style={styles.stateContainer}>
        <Text style={styles.label}>State</Text>

        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setShowDropdown(!showDropdown)}
        >
          <Text style={styles.dropdownButtonText}>
            {selectedState || "Select a state"}
          </Text>
        </TouchableOpacity>

        {showDropdown && (
          <Picker
            selectedValue={selectedState}
            onValueChange={handleSelectState}
          >
            <Picker.Item label="Select a state" value="" />
            {statedata.state_list.map((state) => (
              <Picker.Item
                key={state.state_id}
                label={state.state_name}
                value={state.state_name}
              />
            ))}
          </Picker>
        )}
      </View>
      <View style={styles.cityContainer}>
        <Text style={styles.label}>City</Text>

        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setShowCityDropdown(!showCityDropdown)}
        >
          <Text style={styles.dropdownButtonText}>
            {selectedCity || "Select a city"}
          </Text>
        </TouchableOpacity>

        {showCityDropdown && cityData.city_list?.length > 0 && (
          <Picker selectedValue={selectedCity} onValueChange={handleSelectCity}>
            <Picker.Item label="Select a city" value="" />
            {cityData.city_list.map((city) => (
              <Picker.Item
                key={city.city_id}
                label={city.city_name}
                value={city.city_name}
              />
            ))}
          </Picker>
        )}
      </View>
    </ScrollView>
  )
}

export default BasicInfo

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  stateContainer: {
    marginBottom: 20,
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  cityContainer: {
    marginBottom: 20,
  },
})