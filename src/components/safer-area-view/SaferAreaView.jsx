import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const Styles = StyleSheet.create({
  container: {
    paddingTop: Platform?.OS === 'android' ? StatusBar?.currentHeight : 0,
  },
});

export default function SaferAreaView(props) {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <SafeAreaView style={[Styles.container, props?.style]}>
        {/* eslint-disable-next-line react/prop-types */}
        {props?.children}
      </SafeAreaView>
      {/* eslint-disable-next-line react/style-prop-object */}
      <ExpoStatusBar style="auto" />
    </>
  );
}
