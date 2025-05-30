import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import type { FormEvent } from 'react';

type Props = {
  submitForm : (activity : Activity) => void
}

export default function ActivityForm({submitForm} : Props) {

  function handleSubmit(e : FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data : {[key : string] : FormDataEntryValue} = {};
    
    formData.forEach((value , key) => {
      data[key] = value;
    })

    submitForm(data as unknown as Activity);
  }

  return (
    <Paper>
        <Typography>Create Activity</Typography>
        <Box component='form' onSubmit={handleSubmit}>
            <TextField name="title" label="Title" />
            <TextField name="description" label="Description" multiline rows={3}/>
            <TextField name="category" label="Category" />
            <TextField name="date" label="Date" type='date'/>
            <TextField name="city" label="City" />
            <TextField name="venue" label="Venue" />
            <Box gap={3}>
                <Button>Cancel</Button>
                <Button type='submit'>Submit</Button>
            </Box>
        </Box>
    </Paper>
  )
}
