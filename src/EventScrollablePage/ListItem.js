import React, {useState} from 'react';
import { StyleSheet, Text, Image, View,} from 'react-native';

const ListItem = ({item})  => {

  return (
      <View style = {styles.listItemView}>

        <View style = {styles.imgView}>
          <Image style = {styles.img} source = {{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}} />
          <Text style = {styles.creatorTitle}>Organizer: {item.creator}</Text>
        </View>

        <View style = {styles.eventInfoView}>
          <Text style = {styles.listItemTitle}>{item.title}</Text>
          <Text style = {styles.listItemSubtitle}>{item.location}</Text>
          <Text style = {styles.listItemSubtitle}>{item.dateTime}</Text>
          <Text style = {styles.listItemSubtitle}>{item.numAttendees}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
  },
  eventInfoView: {
    padding: 10,
    flex: 1,
  },
  imgView: {
    padding: 10,
    flex: 1.5,
  },
  listItemTitle: {
    flex: 2,
    fontSize: 30,
    fontFamily: 'notoserif',
    textAlign: 'center',
  },
  listItemSubtitle: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
  },
  img: {
    height: 100,
  },
  creatorTitle: {
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },

});

export default ListItem;
