import { Stack, TextField, Button} from '@mui/material'
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers/yup'

type formValues = {
    email: string
    password: string
}

const schema = yup.object().shape({
    email: yup.string().required('Email is mandatory').email('Email is not valid'),
    password: yup.string().required('Password is mandatory').min(5)
})

const MUILoginForm = () => {

  const form = useForm<formValues>({
    defaultValues:{
        email:'',
        password:''
    },
    resolver: yupResolver(schema)
  })

   const {register, handleSubmit, control, formState} = form;

   const {errors} = formState
  
  const onSubmit = (data:formValues) => {
    console.log('data', data)
  }

  return (
    <>
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} width={400} >
                <TextField label='Email' type='email' {...register('email')} error={!!errors.email} helperText={errors.email?.message}/>
                {/* !! double negation  the !! is used to convert a value to its boolean equivalent*/}
                <TextField label='Password' type='password' {...register('password')} error={!!errors.password} helperText={errors.password?.message}/>
                <Button type='submit' variant='contained' color='primary'>
                    Login
                </Button>
            </Stack>
        </form>
        <DevTool control={control}></DevTool>
    </>
  )
};

export default MUILoginForm;
