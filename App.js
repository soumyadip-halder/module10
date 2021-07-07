import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import Vegan from './src/Vegan';
import FatFree from './src/FatFree';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  const [option, setOption] = useState('Vegan');
  const {landscape} = useDeviceOrientation();
  return (
    <Provider store={store}>
      <SafeAreaView style={!landscape ? styles.safearea : styles.safeareaLand}>
        <View
          style={
            !landscape
              ? [styles.containertop, {flex: 0}]
              : [styles.containertopLand, {flex: 0}]
          }>
          <View>
            <Text style={styles.text}>Food Application</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 200,
            }}>
            <RNPickerSelect
              placeholder={{
                label: 'Select from the list....',
                value: 'None',
                color: 'black',
              }}
              onValueChange={value => {
                setOption(value);
                console.log(value);
              }}
              items={[
                {label: 'Vegan', value: 'Vegan'},
                {label: 'Peanut-free', value: 'Peanut-free'},
              ]}
              style={{
                placeholder: {
                  color: 'black',
                },
              }}
            />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-start'}}
          style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            {option === 'Vegan' ? (
              <Vegan />
            ) : option === 'Peanut-free' ? (
              <FatFree />
            ) : (
              <View />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}
const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  safeareaLand: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#D3D3D3',
  },
  containertop: {
    padding: 20,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containertopLand: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
