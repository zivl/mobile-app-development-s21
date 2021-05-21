import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

const registerForPushNotifications = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  let finalStatus;
  if (status !== 'granted') {
    const { status: askStatus } = await Notifications.requestPermissionsAsync();
    finalStatus = askStatus;
  } else {
    finalStatus = status;
  }
  if (finalStatus === 'granted') {
    const data = await Notifications.getExpoPushTokenAsync();
    const token = data.data;
    console.log({ token });
  } else {
    console.error('No permissions for push notifications');
  }
};

export default function App() {
  const [notification, setNotification] = useState();
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotifications();

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      console.log({ notification });
      setNotification(notification);
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log({ response });
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      {notification ? (
        <View>
          <Text>{notification.request.content.title}</Text>
          <Text>{notification.request.content.body}</Text>
          <Text>{notification.request.content.subtitle}</Text>
          <Text>{JSON.stringify(notification.request.content.data)}</Text>
        </View>
      ) : (
        <Text>No Notifications At The Moment</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
