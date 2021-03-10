export const getImgUrl = code => `https://definitelynotswdestinycardimages.s3.us-east-2.amazonaws.com/${code}.jpg`
// RAW AND UNFILTERED - everything is in this JSON
const cardData = require('./cardData.json')



// currently drawing from RAW UNFILTERED cardData. 
export const getCardsToDisplay = (cardsPP, page) => {
  const indexes = Array.from(Array(cardsPP), (x, i) => page? cardsPP * page + i : i)
    
  console.log(indexes)
  return indexes.map((x) => cardData[x])
  }