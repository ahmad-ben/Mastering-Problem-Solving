// Reverse Engineering

var wordBreak = function(s, wordDict) {
    const dictionaryWords = new Set(wordDict);

    checkCurrStrExist = (currStr, nextCharIdx) => {
        if(!dictionaryWords.has(currStr)) return false;

        if(nextCharIdx === s.length) return true;

        let newStrPart = s.substring(nextCharIdx, nextCharIdx + 20);

        for(
            let charIdx = newStrPart.length; 
            newStrPart.length > 0;
            --charIdx
        ){
            if(checkCurrStrExist(newStrPart, nextCharIdx + newStrPart.length)) 
                return true;
            newStrPart = newStrPart.substring(0, newStrPart.length - 1);
        }

        return false;
    };

    let strPart = s.substring(0, 20);

    for(
        let charIdx = strPart.length; 
        charIdx >= 0; 
        --charIdx
    ){
        // Curr Part Str i am searching for | Latest idx
        if(checkCurrStrExist(strPart, strPart.length)) return true;
        strPart = strPart.substring(0, strPart.length - 1);
    }

    return false;
};