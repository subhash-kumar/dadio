import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useRoute } from "@react-navigation/native";



let flatListRef = null;

const OptionsMenuHeader = React.memo(({ navigation, showMenu, onToggleMenu }) => {
  return (
    <View style={styles.headerRightContainer}>
      <AntDesign name="gift" size={28} color="red" style={styles.headerIcon} />
      <Ionicons
        name="call"
        size={24}
        color="lightgreen"
        style={styles.headerIcon}
      />
      <TouchableOpacity onPress={onToggleMenu}>
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="black"
          style={styles.headerIcon}
        />
      </TouchableOpacity>
    </View>
  );
});


const OptionsMenu = () => {

  const handleReport = async () => {
    const route = useRoute();
     try {
      const response = await fetch(
        `https://www.dadio.in/apps/serverapi/server/report-profile.php?api_key=HASH490J669&user_id=1&profile_id=${route.params.profileId}`,
        {
          method: "POST",
        }
      );

      if (response.ok) {
        Alert.alert("User Reported", "The user has been reported.");
      } else {
        Alert.alert("Error", "An error occurred while reporting the user.");
      }
    } catch (error) {
      console.error("Error reporting user:", error);
      Alert.alert("Error", "An error occurred while reporting the user.");
    }
  };

  return (
    <View style={styles.optionsMenuContainer}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>View Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Block</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Clear Chat History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleReport}>
        <Text style={styles.optionText}>Report</Text>
      </TouchableOpacity>
    </View>
  );
};


const ChatMessages = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const route = useRoute();

  const fetchChatMessages = async () => {
    try {
      const response = await fetch(
        "https://www.dadio.in/apps/serverapi/server/chat-window.php?api_key=HASH490J669&user_id=1&profile_id=2"
      );
      const data = await response.json();
      setMessages(data.chatwindow_data);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.scrollToEnd({ animated: true });
    }
  }, []);

  const sendMessage = async () => {
    if (message.trim() === "") {
      return;
    }

    try {
      const response = await fetch(
        `https://www.dadio.in/apps/serverapi/server/chat-send.php?api_key=HASH490J669&user_id=1&profile_id=2&msg_type=text&message=${encodeURIComponent(
          message
        )}`,
        {
          method: "POST",
        }
      );

      setMessage("");
      fetchChatMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useLayoutEffect(() => {
    const fetchMessagesAndToggleMenu = async () => {
      await fetchChatMessages();
      setShowMenu(!showMenu);
      if (showMenu) {
        setShowMenu(false);
      }
    };
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerTitleContainer}>
          <Image
            source={{ uri: route.params.profilePicUri }}
            style={styles.profilePhoto}
          />
          <Text style={styles.headerTitle}>{route.params.displayName}</Text>
        </View>
      ),
      headerRight: () => (
        <OptionsMenuHeader
        navigation={navigation}
        showMenu={showMenu}
        onToggleMenu={fetchMessagesAndToggleMenu}
      />
      ),
    });
  }, [navigation, showMenu]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={(ref) => (flatListRef = ref)}
        data={messages.reverse()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.msg_from === "2"
                ? styles.receivedMessage
                : styles.sentMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.msg_text}</Text>
            <Text>{item.msg_time}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messagesContent}
        onLayout={() => {
          if (messages.length > 0) {
            flatListRef.scrollToEnd({ animated: true });
          }
        }}
      />
      {showMenu && <OptionsMenu onClose={() => setShowMenu(false)} />}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.giftLeft}>
          <FontAwesome name="gift" size={28} color="red" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Type your message..."
        />

        <TouchableOpacity style={styles.gift}>
          <Entypo name="attachment" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.gift}>
          <Entypo name="camera" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.gift}>
          <Feather name="mic" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  headerIcon: {
    marginLeft: 12,
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  messageContainer: {
    maxWidth: "80%",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "lightgreen",
  },
  messageText: {
    fontSize: 16,
  },
  giftLeft: {
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
  },
  gift: {
    marginRight: 10,
  },
  messagesContent: {
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#F4F6F8",
  },
  sendButton: {
    backgroundColor: "#0084FF",
    padding: 10,
    borderRadius: 20,
  },
  optionsMenuContainer: {
    position: 'absolute',
    top: -20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    paddingVertical: 8,
  },
  optionText: {
    fontSize: 16,
  },
});

export default ChatMessages;
