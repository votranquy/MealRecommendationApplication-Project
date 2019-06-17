import theme from '../theme';
import StringUtil from './String';

export default class ImageUtil {
  static correct(url, isUser = false) {
    if (!isUser && (!StringUtil.isStringAndNotEmpty(url) || url.includes('default_image'))) { return theme.Image.DefaultImage; }
    if (isUser && (!StringUtil.isStringAndNotEmpty(url) || url.includes('default_user'))) { return theme.Image.DefaultUser; }
    return { uri: url };
  }
}
