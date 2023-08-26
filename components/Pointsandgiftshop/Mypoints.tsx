import { StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View, } from 'react-native';
import  React, { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

const Mypoints = () => {

    const navigation = useNavigation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentMethodSelect = (method) => {
    if (selectedPaymentMethod === method) {
      setSelectedPaymentMethod(null);
    } else {
      setSelectedPaymentMethod(method);
    }
  };

  return (
    <View>
      <View style={styles.heading}>
        <FontAwesome name="diamond" size={24} color="black" />
        <Text style={styles.text}>My Points - 272</Text>
      </View>
      <View>
        <Text style={styles.label}>Enter Points</Text>
        <TextInput placeholder="Enter Points" style={styles.input} />
      </View>
      <View style={styles.paymentContainer}>
        <TouchableOpacity
          style={[
            styles.payment,
            selectedPaymentMethod === "paytm" && styles.selectedPayment,
          ]}
          onPress={() => handlePaymentMethodSelect("paytm")}
        >
          <Entypo name="dot-single" size={24} color="black" />
          <Text>Paytm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.payment,
            selectedPaymentMethod === "other" && styles.selectedPayment,
          ]}
          onPress={() => handlePaymentMethodSelect("other")}
        >
          <Entypo name="dot-single" size={24} color="black" />
          <Text>Other Options</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>BUY</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pointsContainer}>
        <View style={styles.pointsRow}>
          <TouchableOpacity style={styles.points} onPress={()=>navigation.navigate("Earned Points")}>
            <FontAwesome name="diamond" size={24} color="black" />
            <Text style={styles.pointsText}>Earned Points</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.points} onPress={()=>navigation.navigate("Spend Points")}>
            <FontAwesome name="diamond" size={24} color="black" />
            <Text style={styles.pointsText}>Spend Points</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pointsRow}>
          <TouchableOpacity style={styles.points}>
            <MaterialCommunityIcons name="cash-100" size={28} color="black" />
            <Text style={styles.pointsText}>Payout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.points} onPress={()=>navigation.navigate("Payout Log")}>
            <MaterialCommunityIcons name="cash-100" size={28} color="black" />
            <Text style={styles.pointsText}>Payout Log</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Mypoints

const styles = StyleSheet.create({
     heading: {
    borderWidth: 1,
    borderColor: "skyblue",
    margin: 10,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "skyblue",
  },
  text: {
    fontSize: 20,
  },
  label: {
    margin: 10,
    marginLeft: 25,
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 10,
    width: "90%",
    alignSelf: "center",
    fontSize: 20,
  },
  paymentContainer: {
    marginLeft: 10,
  },
  payment: {
    display: "flex",
    flexDirection: "row",
    margin: 15,
    alignItems: "center",
  },
  selectedPayment: {
    backgroundColor: "lightgray",
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 9,
    padding: 16,
    margin: 10,
    alignItems: "center",
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  pointsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pointsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 10,
  },
  points: {
    alignItems: "center",
    width: "50%",
    margin: 10,
    backgroundColor: "lightgray",
    padding: 15,
    borderRadius: 15,
  },
  pointsText: {
    fontSize: 15,
    marginTop: 5,
  },
})