import React from 'react'
import Image from 'next/image'
import { Card } from 'card-binder'

export default function Card(props) {

  const { code, name } = props

  // move all this to global hook, include filtering 
  const cardData = require('./cardData.json')
  const sampleCardData = cardData.filter((x, i) => i < 21 )

  const getImgUrl = (code) => `https://definitelynotswdestinycardimages.s3.us-east-2.amazonaws.com/${code}.jpg`

  const cards = sampleCardData.map(card => {
    return (
      <Card
        key={code}
        name={name}
      >
        <h1>{name}</h1>
        <Image
          src={getImgUrl(card.code)}
          height={350}
          width={250}
        ></Image>
      </Card>
    )
  });

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
}