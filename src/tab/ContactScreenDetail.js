import React, { Component } from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList } from "react-native";
import { CustomHeader } from "../index";


export class ContactScreenDetail extends Component {

 contactDetails = (contact) => {
  return (
    <View>
      <Text>{contact.name}</Text>
      <Text>{contact.phoneNumber}</Text>
      <Text>{contact.description}</Text>
    </View>
    );
}
    
//  renderAdmin(contact) {
//      if (contact.userId === this.props.currentUserId) {
//          return (
//              <View className="right floated content">
//                  <Link to={`/contacts/edit/${contact.id}`} className="ui button primary">
//                      Edit
//                  </Link>
//                  <Link to={`/contacts/delete/${contact.id}`} className="ui button negative">
//                      Delete
//                  </Link>
//                  <Link to={`/contacts/show/${contact.id}`} className="ui button">
//                      Details
//                  </Link>
//              </div>
//          );
//      }
//  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Home Detail" navigation={this.props.navigation} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {this.contactDetails(this.props.route.params.item)}
        </View>
      </SafeAreaView>
    );
  }
}

// import React from "react";
// //import faker from 'faker';
// import { StyleSheet, Text, View, FlatList } from "react-native";

// const ContactDetails = ({ contact }) => {
//   return (
//     <View>
//       <Text>{contact.name}</Text>
//     </View>

//     <div className="ui container comments">
//         <div className="comment">
//             <a href="/" className="avatar">
//                 <img alt="avatar" src={faker.image.avatar()}></img>
//             </a>
//             <div className="content">
//                 <a href="/" className="autor">
//                     {contact.name}
//                 </a>
//             </div>
//             <div className="metadata-description">
//                 <span className="description">{contact.description}</span>
//             </div>
//             <div className="metadata-phoneNumber">
//                 <span className="phoneNumber">{contact.phoneNumber}</span>
//             </div>
//         </div>
//         {renderAdmin(contact)}
//     </div>
//   );
// };
// function renderAdmin(contact) {
//     // if (contact.userId === this.props.currentUserId) {
//          return (
//              <div className="right floated content">
//                  <Link to={`/contacts/edit/${contact.id}`} className="ui button primary">
//                      Edit
//                  </Link>
//                  <Link to={`/contacts/delete/${contact.id}`} className="ui button negative">
//                      Delete
//                  </Link>
//                  <Link to={`/contacts/show/${contact.id}`} className="ui button">
//                      Details
//                  </Link>
//              </div>
//          );
//     // }
//  }

//export default ContactDetails;

