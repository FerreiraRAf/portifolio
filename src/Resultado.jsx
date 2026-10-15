// Css
import './Resultado.css'

import { useState } from 'react';

// MUI
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import SchoolIcon from '@mui/icons-material/School';;
import ComputerIcon from '@mui/icons-material/Computer';

//Páginas
import Curso from './Curso.jsx'

function Resultado() {
  const [value, setValue] = useState(0);
  const conteudo = [0 === value ? 'Cursos' : '', 1 === value ? 'Trabalhos' : ''];

  console.log(value);
  
  
  return (
    <>
      <Box sx={{ width: 500, maxWidth: '100%', margin: '0 auto' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: 'transparent',
            borderBottom: '1px solid #3a3a3a',
            '& .MuiBottomNavigationAction-root': {
              color: '#a0a0a0',
            },
            '& .MuiBottomNavigationAction-root.Mui-selected': {
              color: '#1dea53',
            },
          }}
        >
          <BottomNavigationAction label="Cursos" icon={<SchoolIcon />} />
          <BottomNavigationAction label="Trabalhos" icon={<ComputerIcon />} />
        </BottomNavigation>
      </Box>

      {value === 0 ? (
        <div className="resultado">
          <Curso />
        </div>
      ) : (
        <div className="resultado">
          <h1>{conteudo[value]}</h1>
        </div>
      )}
    </>
  )
}

export default Resultado
