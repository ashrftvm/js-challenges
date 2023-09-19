function countVowels(str) {
    const lowerStr = [...str.toLowerCase()]
    let vowelsCount = 0;
    lowerStr.forEach(element => {
        if(element === "a" || element === "e" || element === "i" || element === "o" || element === "u"){
            vowelsCount++
        }
    });
    return vowelsCount
}

module.exports = countVowels;
