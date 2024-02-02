// ProfilePic.js
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function ProfilePic({ source }) {
  return (
    <Image
      style={styles.profilePic}
      source={source}
    />
  );
}

const styles = StyleSheet.create({
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
});
