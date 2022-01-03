import * as React from 'react';
import { Appbar ,Title} from 'react-native-paper';
import {View,Text} from 'react-native'
export default Header =(props)=> {

    return (
      <Appbar.Header 
      theme={{
          colors:{
              primary:"#385775",
             
          }
      
      }}
      style={{flexDirection:"row",justifyContent:"space-around"}}
      >
       <Title style={{color:"white"}}>
            CryptoTracker Pro
       </Title>
       <Title style={{color:"white"}}>
            Hola
       </Title>
      {/* imagen */}
      </Appbar.Header>
    );
 
}