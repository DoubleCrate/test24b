import React from 'react'
import './Home.css'
import Article from '../../common/Article/Article'
import articles from '../../article.json'

const Home = () => {
    return (
        <div id="home" className='wrapper-class'>
            <h1>Article Homepage</h1>
            <div className='article-section'>
                
                {
                    articles.map(item => <Article key={item.image} data={item}/>)
                }

            </div>
        </div>
    )
}

export default Home