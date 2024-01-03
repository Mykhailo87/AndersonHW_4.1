function concatStrings(initialString, separator) {
    function isValidString(value) {
        return typeof value === 'string';
    }

    let newString = initialString;

    function innerConcat(nextString) {

        if (typeof nextString === 'string') {

            if(isValidString(separator)){
                newString += separator + nextString;
            } else {
                newString += nextString;
            }

            return innerConcat;
        } else {  
            return newString;
        }
    }

    return isValidString(initialString) ? innerConcat : '';
}



