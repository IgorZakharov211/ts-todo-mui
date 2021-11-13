import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Button,
  Typography,
  TextField
} from "@material-ui/core";

const useInputStyles = makeStyles(() => ({
  textField: {
    marginBottom: 24,
    marginTop: 24
  }
}));

const schema = yup.object().shape({
  note: yup.string()
  .required('Поле обязательно для заполнения')
  .max(80, 'Заметка не может содержать более 80 символов')
});


function TodoForm(){
  const classes = useInputStyles();
  const { control, 
          handleSubmit, 
          reset, 
          watch,
          formState: {errors}
  } = useForm({
    resolver: yupResolver(schema)
  });

  return(
    <form
      onSubmit={handleSubmit((formData) => {
        reset({ note: ""});
      })}
    >
      <Controller 
      name="note"
      control={control}
      defaultValue=""
      rules={{ required: true }}
      render={({ field }) =>(
        <Box>
          <TextField 
            required
            {...field}
            label="Заметка"
            fullWidth={true}
            className={classes.textField}
            error={errors.note ? true : false}
          />
          <Typography>
            {errors.note?.message}
          </Typography>
         </Box>
      )}
      />
      <Button
      variant="contained"
      color="primary"
      type="submit"
      disabled={!watch("note")}
      >
        Добавить
      </Button>
    </form>
  )
}

export default TodoForm;