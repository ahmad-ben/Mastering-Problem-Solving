var wordBreak = function(s, wordDict) {

    const checkWordMath = (currStrIdx, dicWord) => {
        if(currStrIdx === s.length) return true;

        const strPart = s.substring(currStrIdx, currStrIdx + dicWord.length);

        if(strPart !== dicWord) return false;

        for(let newWord of wordDict)
            if(checkWordMath(currStrIdx + strPart.length, newWord)) return true;

        return false;
    };

    for(let word of wordDict)
        if(checkWordMath(0, word)) return true;

    return false;
};