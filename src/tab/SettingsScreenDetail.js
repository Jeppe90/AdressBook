import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
} from "react-native";
import {CustomHeader} from '../index'

export class SettingsScreenDetail extends Component {
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title="Setting Detail" navigation={this.props.navigation} />
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Setting detail</Text>
              </View>
            </SafeAreaView>
          );
    }
}