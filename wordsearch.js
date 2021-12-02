const transpose = function(matrix) {
    let output = [];
    for (let col = 0; col < matrix[0].length; col++) {
        output.push(matrix.map(x => x[col]))
        // console.log(muse)
    } 
    return output;
    };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log(`horizontalJoin is:${horizontalJoin}`);

    const verticalLetters = transpose(letters.map(ls => ls.join('')));
    const verticalJoin = verticalLetters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        // console.log(`horizontalJoin is:${l}`);
        if (l.includes(word)) return true;
    }
    for (l of verticalJoin) {
        // console.log(`horizontalJoin is:${l}`);
        if (l.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch;
    
    
    
    
    
        
        
        