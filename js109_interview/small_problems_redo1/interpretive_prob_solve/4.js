/**
 * star(7)
 * * _ _ * _ _ *
 * _ * _ * _ * _ 
 * _ _ * * * _ _ 
 * * * * * * * *
 * 
 * btwStarsSpace1  = (n - 3) / 2 -> 2
 * btwStarsSpace2  = 1
 * btwStarsSpace3  = 0;
 * middle
 * 
 * paddingSpace1 = 0;
 * paddingSpace2 = 1;
 * paddingSpace3 = 2;
 * middle
 * 
 * A----------
 *  func(size)
 * 
 * let middIdx = Math.floor(size / 2)
 * 
 * // halfRows1
 * iterate from 0 to < middleIdx -> @count
 *   - let arrStar = [STAR, STAR, STAR]
 *   - let starStr = arrStar.join((size - 3) / 2 - count #spaces)
 *   - pad left side of starStr with @count number of space
 *  - log starStr
 * 
 * log @size number of STARS
 * 
 * // halfRows2
 * do same thing but iterate from middleIdx - 1 to >= 0
*/

const STAR = "*";
const SPACE = ' ';

function star(size) {
  let middleIdx = Math.floor(size / 2);

  for (let count = 0; count < middleIdx; count += 1) {
    let arrStar = [STAR, STAR, STAR];
    let numSpaces = ((size - 3) / 2) - count;
    let starStr = arrStar.join(SPACE.repeat(numSpaces));
    console.log(SPACE.repeat(count) + starStr);
  }
  console.log(STAR.repeat(size));

  for (let count = middleIdx - 1; count >= 0; count -= 1) {
    let arrStar = [STAR, STAR, STAR];
    let numSpaces = ((size - 3) / 2) - count;
    let starStr = arrStar.join(SPACE.repeat(numSpaces));
    console.log(SPACE.repeat(count) + starStr);
  }
}

star(7);
star(9);

