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
          <ProfileDetail label="Officer Name" value="Nilanth Gunawardana" />
          <ProfileDetail label="Officer ID" value="4561T" />
          <ProfileDetail label="Officer Position" value="Traffic Officer A Grade" />
          <ProfileDetail label="Officer Age" value="28" />
          <ProfileDetail label="Current Police Station" value="Kadawatha Police Station" />
        </View>

        {/* About the Officer */}
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 15, marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>About the Officer</Text>
          <Text>About the officer details</Text>
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

const ProfileDetail = ({ label, value }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
    <Text style={{ fontWeight: 'bold' }}>{label} :</Text>
    <Text style={{ borderBottomWidth: 1, borderColor: 'black', marginLeft: 10 }}>{value}</Text>
  </View>
);

export default OfficerProfileStatusScreen;
