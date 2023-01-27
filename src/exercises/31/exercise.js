// Create a Translator class
// - It should have a translate method to translate a string in any language to any other target language.
// - Use fetch API to do this.
// - Use the following API to translate : https://rapidapi.com/googlecloud/api/google-translate1/
// - Understand what are locales.
// - Refer this to get the list of locales : https://www.oracle.com/java/technologies/javase/jdk8-jre8-suported-locales.html

// Example :

// Translator.translate("Hello","fr") should return "Bonjour"

// Declaration of translate
// function translate(sourceString:string, targetLanguage:string)
class Translator{
  translate(sourceString,targetLanguage){
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", sourceString);
    encodedParams.append("target",targetLanguage)
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '8d3691d9c9mshd8623ec7fa66ba3p1cc31ajsnbeca13510f60',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
      body: encodedParams
    };
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2',options)           
      .then(response => response.json())
      .then(response => console.log(response['data']['translations'][0]['translatedText']))
      .catch(err => console.error(err));
  }
}
Trans=new Translator();
Trans.translate('Hello','fr');
