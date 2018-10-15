import React from 'react';
import {StyleSheet, Image, View, FlatList, ActivityIndicator, Text  } from 'react-native';
import {H1, Content} from 'native-base';

import { FAKE_API_ENDPOINT } from 'react-native-dotenv';

export class MainFrame extends React.Component {

    constructor(props) {
      super(props);
      this.state ={ isLoading: true}
    }

    componentDidMount(){
      return fetch(FAKE_API_ENDPOINT + ':3005/feup')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson["social-projects"],
          });
        })
        .catch((error) =>{
          console.error(error);
        });
    }

    render() {
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }

      return(
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) =>
            <Content contentContainerStyle={styles.content}>
            <H1>{item.title}</H1>
            <Image style={styles.image} source={require('../assets/images/icon.png')}/>
            <Text style={styles.text}> {item.content} </Text>
            </Content>
          }
            keyExtractor={(item, index) => 'feup' + 'proj' + item.id}
          />
      );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 50,
        alignItems: 'center'
    },

    text: {
        paddingTop: 30,
        maxWidth: 500,
        textAlign: 'justify',
        paddingBottom: 100
    },

    title: {
        textAlign:'center',
        alignItems: 'center'
    },
    image: {
        marginTop: 30,
        alignItems:'center'
    }
})
