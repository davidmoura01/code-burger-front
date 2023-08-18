import Category from '../../assets/Category.png'
import { Container, CategoryImg } from './styles'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'


function CategoryCarousel() {
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')


      setCategories(data)
    }

    loadCategories()
  }, [])


  return (
    <Container>
      <CategoryImg src={Category} alt="logo da categoria" />

      <Carousel itemsToShow={4} style={{ width: '90%'}}>
       {
        categories && categories.map(category => (
          <div key={category.id}>
            <img src={category.url} alt="foto de categoria" />
            <button>{category.name}</button>
          </div>
        ))
       }
      </Carousel>
    </Container>
  )
}


export default CategoryCarousel