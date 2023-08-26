import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DeleteAccount = () => {

    const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteAccount = async () => {
    try {
      const apiKey = 'HASH490J669';
      const userId = '2';
      const apiUrl = `https://www.dadio.in/apps/serverapi/server/delete-account.php?api_key=${apiKey}&user_id=${userId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Account deleted successfully');
        // Close the modal after deleting the account
        setModalVisible(false);
      } else {
        console.error('Failed to delete account');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.optionRow}
        onPress={() => setModalVisible(true)}
      >
        <AntDesign name="delete" size={24} color="lightgray" />
        <Text style={styles.optionText}>Delete Account</Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeading}>
              <Text style={styles.headText}>Delete Account</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeText}>
                  <AntDesign name="close" size={24} color="white" />
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              <Text style={styles.modalText}>
                Are you sure you want to delete your account? This action is irreversible.
              </Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDeleteAccount}
              >
                <Text style={styles.deleteButtonText}>Delete Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default DeleteAccount

const styles = StyleSheet.create({
    optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 19,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 0,
    width: '80%',
  },
  modalHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor:"black",
    padding:10
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"white"
  },
  closeText: {
    fontSize: 20,
  },
  modalBody: {
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontWeight:"bold"
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin:10
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})