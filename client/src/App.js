import React, {useEffect, useState } from 'react'
import Carousel from './components/Carousel'
import useFetch from './components/FetchData'


function App() {

  const [animal, setanimal] = useState("cat")
  const [catcheck, setcatCheck] = useState(true)
  const [sharkcheck, setsharkCheck] = useState(false)
  const {data} = useFetch(animal)

  useEffect(() => {
      console.log(animal)
  }, [animal])

  /**
   * @brief get the images and display them.
   * @returns loading if data is undefined
   */
  function print(){
    if (typeof data === 'undefined')
        return <p>Loading...</p>
    else
        return (data.map((img, id) => (
          <div key ={id}>
            <img src = {img} className="images" alt='Not Loading' /> 
          </div>
        )))
    }
    
  /**
   * @brief sets the currect url to get data based on cat and shark button clicks
   */
  function togglecat()  {
    setcatCheck(!catcheck)

    if (catcheck === true && sharkcheck === true) {
      setanimal("catshark")
    }
    else if(catcheck === true && sharkcheck === false) {
      setanimal("cat")
    }
    else if(catcheck === false && sharkcheck === true){
      setanimal("shark")
    }
    else{
      setanimal("cat")
    }
  }

  /**
   * @brief sets the currect url to get data based on cat and shark button clicks
   */
  function toggleshark() {
    setsharkCheck(!sharkcheck)

    if (catcheck === true && sharkcheck === true) {
      setanimal("catshark")
    }
    else if(catcheck === true && sharkcheck === false) {
      setanimal("cat")
    }
    else if(catcheck === false && sharkcheck === true){
      setanimal("shark")
    }
    else{
      setanimal("cat")
    }
  }

  return (
    <div className='scene'>
      <div className='button-container'>
        <div className='button-wrapper'>
          <button onClick={() =>togglecat()} className={'toggle--button ' + (catcheck ? '':'toggle--close')}>
            Cats
          </button>
          <button onClick={() =>toggleshark()} className={'toggle--button ' + (sharkcheck ? '': 'toggle--close' )}>
            Sharks
          </button>
        </div>
      </div>
      <Carousel>
          {print()}
      </Carousel>
    </div>
  )
}

export default App