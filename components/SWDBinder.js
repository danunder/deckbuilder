import React, { useState } from 'react'
import Image from 'next/image'
import Binder, { Card, Page } from 'card-binder'
import Button from '@material-ui/core/Button'

import { getImgUrl, getCardsToDisplay } from './helpers/helpers'

// import Card from './Card'
 
export default function SWDBinder(props) {

  
  // this is a DISPLAY COMPONENT. it should receive data and pass it to the rendered components. Keep logic restricted to display logic (how many items to fit on a screen?)
  
  // call a function (useEffect?) getCardsToDisplay(n, p) where
  // n: numberOfCardsThatFitOnScreen <- 
  // p: which page we are on (state)
  const [page, setPage] = useState(0);
  const cardsPP = 9

  // move all this to global hook, include filtering 
  
  

  const cards = getCardsToDisplay(cardsPP, page).map(card => {
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
    <>
    <Binder>
      <Page>
        {cards}
      </Page>
    </Binder>
      
      <Button onClick={() => page > 0 && setPage(page - 1)}>RETREAT!</Button>      
      <Button onClick={() => setPage(page + 1)}>ADVANCE</Button>

      </>
  )
}
