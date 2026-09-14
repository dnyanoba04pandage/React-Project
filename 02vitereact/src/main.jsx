import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp(){
  return(
    <div>
      <h1>
        Custom App |||
      </h1>
    </div>
  )
}
/*
const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
  },
  children: ' link to go to GOOGLE'
};
*/
const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser="chai aur code"

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <App/>
   <MyApp/>
   {anotherElement}
   {reactElement}

  </StrictMode>,
);
