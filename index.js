class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]+/g, '');
  }

  static titleize(string) {

  }
}
