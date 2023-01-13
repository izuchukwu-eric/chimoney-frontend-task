## Getting Started

First, install all dependencies:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Additional Features
some additional features i implemented are:
- Fetched live data from the chimoney api
- Built an Amazon-like landing/product list page to display products from the chimoney api.
- Built a Dummy checkout confirmation page.

## Product Approach / Decisions
This is project was built using the following stacks: Next.js, TypeScript, CSS, and Redux.
I put the safety of my users first and this stack does the same. I thought it would be more
efficient to manage the state of the app using Redux. I also decided to stick with custom CSS
styling as oppossed to using libraries, this was just to show competence in writing CSS.

To further improve the app: 
- I would work on improving the loading time by probably making the request to the chimoney api 
on the server side of the app using the ```getServerSideProps``` function which should 
improve the loading time of the app. 
- I would also write e2e and component tests using cypress.


## Deployed on Vercel
Take a look at the live application:

Live link: [Chimoney frontend task](https://nextjs.org/docs/deployment)
