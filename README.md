
Card images display in a 'binder'
'page' fits to screen and displays a reasonable amount of cards
you can go to the next / previous page to see more cards
cards are associated with 
you can apply filters to the card that are displayed
you can sort the cards by name, cost.
you can add and remove cards to/from a deck
your deck can be exported in a json format that will work with tabletop simulator


PROGRESS UPDATE 
Feb 24 
- wrote Python script to download card images
- downloaded card images
- set up AWS S3 bucket to host
- successfully got hosted images loading on page  


MAR 8th - 
- rebuilt in Next.js
- imported all cards as single JSON
- hooked up react card binder component. images loading.

Mar 9 goals - 
- make a component to handle sorting and filtering. a button underneatht the binder will show/hide this component. 
- create buttons to filter cards by colour and type 
- create options for sorting the cards (dropdowns?)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# deckbuilder
