import React from 'react';
import {StyleSheet, Image} from 'react-native';

import bgSrc from '../images/wallpaper.png';

 const Wallpaper = (props)=> {
    return (
      <Image style={styles.picture} source={bgSrc}>
        {props.children}
      </Image>
    );
}
export default Wallpaper;

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
