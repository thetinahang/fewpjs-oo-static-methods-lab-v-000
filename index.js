class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const exemptWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];

    let newString = string.split(' ').map(word => {
      if (exemptWords.includes(word) && word != string[0]) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1)
      }
    })

    return newString.join(' ');
  }
}
