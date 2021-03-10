export const getImgUrl = code => `https://definitelynotswdestinycardimages.s3.us-east-2.amazonaws.com/${code}.jpg`
// RAW AND UNFILTERED - everything is in this JSON
const cardData = require('./cardData.json')

const filteredCardData = cardData.filter(x => x.name === "Luke Skywalker")



// currently drawing from RAW UNFILTERED cardData. 
export const getCardsToDisplay = (cardsPP, page) => {
  const indexes = Array.from(Array(cardsPP), (x, i) => page? cardsPP * page + i : i)
    
  return indexes.map((x) => filteredCardData[x]? filteredCardData[x] : {code: null, name: null})
  }