// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b/discuss

/**
 * input: func(string URL)
 * return: string - domain name
 * D------
 * 
 * A------------
 * func(str)
 * 
 * split the array by '//'
 * url to second element
 *
 *  startIdx = find the index of www. + 1
 *  endIdx = index of '.com'
 *  
 * if startIdx is -1,
 *      set startidx to 0
 *  get the string.slice(startIdx, endIdx)
 *  => return this value
 *  
 * 
 * A-------------
 * get all possible substrs
 * get the substr that starts with '//' OR 'www.
 *  AND ends with '.'
 * remove the www or // and . from string
 * return the substr
 * 
 * 
*/


function domainName(url) {
  let result;

  for (let idx1 = 0; idx1 < url.length; idx1 += 1) {
    for (let idx2 = idx1 + 1; idx2 <= url.length; idx2 += 1) {
      let substr = url.slice(idx1, idx2);
      if (nameBtw(substr)) {
        result = nameBtw(substr);
      }
    }
  }

  console.log(result);
  return result;
}

function nameBtw(url) {
  let endIdx;

  if (url.startsWith('//www.')) {
    url = url.slice(6);
    endIdx = url.indexOf('.');
    return url.slice(0, endIdx);
  } else if (url.startsWith('//')) {
    endIdx = url.indexOf('.');
    return url.slice(2, endIdx);
  } else if (url.startsWith('www.')) {
    url = url.slice(4);
    endIdx = url.indexOf('.');
    return url.slice(0, endIdx);
  }

  return false;
}


/* domainName("http://github.com/carbonfive/raygun") == "github" ;
domainName("http://www.zombie-bites.com") == "zombie-bites";
domainName("https://www.cnet.com") == "cnet"; */

domainName("http://google.com") //, "google")