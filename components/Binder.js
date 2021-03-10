import React from 'react'
import Image from 'next/image'
import Binder, { Card, Page } from 'card-binder'

import { getImgUrl } from './helpers/helpers'

// import Card from './Card'
 
export default function MyBinder(props) {

  // move all this to global hook, include filtering 
  const cardData = require('./cardData.json')
  const sampleCardData = cardData.filter((x, i) => i < 7)

  // const getImgUrl = (code) => `https://definitelynotswdestinycardimages.s3.us-east-2.amazonaws.com/${code}.jpg`

  const cards = sampleCardData.map(card => {
    return (
      <Card
        key={card.code}
        name={card.name}
      >
        <Image
          src={getImgUrl(card.code)}
          height={350}
          width={250}
        ></Image>
      </Card>
    )
  });

  return (
    <Binder>
      <Page>
        {cards}
      </Page>
    </Binder>
  )
}
