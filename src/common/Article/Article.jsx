import React, { useState } from 'react'
import './Article.css'
import {FaRegStar, FaStar} from 'react-icons/fa'

const Article = (props) => {
    let data = props.data
    const [likes, setLikes] = useState(data.likes)
    const [isLiked, setisLiked] = useState(data.isLiked)

    const handleClick = () => {
      if (!data.isLiked) {
        setLikes(data.likes)
        data.isLiked = true
      } else {
        setLikes(data.likes - 1)
        data.isLiked = false
      }
    }

  return (
    <article>
        <img src={data.image} alt={data.title} className='article-img'/>
            <div className='article-header'>
                <p>{data.date}</p>
                <button onClick={handleClick}>
                  {likes}
                  {data.isLiked ? <FaStar/> : <FaRegStar/>}
                </button>
            </div>
        <h2>{data.title}</h2>
        <p>{data.intro}</p>
        <button>Read More</button>
    </article>
  )
}

export default Article 