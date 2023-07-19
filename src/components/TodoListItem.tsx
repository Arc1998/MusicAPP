import  { useState } from 'react';
import {
  IconButton,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { TodoListItemProps } from '../lib';
import theme from '../assets/theme'
import TextField from '@mui/material/TextField';

export default function TodoListItem({
  id,
  title,
  completed,
  toggleTodo,
  deleteTodo,
  updateTodoTitle
}: TodoListItemProps) {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleToggleEditMode = () => {
    if (editMode) {
      if (id && editedTitle) { 
        updateTodoTitle(id, editedTitle);
      }
    }
    setEditMode(!editMode);
  };

  return (
    <Paper
      sx={{
        boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.05),
          0px 1px 1px 0px rgba(0,0,0,0.10),
          0px 1px 3px 0px rgba(0,0,0,0.06)`
      }}
    >
      <FormGroup
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap'
        }}
        row
      >
        {editMode ? (
          <TextField
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          fullWidth
          multiline
          InputProps={{
            sx: { border: 'none' }, // Remove the border
          }}
        />
        ) : (
          <FormControlLabel
            label={title}
            sx={{
              textDecoration: completed ? 'line-through' : '',
              color: completed ? 'gray' : '',
              p: theme.spacing(1, 2),
              textAlign: 'left',
              flexGrow: 1
            }}
            control={
              <Checkbox
                onChange={(e) => toggleTodo(id, e.target.checked, title)} 
                defaultChecked={completed}
                name={id}
                id={id}
              />

            }
          />
        )}
        <IconButton
          sx={{ height: theme.spacing(5), width: theme.spacing(5), mr: 1 }}
          onClick={handleToggleEditMode}
          aria-label={editMode ? 'save' : 'edit'}
          color={editMode ? 'success' : 'inherit'}
        >
          {editMode ? <SaveIcon /> : <EditIcon />}
        </IconButton>
        <IconButton
          sx={{ height: theme.spacing(5), width: theme.spacing(5) }}
          onClick={() => deleteTodo(id)}
          aria-label='delete'
          color='error'
        >
          <DeleteIcon />
        </IconButton>
      </FormGroup>
    </Paper>
  );
}
