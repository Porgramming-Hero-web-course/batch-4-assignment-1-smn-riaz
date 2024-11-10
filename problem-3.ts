{
    type CountWordOccurrences = (sentence:string, word:string) => number
    type NumOfWord = number

    const countWordOccurrences:CountWordOccurrences = (sentence, word) => {

        const wordsArray:string[] = sentence.toLocaleLowerCase().split(' ');

        const numOfWord:NumOfWord = wordsArray.filter((sWord) => sWord.includes(word.toLocaleLowerCase())).length

            return numOfWord;
    }

}