

/**
 *  access the dom elemnt that hold paragrapth
 * 
 *  access the dom element that hold userInput
 * 
 *  random variable to hold random data form 0 - 9
 * 
 */

const paragrapth = document.getElementById('paragrapth')
const userInput = document.getElementById("userInput")
let random = Math.ceil( Math.random() * 9)
// let random = 0


/**
 * async function to fetch data to json files (word.json)
 * 
 * @param {number} random one parameter for random data
 * 
 */

const getWord = async (random) => {

    /**
     *  open and read the file using fetch
     * 
     *  convert the responce to json
     * 
     * append it to our dom paragrapth
     */
  
    const data = await fetch('./word.json')
    const responnce = await data.json()
    responnce[random].paragraph.split('').map( (data) => {
        const createElementSpan = document.createElement('span');
        // createElementSpan.classList.add('wrong')
        
        createElementSpan.innerHTML = data
        paragrapth.appendChild(createElementSpan) 
    });


   


}

/**
 * 
 * create a event listener to listen inputs
 * 
 * make a score to holde user score
 * make a mistake to hold mistake
 * 
 */

let score = 0
let mistake = 0

/**
 * 
 * access the dom to hold data to score and mistake
 * 
 */


const showCon = document.getElementById('showCon');


userInput.addEventListener('input', ()=> {

    /**
     * 
     * get the all the span in arrayParagrapth
     * 
     * get the user inputs and make if as arrays
     * 
     */

    const arrayParagrapth = paragrapth.querySelectorAll('span');
    const arrayWordInput = userInput.value.split('')
    let check = true;


    /**
     * 
     * loop the arrayParagrapth and get its corresponce index and data ex( span, 0 )
     * 
     * get the user input that you create as array and used the index in the parameter
     * 
     */



    arrayParagrapth.forEach( (data, index) => {


        const userInputCharacter = arrayWordInput[index];

        /**
         * 
         * check if userInputCharacter[index] is null if that so remove class 
         * 
         * else if userInputCharacter(index) is equal to data.innerHTML ins the span add the correct class
         * 
         * same to else
         * 
         * 
         */
        if(userInputCharacter == null) {
            data.classList.remove('wrong')
            data.classList.remove('correct')
            check = false
        } else if(userInputCharacter == data.innerHTML) {
            data.classList.remove('wrong')
            data.classList.add('correct')
            // console.log(score)
            console.log(index)
        } else {
            data.classList.remove('correct')
            data.classList.add('wrong')
            mistake++
            check = false
        }

       

    } )



    if (check) {

        showCon.style.display = "flex"
        userInput.style.display = "none";
    }


});


const special = document.getElementById('special')

special.addEventListener('click', ()=> {
    showCon.style.display = "none"
    userInput.style.display = "flex";
    location.reload();

})


getWord(random);










