import { StyleSheet } from 'react-native'
import React from 'react'
import StackNavigator from './StackNavigator'
import { UserProvider } from './UserContext'

export default function App() {
  return (
    <>
    <UserProvider>
      <StackNavigator />
      </UserProvider>
    </>
  )
}

const styles = StyleSheet.create({})