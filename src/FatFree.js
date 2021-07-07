import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  useDeviceOrientation,
  useDimensions,
} from '@react-native-community/hooks';
import {fetchIt} from '../redux/peanutfree/actions';
import {connect} from 'react-redux';

function FatFree(props) {
  const {landscape} = useDeviceOrientation();
  const {width, height} = useDimensions().window;
  useEffect(() => {
    props.fetchon();
  }, []);

  return (
    <View style={!landscape ? styles.containertop : styles.containertopLand}>
      {props.fetching == true ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : props.error === '' ? (
        <>
          {props.success.map((data, index) => (
            <View key={index}>
              <View style={{borderWidth: 1, borderRadius: 3}}>
                <Image
                  resizeMode="cover"
                  style={
                    !landscape
                      ? {width: width * 0.8, height: height * 0.2}
                      : {width: width * 0.8, height: height * 0.5}
                  }
                  source={{
                    uri: data.image,
                  }}
                />
                <Text style={{textTransform: 'uppercase'}}>{data.label}</Text>
              </View>
              <Text> </Text>
            </View>
          ))}
        </>
      ) : (
        <View>
          <Text>Error while fetching data {props.error}</Text>
        </View>
      )}
    </View>
  );
}

mapStateToProps = state => {
  return {
    fetching: state.allFatReducer.loading,
    success: state.allFatReducer.data,
    error: state.allFatReducer.error,
  };
};

mapDispatchToProps = dispatch => {
  return {
    fetchon: () => dispatch(fetchIt()),
  };
};

const styles = StyleSheet.create({
  containertop: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containertopLand: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FatFree);
