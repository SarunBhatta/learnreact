import React from 'react'
import Button from './Button'

const App = () => {
  return (
   
    <div>
    
  <h1>Useful Website Opener</h1>
  <h3>Which website do you want to open?</h3>
 
   <Button name="Google" link= "https://www.google.com/"/>
   <Button name="Facebook" link="https://www.facebook.com/"/>
   <Button name="Youtube" link="https://www.youtube.com/"/><br></br>
   <Button name="IPO Result" link="https://iporesult.cdsc.com.np/" />

   <Button name="Github" link="https://github.com/"/>
   <Button name="Instagram" link="https://www.instagram.com/"/>
  
    </div>
  )
}

export default App
