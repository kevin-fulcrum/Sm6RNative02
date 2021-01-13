import React, {useState, useRef} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
  Text,
} from 'react-native';
import {
  windowHeight,
  windowWidth,
} from '../../../resource/functions/Dimensions';
import Animated, {Easing} from 'react-native-reanimated';
const {Value, timing} = Animated;

const styles = StyleSheet.create({
  headerSafeArea: {
    zIndex: 1000,
  },
  header: {
    height: 50,
    paddingHorizontal: 10,
  },
  headerInner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  headerLogo: {
    fontSize: 22,
    fontWeight: 'bold',
    width: 152,
    height: 30,
  },
  searchImage: {
    width: 25,
    height: 25,
  },
  searchIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#cccccc',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#ffffff',
    width: windowWidth - 22,
  },
  backIconBox: {
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  backImage: {
    width: 25,
    height: 25,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#cccccc',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  content: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999,
  },
  contentSafeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentInner: {
    flex: 1,
    paddingTop: 50,
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#cccccc',
  },
  imagePlaceholderContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-50%',
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  imagePlaceholderText: {
    textAlign: 'center',
    color: '#cccccc',
    marginTop: 5,
  },
  searchItem: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginLeft: 16,
  },
});

const SearchBar = () => {
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');
  const inputBoxTranslateX = new Value(windowWidth);
  const backButtonOpacity = new Value(0);
  const contentTranslateY = new Value(windowHeight);
  const contentOpacity = new Value(0);

  const handleOnChangeText = (value) => {
    console.warn('value', value);
    setKeyword(value);
  };
  const onFocus = () => {
    console.warn('onFocus');
    setIsFocused(true);
    const inputBoxTranslateXConfig = {
      toValue: new Value(0),
      duration: 200,
      easing: Easing.inOut(Easing.ease),
    };
    const backButtonOpacityConfig = {
      toValue: new Value(1),
      duration: 200,

      easing: Easing.inOut(Easing.ease),
    };
    const contentTranslateYConfig = {
      toValue: new Value(0),
      duration: 0,

      easing: Easing.inOut(Easing.ease),
    };
    const contentOpacityConfig = {
      toValue: new Value(1),
      duration: 200,

      easing: Easing.inOut(Easing.ease),
    };
    timing(inputBoxTranslateX, inputBoxTranslateXConfig).start();
    timing(backButtonOpacity, backButtonOpacityConfig).start();
    timing(contentTranslateY, contentTranslateYConfig).start();
    timing(contentOpacity, contentOpacityConfig).start();

    inputRef.current.focus();
  };
  const onBlur = () => {
    console.warn('onBlur');
    setIsFocused(false);
    const inputBoxTranslateXConfig = {
      toValue: new Value(windowWidth),
      duration: 200,

      easing: Easing.inOut(Easing.ease),
    };
    const backButtonOpacityConfig = {
      toValue: new Value(0),
      duration: 50,

      easing: Easing.inOut(Easing.ease),
    };
    const contentTranslateYConfig = {
      toValue: new Value(windowHeight),
      duration: 0,

      easing: Easing.inOut(Easing.ease),
    };
    const contentOpacityConfig = {
      toValue: new Value(0),
      duration: 200,

      easing: Easing.inOut(Easing.ease),
    };
    timing(inputBoxTranslateX, inputBoxTranslateXConfig).start();
    timing(backButtonOpacity, backButtonOpacityConfig).start();
    timing(contentTranslateY, contentTranslateYConfig).start();
    timing(contentOpacity, contentOpacityConfig).start();

    inputRef.current.blur();
  };
  return (
    <>
      <SafeAreaView style={styles.headerSafeArea}>
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <View>
              <Text style={styles.headerLogo}>EcoreShop</Text>
            </View>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="#cccccc"
              onPress={onFocus}
              style={styles.searchIcon}>
              <Image
                source={require('../../../resource/static/images/icons/034-search.png')}
                style={styles.searchImage}
              />
            </TouchableHighlight>
            <Animated.View
              style={[
                styles.inputBox,
                {transform: [{translateX: inputBoxTranslateX}]},
              ]}>
              <Animated.View style={{opacity: backButtonOpacity}}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#cccccc"
                  onPress={onBlur}
                  style={styles.backIconBox}>
                  <Image
                    source={require('../../../resource/static/images/icons/back.png')}
                    style={styles.backImage}
                  />
                </TouchableHighlight>
              </Animated.View>
              <TextInput
                ref={inputRef}
                placeholder="search a cool product"
                clearButtonMode="always"
                value={keyword}
                onChangeText={(value) => handleOnChangeText(value)}
                style={styles.input}
              />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: contentOpacity,
            transform: [{translateY: contentTranslateY}],
          },
        ]}>
        <SafeAreaView style={styles.contentSafeArea}>
          <View style={styles.contentInner}>
            <View style={styles.separator} />
            {isFocused && keyword === '' ? (
              <View style={styles.imagePlaceholderContainer}>
                <Image
                  source={require('../../../resource/static/images/icons/kraken.png')}
                  style={styles.imagePlaceholder}
                />
                <Text style={styles.imagePlaceholderText}>
                  Enter a few words{'\n'}
                  to search a product
                </Text>
              </View>
            ) : (
              <ScrollView>
                <View style={styles.searchItem}>
                  <Text>Fake result 1</Text>
                </View>
                <View style={styles.searchItem}>
                  <Text>Fake result 2</Text>
                </View>
                <View style={styles.searchItem}>
                  <Text>Fake result 3</Text>
                </View>
                <View style={styles.searchItem}>
                  <Text>Fake result 4</Text>
                </View>
                <View style={styles.searchItem}>
                  <Text>Fake result 5</Text>
                </View>
              </ScrollView>
            )}
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

export default SearchBar;
