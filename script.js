const vowels = (str) => { 
    console.log(str);   
    let word = 'аеёиоуыэюяАЕЁИОУЭЮЯ'
    let res = 0    
    for (let i = 0; i < str.length; i++) {        
        for (let j = 0; j < word.length; j++) {
            if (str[i] == word[j]) {
                res++
            }            
        }                             
    }
    return res    
}