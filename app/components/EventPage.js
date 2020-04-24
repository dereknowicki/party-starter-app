import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import defaultImage from '../../assets/default-image.png';

export default class EventPage extends React.Component {
  render() {
    return (
      <View style={styles.eventPage}>
        <View style={styles.eventHeader}>
          <Button
            onBackButtonPress={() => {
              //do nothing for now
            }}
            title="Back">
          </Button>
          <Image source={defaultImage} style={{width: 150, height: 150}}/>
          <Text style={{fontSize: 36}}>
            Event Title{"\n"}
            <Text style={{fontSize: 24}}>
              Date{"\n"}
              {0} Attending
            </Text>
          </Text>
        </View>
        <View style={styles.eventDetails}>
          <Button
            onHostButtonPress={() => {
              //do nothing for now
            }}
            title="Club/Host">
          </Button>
          <Button
            onLocationButtonPress={() => {
              //do nothing for now
            }}
            title="Location">
            
          </Button>
          <Button
              onCalendarButtonPress={() => {
                //do nothing for now
              }}
              title="Add to Calendar">
            </Button>
        </View>
        <View style={styles.eventDescriptionTitle}>
          <Text style={{fontSize: 20}}>
            Event Description
          </Text>
        </View>
        <View style={styles.eventDescriptionText}>
          <Text style={{fontSize: 16}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis felis justo. Donec bibendum vestibulum dui. Sed lorem ligula, accumsan at lacus vel, blandit laoreet sapien. Duis condimentum turpis eu nunc hendrerit, id ultricies nisl vehicula. Maecenas mattis tristique accumsan. Praesent mattis mauris id facilisis mollis. Etiam luctus mauris mauris, vel euismod odio ultricies vitae. Nulla vel tempus nibh, eget imperdiet ex. Aenean pharetra blandit metus. Praesent facilisis eget ipsum a tristique. Duis eleifend ipsum viverra, condimentum ipsum eget, elementum lacus. Vestibulum euismod justo arcu, at accumsan turpis rhoncus sit amet. Praesent eget purus at ligula mollis luctus eu ac nunc. Pellentesque odio metus, lacinia a aliquam non, mattis ac odio.
          </Text>
        </View>
        <View style={styles.options}>
          <Button
              onHideEventButtonPress={() => {
                //do nothing for now
              }}
              title="Hide">
            </Button>
            <Button
              onAttendEventButtonPress={() => {
                //do nothing for now
              }}
              title="Attend">
            </Button>
            <Button
              onContactHostButtonPress={() => {
                //do nothing for now
              }}
              title="Contact Event Creator">
            </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventPage: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  eventHeader: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: '5%',
  },
  eventDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  eventDescriptionTitle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: '5%',
  },
  eventDescriptionText: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: '5%',
    flexWrap: 'wrap',
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});