import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Divider, Pagination, Typography, Paper, Button } from "@mui/material"
import PropTypes from 'prop-types'
import { setArticles } from 'redux/actions/main/mainAC'


const Home = () => {
  const dispatch = useDispatch()
  const {
    articles,
    count,
  } = useSelector(state => ({
    articles: state.main.articles,
    count: state.main.count,
  }))

  const [ page, setPage ] = useState(1)
  console.log(page)
  const pageConunt = count / articles.length
  
  useEffect(() => {

    const token = localStorage.getItem('token');

    const requestHeaders = {
    'Authorization': `Token ${token}`,
  }
    axios.get(`http://127.0.0.1:8000/api/articles/?page=${page}`, {headers: requestHeaders})
      .then(response => {
        console.log(response)
        dispatch(setArticles(response.data))
      })
      .catch(error => console.log(error))
  }, [page])

    const handleChangePage = (event, value) => {
      setPage(value)
  }

  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f8f6ee',
        borderRadius: '10px',
      }}>
        {articles.map(article => 
          <Button
            variant='contained'
            index={article.pk}
            disabled={!article.is_blocked}
            sx={{
              margin: '20px',
              padding: '20px',
              borderRadius: '10px',
              border: 'solid 1px white',
            }}>
            <Typography sx={{ 
              fontFamily: 'Roboto', 
              letterSpacing: 4 ,
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}>
              {article.title}
            </Typography>
          </Button>
        )}
      <Divider sx={{margin: '10px'}}/>
      <Paper
        elevation={20}
        sx={{
          margin: '20px auto',
          textAlign: 'center',
          dislpay: 'flex',
        }}>
        <Pagination 
          shape="rounded"
          onChange={handleChangePage}
          page={page}
          color='primary'
          count={pageConunt} 
          size='large'
          sx={{margin: '10px auto', alignSelf: 'center'}}
        />
      </Paper>
    </Box>
  )
}


Home.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default Home