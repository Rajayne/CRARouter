# React Router

## Create App

- npx create-react-app cra-router
- cd cra-router
- npm install react-router-dom

## BrowserRouter & Routes

Must import { BrowserRouter, Route } from "react-router-dom";

- BrowserRouter stores current location in browser's address bar and navigates using history stack
- Route tells path to look for in URL and what to render

> Route prop `exact`: (optional) does path need to match exactly?

```
<Route exact path="/eat"><Eat /></Route>
```
