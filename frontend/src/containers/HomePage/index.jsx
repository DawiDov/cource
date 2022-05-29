import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Divider, Pagination, Typography, Paper, Button } from "@mui/material"
import PropTypes from 'prop-types'
import axios from 'axios'
import { getArticles } from 'redux/actions/main/mainAC'


const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const headers = {
      'Authorization': 'Token c817a34119282ecddd855da50e6ba73944ca7e2d '
    }
    
    axios.get("api/articles", headers)
      .then(response => {
        dispatch(getArticles(response.data))
      })
      .catch(error => alert(error))

  })

  const articles = useSelector(state => state.main.articles)
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
          color='primary'
          count={4} 
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