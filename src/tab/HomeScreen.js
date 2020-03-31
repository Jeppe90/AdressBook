import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator
} from "react-native";
import { CustomHeader } from "../index";
import faker from 'faker';

export class HomeScreen extends Component {
  state = {
    isLoading: false,
    contacts: []
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    this.loadContacts();
  }

  loadContacts = () => {
    fetch("http://192.168.0.108:8080/contacts")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          contacts: Array.from(responseJson),
          inMemoryContacts: Array.from(responseJson)
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  navigateToContactDetail = item => {
    this.props.navigation.navigate("ContactDetail", { item });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.navigateToContactDetail(item)}>
      <View style={styles.allItemStyle}>
        <Text style={styles.itemNameStyle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  searchContacts = value => {
    const filteredContacts = this.state.inMemoryContacts.filter(contact => {
      
      let contactLowerCase = contact.name.toLowerCase();
      let searchTermLowerCase = value.toLowerCase();

      return contactLowerCase.indexOf(searchTermLowerCase) > -1;
    });
    this.setState({ contacts: filteredContacts });
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader
          title="Home"
          isHome={true}
          navigation={this.props.navigation}
        />
        <Text>Home</Text>
        <View style={{ flex: 1 }}>
          <TextInput
            placeHolder="Search"
            placeholderTextColor="#dddddd"
            style={styles.textInput}
            onChangeText={value => this.searchContacts(value)}
          />
          <View style={{ flex: 1, backgroundColor: "#2f363c" }}>
            {this.state.isLoading ? (
              <View style={styles.loadingStyle}>
                <ActivityIndicator size="large" color="#bad555" />
              </View>
            ) : null}
            <FlatList
              style={styles.contactList}
              keyExtractor={item => item.id}
              data={this.state.contacts}
              onPress={this.navigateToContactDetail}
              renderItem={this.renderItem}
              ListEmptyComponent={() => (
                <View style={styles.contactListEmptyStyle}>
                  <Text style={{ color: "#bad555" }}>No Contacts found</Text>
                </View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    backgroundColor: "#2f363c",
    fontSize: 36,
    padding: 10,
    color: "white",
    borderBottomWidth: 0.5,
    borderBottomColor: "#7d90a0",
    marginTop: 50
  },
  loadingStyle: {
    ...StyleSheet.absoluteFill,
    alignItems: "center",
    justifyContent: "center"
  },
  contactList: {
    flex: 1,
    marginTop: 20
  },
  contactListEmptyStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  itemNameStyle: {
    color: "#bada55",
    fontWeight: "bold",
    fontSize: 26
  },
  itemPhonenumberStyle: {
    color: "white",
    fontWeight: "bold"
  },
  allItemStyle: {
    padding: 5,
    alignItems: "center"
  }
});

// import React, { Component } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   FlatList,
//   ActivityIndicator
// } from "react-native";
// import Index from './navigation'
// import ContactList from "./components/ContactList";

// export default class App extends Component {
//     state = {
//       isLoading: false,
//       contacts: []
//     }
//   loadContacts = () => {
//     fetch("http://192.168.0.14:8080/contacts")
//       .then(response => response.json())
//       .then(responseJson => {
//         this.setState({
//           isLoading: false,
//           contacts: Array.from(responseJson),
//           inMemoryContacts: Array.from(responseJson)
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   async componentDidMount() {
//     this.setState({ isLoading: true });
//     this.loadContacts();
//   }
//   renderItem = ({ item }) => (
//     <View style={styles.allItemStyle}>
//       <Text style={styles.itemNameStyle}>{item.name}</Text>
//       <Text style={styles.itemPhonenumberStyle}>{item.phoneNumber}</Text>
//     </View>
//   );

//   searchContacts = value => {
//     const filteredContacts = this.state.inMemoryContacts.filter(contact => {
//       let contactLowerCase = contact.name.toLowerCase();

//       let searchTermLowerCase = value.toLowerCase();

//       return contactLowerCase.indexOf(searchTermLowerCase) > -1;
//     });
//     this.setState({ contacts: filteredContacts });
//   };

//   render() {
//     return (
//       <>
//       <Index/>
//       </>
//       <View style={{ flex: 1 }}>
//         <TextInput
//           placeHolder="Search"
//           placeholderTextColor="#dddddd"
//           style={styles.textInput}
//           onChangeText={value => this.searchContacts(value)}
//         />
//         <View style={{ flex: 1, backgroundColor: "#2f363c" }}>
//           {this.state.isLoading ? (
//             <View style={styles.loadingStyle}>
//               <ActivityIndicator size="large" color="#bad555" />
//             </View>
//           ) : null}
//           <FlatList
//             style={styles.contactList}
//             keyExtractor={item => item.id}
//             data={this.state.contacts}
//             renderItem={this.renderItem}
//             ListEmptyComponent={() => (
//               <View style={styles.contactListEmptyStyle}>
//                 <Text style={{ color: "#bad555" }}>No Contacts found</Text>
//               </View>
//             )}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   textInput: {
//     backgroundColor: "#2f363c",
//     fontSize: 36,
//     padding: 10,
//     color: "white",
//     borderBottomWidth: 0.5,
//     borderBottomColor: "#7d90a0",
//     marginTop: 50
//   },
//   loadingStyle: {
//     ...StyleSheet.absoluteFill,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   contactList: {
//     flex: 1,
//     marginTop: 20
//   },
//   contactListEmptyStyle: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 50
//   },
//   itemNameStyle: {
//     color: "#bada55",
//     fontWeight: "bold",
//     fontSize: 26
//   },
//   itemPhonenumberStyle: {
//     color: "white",
//     fontWeight: "bold"
//   },
//   allItemStyle: {
//     minHeight: 70,
//     padding: 5,
//     alignItems: "center"
//   }
// });
