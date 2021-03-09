import React from 'react'
import Image from 'next/image'
import Binder, { Card, Page } from 'card-binder'
 
export default function MyBinder(props) {

  const cardData = require('./cardData.json')
  const sampleCardData = cardData.filter((x, i) => i < 10 )

  const getImgUrl = (code) => `https://definitelynotswdestinycardimages.s3.us-east-2.amazonaws.com/${code}.jpg`

  const cards = cardData.map(card => {
    return (
      <Card
        key={card.code}
        name={card.name}
      >
        <Image
          src={getImgUrl(card.code)}
          height='420'
          width='300'
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
