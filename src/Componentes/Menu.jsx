// src/components/Menu.js

import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Menu = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
        },
      }}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Propriedades" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Aluguéis" />
        </ListItem>
        {/* Adicione mais itens de menu conforme necessário */}
      </List>
    </Drawer>
  );
};

export default Menu;
