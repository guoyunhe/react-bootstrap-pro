import { useState } from 'react';
import { BiCheckLg } from 'react-bootstrap-icons-pro';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  MenuItemContent,
  MenuItemDescription,
} from 'react-bootstrap-pro';

export function MenuSelectedDemo() {
  const [status, setStatus] = useState('Published');
  const [size, setSize] = useState('Medium');
  return (
    <Box d='flex' flexWrap='wrap' gap={3}>
      <Box>
        <Menu
          trigger={
            <Button variant='solid' theme='secondary'>
              Select status: {status}
            </Button>
          }
        >
          {['Published', 'Draft'].map((item) => (
            <MenuItem
              key={item}
              component='button'
              type='button'
              className={status === item ? 'selected' : undefined}
              aria-pressed={status === item}
              onClick={() => setStatus(item)}
            >
              <MenuItemContent>
                {item}
                <MenuItemDescription>
                  {item === 'Published' ? 'Currently visible to users' : 'Not yet published'}
                </MenuItemDescription>
              </MenuItemContent>
              <BiCheckLg className='menu-item-check' aria-hidden='true' />
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box>
        <Menu
          trigger={
            <Button variant='solid' theme='secondary'>
              Select size: {size}
            </Button>
          }
        >
          {['Small', 'Medium', 'Large'].map((item) => (
            <MenuItem
              key={item}
              component='button'
              type='button'
              className={size === item ? 'selected' : undefined}
              aria-pressed={size === item}
              onClick={() => setSize(item)}
            >
              {item}
              <BiCheckLg className='menu-item-check' aria-hidden='true' />
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
}
