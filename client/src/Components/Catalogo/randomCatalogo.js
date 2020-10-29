impo

import catalogo from './Catalogo'

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
    const NUMBER_OF_PRODUCT = 10;

render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);
  
    return (
      <a href="http://lorempixel.com">
        <img src={ `http://lorempixel.com/400/200/cats/${randomCat}` } alt="Random cat" />
      </a>
    );
  }