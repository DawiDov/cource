import React from 'react'
import { useNavigate } from 'react-router'
import { Box, Divider, Pagination, Typography, Paper } from "@mui/material"
import PropTypes from 'prop-types'

const Home = ({marathonData}) => {
  return (
  <Box
    sx={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f8f6ee',
      borderRadius: '10px',
    }}>
      {marathonData.map(day => 
        <Paper
          elevation={15}
          sx={{
            margin: '20px',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#d3dec7',
            border: 'solid 1px white'
          }}>
          <Typography sx={{ 
            fontFamily: 'Monospace', 
            letterSpacing: 4 ,
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}>
            {day}
          </Typography>
        </Paper>
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
  marathonData: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
}

Home.defaultProps = {
  marathonData: [
    'день 1',
    'день 2',
    'день 3',
    'день 4',
    'день 5',
  ]
}

export default Home