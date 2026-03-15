import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, NavigationProp } from "@react-navigation/native";


import ViewBackgroundColor from "../../components/View_component";
import Button_component from "../../components/Button_component";
import Button_edit from "../../components/Button_edit_profile";


import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';


interface UserType {
  name: string;
  email: string;
}

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<any>>();
  const [user, setUser] = useState<UserType | null>(null);

 
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.log("Error loading user data:", error);
      }
    };
    loadUserData();
  }, []);

  const handleLogoutConfirm = async () => {
    setModalVisible(false);
    await AsyncStorage.clear(); 
    navigation.navigate('Login');
  };

  return (
    <ViewBackgroundColor>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Title */}
        <View style={styles.container}>
          <Text style={styles.headerText}>Profile</Text>
        </View>

        {/* User Info Box */}
        <View style={styles.box}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userNameText}>
              {user?.name || "Guest User"}
            </Text>
            <Text style={styles.userEmailText}>
              {user?.email || "No email provided"}
            </Text>
          </View>
          
          <View style={styles.editBtnContainer}>
            <Button_edit
              children_button="Edit"
              onPress={() => navigation.navigate("Edit_profile")}
            />
          </View>
        </View>

        
        <View style={styles.premium}>
          <View style={styles.premiumicon}>
            <MaterialIcons name="workspace-premium" size={30} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.premiumTitle}>Premium Member</Text>
              <Text style={styles.premiumSubtitle}>New movies are coming for you!</Text>
            </View>
          </View>
        </View>

       
        <View style={styles.logout_btn}>
          <Button_component
            children_button="Log Out"
            onPress={() => setModalVisible(true)}
          />
        </View>

       
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.iconContainer}>
                <FontAwesome name="question" size={45} color="white" />
              </View>
              <Text style={styles.modalTitle}>Are you sure?</Text>
              <Text style={styles.modalSubtitle}>Do you really want to log out from your account?</Text>
              
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity style={styles.outlineButton} onPress={handleLogoutConfirm}>
                  <Text style={styles.outlineButtonText}>Log Out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.solidButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.solidButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ViewBackgroundColor>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  box: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 15,
    marginHorizontal: 20,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(37, 40, 53, 0.5)',
    alignItems: 'center',
  },
  userInfoContainer: {
    flex: 1,
  },
  userNameText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmailText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
    marginTop: 4,
  },
  editBtnContainer: {
    justifyContent: 'center',
  },
  premium: {
    height: 90,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: 'rgb(240,140,52)',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  premiumicon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  premiumTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  premiumSubtitle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.7)'
  },
  logout_btn: {
    margin: 25,
    marginTop: 40
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'rgb(31, 34, 42)',
    borderRadius: 30,
    padding: 30,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  outlineButton: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgb(93,202,215)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  outlineButtonText: {
    color: 'rgb(93,202,215)',
    fontSize: 16,
    fontWeight: '600',
  },
  solidButton: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgb(93,202,215)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  solidButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});