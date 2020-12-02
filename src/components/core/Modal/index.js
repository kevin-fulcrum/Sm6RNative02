import React, {useState} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import Modal from 'react-native-modal';
import {
  windowWidth,
  windowHeight,
} from '../../../resource/functions/Dimensions';

const styles = StyleSheet.create({
  viewModal: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginHorizontal: 20,
    height: Platform.OS === 'ios' ? windowHeight * 0.3 : windowHeight * 0.4,
  },
  contentModal: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    color: '#212121',
    textAlign: 'center',
    marginVertical: 16,
  },
  message: {
    textAlign: 'center',
    fontSize: 14,
  },
});

const CustomModal = ({
  isVisible,
  onCloseModal,
  backdrop,
  title,
  message,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
    if (onCloseModal) {
      onCloseModal();
    }
  };
  return (
    <Modal
      isVisible={visible || isVisible}
      onBackdropPress={() => {
        if (!backdrop) {
          setVisible(false);
        } else {
          backdrop();
        }
      }}
      deviceHeight={windowHeight}>
      <View style={styles.viewModal}>
        <View style={styles.contentModal}>
          {title && (
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
          )}
          {(message || children) && (
            <>
              <Text style={styles.message}>{message}</Text>
              {children}
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
