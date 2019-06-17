export default class StringUtil {
  static isString(value) {
    return typeof value === 'string' || value instanceof String;
  }

  static isStringAndNotEmpty(value) {
    if (value && StringUtil.isString(value)) return true;
    return false;
  }

  static getFullName(firstName, lastName, username, code) {
    if (firstName !== '') { return `${firstName} ${lastName}`; }
    return username;
  }

  static getLanguage(language) {
    if (language.split('-')[0] === 'vi') { return 'vi'; }
    return 'en';
  }
}
