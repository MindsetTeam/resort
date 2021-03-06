import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import index from "../../screens/Admin/Dashboard/index";
import Header from "../../components/Header";

import income from "../../screens/Admin/Dashboard/income";
import guest from "../../screens/Admin/Dashboard/guest";
import room from "../../screens/Admin/Dashboard/Room/index";
import showRoom from "../../screens/Admin/Dashboard/Room/room";
import user from "../../screens/Admin/Dashboard/User/index";
import addUser from "../../screens/Admin/Dashboard/User/addUser";

const screens = {
   index: {
      screen: index,
      navigationOptions: ({ navigation }) => {
         return {
            headerTitle: () => (
               <Header title="Dashboard" navigation={navigation}></Header>
            ),
         };
      },
   },
   income: {
      screen: income,
   },
   guest: {
      screen: guest,
   },
   room: {
      screen: room,
   },
   showRoom: {
      screen: showRoom,
   },
   user: {
      screen: user,
   },
   addUser: {
      screen: addUser,
   },
};

const Dashboard = createStackNavigator(screens, {
   defaultNavigationOptions: {
      headerStyle: {
         backgroundColor: "#6A0E00",
      },
      headerTitleAlign: "center",
      headerTintColor: "#fff",
   },
});

export default Dashboard;
