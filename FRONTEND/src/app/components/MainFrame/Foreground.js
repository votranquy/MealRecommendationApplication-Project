import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View, Text, Image, TouchableOpacity,
} from '../../../components';
import theme from '../../../theme';

export default (props) => {
  const {
    style, animatedValue,
    titleImage, title, message,
    editable, onEdit, ...more
  } = props;
  return (
    <View
      style={[styles.container, style]}
      {...more}
    >
      <Image style={styles.imgTitle} source={titleImage} />
      <View style={styles.ctnTitle}>
        <Text style={styles.title}>{title}</Text>
        {editable && (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onEdit}
        >
          <Icon name="pencil" size={20} color={theme.Color.White} />
        </TouchableOpacity>
        )}
      </View>
      <Text style={styles.txtMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: theme.Size.LayoutBig,
    justifyContent: 'center',
  },

  imgTitle: {
    marginTop: theme.Size.LayoutBig,
  },

  ctnTitle: {
    flexDirection: 'row',
    marginTop: theme.Size.LayoutMedium,
  },

  title: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    fontFamily: theme.Font.Bold,
  },

  txtMessage: {
    fontSize: theme.Size.FontSmall,
    color: theme.Color.White,
    fontFamily: theme.Font.SemiBold,
  },

  iconButton: {
    height: theme.Size.ButtonActionSize,
    width: theme.Size.ButtonActionSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
