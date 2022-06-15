import React, {useState, useEffect} from 'react'

const Carousel = (props) => {

    const {children} = props
    const [index, setIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    const styles = {transform: `translateX(${index * -100}%)`}

    useEffect(() => {
        setLength(children.length)
    }, [children])

    /**
     * @brief increments the index state by 1
     */
    const next = () => {
        if (index < (length - 1)) {
            setIndex(prevState => prevState + 1)
        }
    }
    
    /**
     * @brief decrements the index state by 1
     */
    const prev = () => {
        if (index > 0) {
            setIndex(prevState => prevState - 1)
        }
    }

    return (
        <div>
            <div className='carousel'>
                <div className='carousel-wrapper-container'>
                    <button onClick={prev} className='left-button'>&lt;</button>
                        <div className='carousal-slider'>
                            <div className='carousal-slider-wrapper' style={styles}>
                                {children}
                            </div>
                        </div> 
                    <button onClick={next} className='right-button'>&gt;</button>                  
                </div>
            </div>
        </div>
    )
}

export default Carousel