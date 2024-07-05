import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const OfficerProfileStatusScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B72B9' }}>
      <View style={{ padding: 20, flex: 1 }}>
        {/* Logo and welcome part */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image
            source={require("../assets/TrafficTracerLogo.png")}
            style={{ width: 50, height: 50, marginBottom: 5 }}
          />
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Officer Profile Details</Text>
        </View>

        {/* Officer Details */}
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 15, marginTop: 20 }}>
          {/* Details as before */}
        </View>

        {/* About the Officer */}
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 15, marginTop: 20 }}>
          {/* About section as before */}
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity
          style={{ backgroundColor: '#0B5AB9', borderRadius: 20, paddingVertical: 15, alignItems: 'center', marginTop: 20 }}
          onPress={() => navigation.navigate('OfficerUpdateProfile')}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OfficerProfileStatusScreen;
