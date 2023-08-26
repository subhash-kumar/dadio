import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuickGuide = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dadio Quick Start Guide</Text>
      <View style={styles.pointContainer}>
        <Text style={styles.point}>1. Sign up for a Dadio account.</Text>
        <Text style={styles.point}>2. Verify your email address.</Text>
        <Text style={styles.point}>3. Set up your profile information.</Text>
        <Text style={styles.point}>4. Explore and join communities.</Text>
        <Text style={styles.point}>5. Connect with friends and family.</Text>
        <Text style={styles.point}>6. Share your thoughts and photos.</Text>
        <Text style={styles.point}>7. Stay connected and have fun!</Text>
      </View>
    </View>
  )
}

export default QuickGuide

const styles = StyleSheet.create({
     container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pointContainer: {
    alignSelf: 'stretch',
  },
  point: {
    fontSize: 16,
    marginBottom: 10,
  },
})