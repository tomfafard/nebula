exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {

    var result = arr.indexOf(item);
    return result;

  },

  sum : function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;

  },

  remove : function(arr, item) {

    for(var i = 0; i < arr.length; i++){
      if(arr[i]==item) {
        arr.splice(i,1);
        i--; // Prevent skipping an item
      }
    }

    return arr;
  },

  reverseString : function(str) {

    return str.split("").reverse().join("");

  },

  longestSubString : function(str) {

    var string = str.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < string.length; i++) {
        if (longest < string[i].length) {
            longest = string[i].length;
            word = string[i];
        }
    }
    return word;

  },

  letterMoveForward : function(str) {

    function nextChar(c) {
      return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    var newString = "";
    for(var i = 0; i < str.length; i++){
      if(isNaN(str[i]) == true && str[i] !== "z"){
        newString += nextChar(str[i]);
      }
      else if (str[i] == "z") {
        newString += "a";
      }
      else {
        newString += str[i];
      }
    }

    return newString;

  },

  capitalizeWords : function(str) {

     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

  }
};
