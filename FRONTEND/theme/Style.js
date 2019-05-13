import Color from './Color';
import Font from './Font';
import Size from './Size';

class Style {
  static DefaultText = {
    fontFamily: Font.Regular,
    fontSize: Size.FontMedium,
    color: Color.DarkestGray,
  }

  static DefaultTextInput = {
    ...Style.DefaultText,
    height: Size.TextInputHeight,
    borderRadius: Size.TextInputCorner,
    borderColor: Color.Gray,
    borderWidth: 1,
    backgroundColor: Color.White,
    paddingHorizontal: Size.TextPadding,
    color: Color.DarkestGray,
  }

  static DefaultImage = {
    resizeMode: 'cover',
  }

  static DefaultButton = {
    height: Size.ButtonHeight,
    width: Size.ButtonWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Size.ButtonCorner,
  }
}

export default Style;
