// import React from "react";
// import './style.css'
// import { useForm } from "react-hook-form";
// import { DevTool } from '@hookform/devtools'

// let renderCount = 0;

// //formValues which represents the structure of form data
// type formValues = {
//   username : string
//   email : string
//   channel : string
// }

// const App = () => {
//   const form = useForm<formValues>();
//   // What type of data form is going to handle thats why here <formValues>

//   const {register, control, handleSubmit } = form;
  
//   renderCount++;

//   console.log('form', form)

//   const onSubmit = (data : formValues) => {
//     console.log('submit called')
//     console.log('data', data)
//   }
//   return (
//     <>
//       <div className="main">
//         <form onSubmit={handleSubmit(onSubmit)} className="form">
//           <h5>render time {renderCount}</h5>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" {...register('username')}/>

//           <label htmlFor="email">email</label>
//           <input type="text" id="email" {...register('email')}/>

//           <label htmlFor="channel">channel</label>
//           <input type="text" id="channel" {...register('channel')} />

//           <button>Submit</button>
//         </form>

//         <DevTool control={control}/>
//       </div>
//     </>
//   )
// };

// export default App;








// import React from "react";
// import './style.css'
// import { useForm } from "react-hook-form";
// import { DevTool } from '@hookform/devtools'

// let renderCount = 0;

// //formValues which represents the structure of form data
// type formValues = {
//   username : string
//   email : string
//   channel : string
// }

// const App = () => {
//   const form = useForm<formValues>({
//     defaultValues : async () => {
//       const response = await fetch(
//         'https://jsonplaceholder.typicode.com/users/1'
//       )
//       console.log('response', response)
//       const data = await response.json()
//       return {
//         username:'test',
//         email:data.email,
//         channel:''
//       }
//     }
//   });
//   // What type of data form is going to handle thats why here <formValues>

//   const {register, control, handleSubmit, formState } = form;

//   const {errors}  = formState;

//   renderCount++;

//   console.log('form', form)

//   const onSubmit = (data : formValues) => {
//     console.log('submit called')
//     console.log('data', data)
//   }
//   return (
//     <>
//       <div className="main">
//         <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>    
        
//           <h5>render time {renderCount}</h5>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" {...register('username',{
//             required: {
//               value: true, 
//               message: 'username is mandatory'
//             }
//           })}/>
//           <p className="error">{errors.username?.message}</p>  
//           {/* ?. optional chaining for safely access the nested properties in objects */}
//           <label htmlFor="email">email</label>
//           <input type="text" id="email" {...register('email', {
//             validate: {
//               notAdmin : (fieldValue) => {
//                 return (
//                   fieldValue !== "admin@gmail.com" || 'Enter valid email'
//                 )
//               },
//               notBlackListed : (fieldValue) => {
//                 return (
//                   !fieldValue.endsWith('domain.com') || 'This domain is not valid'
//                 )
//               }
//             }
//           })}/>
//           <p className="error">{errors.email?.message}</p>

//           <label htmlFor="channel">channel</label>
//           <input type="text" id="channel" {...register('channel')} />

//           <button>Submit</button>
//         </form>

//         <DevTool control={control}/>
//       </div>
//     </>
//   )
// };

// export default App;











// Nested objects and arrays and dynamic fields and number and date fields

// import React from "react";
// import './style.css'
// import { useForm, useFieldArray } from "react-hook-form";
// import { DevTool } from '@hookform/devtools'

// let renderCount = 0;

// //formValues which represents the structure of form data
// type formValues = {
//   username : string
//   email : string
//   channel : string
//   social : {
//     twitter : string
//     facebook : string
//   }
//   phoneNumbers : string []
//   phNumbers : {
//     number: string
//   }[]
//   age : number
//   dob: Date
// }

// const App = () => {
//   const form = useForm<formValues>({
//     defaultValues : {
//       username: 'test',
//       email: 'test@gmail.com',
//       channel:'channel',
//       social :{
//         twitter: 'twitter',
//         facebook: 'fb'
//       },
//       phoneNumbers: ['34534', '43355'],
//       phNumbers: [{number: ''}],
//       age: 0,
//       dob: new Date()
//     }
//   });
//   // What type of data form is going to handle thats why here <formValues>

//   const {register, control, handleSubmit, formState } = form;

//   const {errors}  = formState;

//   const {fields, append, remove} = useFieldArray({
//     name:'phNumbers',
//     control
//   })

//   renderCount++;

//   console.log('form', form)
//   console.log('errors', errors)
//   console.log('errors phon', errors.phoneNumbers?.[0]?.message)

//   const onSubmit = (data : formValues) => {
//     console.log('submit called')
//     console.log('data', data)
//   }
//   return (
//     <>
//       <div className="main">
//         <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>    
        
//           <h5>render time {renderCount}</h5>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" {...register('username',{
//             required: {
//               value: true, 
//               message: 'username is mandatory'
//             }
//           })}/>
//           <p className="error">{errors.username?.message}</p>  
//           {/* ?. optional chaining for safely access the nested properties in objects */}
//           <label htmlFor="email">email</label>
//           <input type="text" id="email" {...register('email', {
//             validate: {
//               notAdmin : (fieldValue) => {
//                 return (
//                   fieldValue !== "admin@gmail.com" || 'Enter valid email'
//                 )
//               },
//               notBlackListed : (fieldValue) => {
//                 return (
//                   !fieldValue.endsWith('domain.com') || 'This domain is not valid'
//                 )
//               }
//             }
//           })}/>
//           <p className="error">{errors.email?.message}</p>

//           <label htmlFor="channel">channel</label>
//           <input type="text" id="channel" {...register('channel')} />

//           <label htmlFor="twitter">twitter</label>
//           <input type="text" id="twitter" {...register('social.twitter',{
//             required: {
//               value: true, 
//               message: 'twitter is mandatory'
//             }
//           })}/>
//           <p className="error">{errors.social?.twitter?.message}</p>
//           <label htmlFor="facebook">facebook</label>
//           <input type="text" id="facebook" {...register('social.facebook',{
//             required: {
//               value: true, 
//               message: 'facebook is mandatory'
//             }
//           })}/>


//           <label htmlFor="primary-phone">primary-phone</label>
//           <input type="text" id="primary-phone" {...register('phoneNumbers.0', {
//             required: {
//               value: true,
//               message:'primary phone number is mandatory'
//             }
//           })}/>
//           <p className="error"> {errors.phoneNumbers?.[0]?.message} </p>

//           <label htmlFor="secondary-phone">secondary-phone</label>
//           <input type="text" id="secondary-phone" {...register('phoneNumbers.1', {
//             required: {
//               value: true,
//               message: 'secondary phone number is mandatory'
//             }
//           })}/>
//           <p className="error"> {errors.phoneNumbers?.[1]?.message} </p>


//           <div>
//             <label> List of phone numbers</label>
//             <div>
//               {
//                 fields.map((field, index) => {
//                   return (<div key={field.id}>
//                       <input type="text" {...register(`phNumbers.${index}.number` as const )} />
//                       {
//                         index > 0 && (
//                           <button type="button" onClick={() => remove(index)}>Remove</button>
//                         )
//                       }
//                   </div>
//                   )
//                 })
//               }
//               <button type="button" onClick={() => append({ number : ""})}>Add phone number</button>
//             </div>
//           </div>



//           <label htmlFor="age">age</label>
//           <input type="number" id="age" {...register('age',{
//             valueAsNumber: true,
//             required: {
//               value: true, 
//               message: 'age is mandatory'
//             }
//           })}/>
//           <p className="error">{errors.age?.message}</p>


//           <label htmlFor="dob">Date of birth</label>
//           <input type="date" id="dob" {...register('dob',{
//             valueAsDate: true,
//             required: {
//               value: true, 
//               message: 'Date of birth is mandatory'
//             }
//           })}/>
//           <p className="error">{errors.dob?.message}</p>

//           <button>Submit</button>
//         </form>

//         <DevTool control={control}/>
//       </div>
//     </>
//   )
// };

// export default App;




// Watch fields  and watchCallback and get field Values and set field values


// import React,{useEffect} from "react";
// import './style.css'
// import { useForm, useFieldArray } from "react-hook-form";
// import { DevTool } from '@hookform/devtools'

// let renderCount = 0;

// //formValues which represents the structure of form data
// type formValues = {
//   username : string
//   email : string
//   channel : string
// }

// const App = () => {
//   const form = useForm<formValues>({
//     defaultValues : {
//       username: 'test',
//       email: 'test@gmail.com',
//       channel:'channel'
//     }
//   });
//   // What type of data form is going to handle thats why here <formValues>

//   const {register, control, handleSubmit, formState, watch, getValues, setValue } = form;

//   const {errors}  = formState;

//   // const watchedUsername = watch();  // watch entire form 
//   const watchedUsername = watch('username'); // watch field
//   // const watchedUsername = watch(['username', 'channel']); // watch many field


//   renderCount++;

//   // console.log('form', form)

//   const onSubmit = (data : formValues) => {
//     console.log('submit called')
//     console.log('data', data)
//   }

//   // useEffect(() => {
//   //   const subscription = watch((value) => {
//   //     console.log(value)
//   //   });
//   //   return () => subscription.unsubscribe();
//   // }, [watch])


//   const handleGetValues = () => {
//     // console.log('values of form get values', getValues())
//     // console.log('values of form get values', getValues('username'))
//     console.log('values of form get values', getValues(['username', 'channel']))
//   }

//   const handleSetValue = () => {
//     setValue('username', '', {
//       shouldValidate:true,
//       shouldDirty:true,
//       shouldTouch:true
//     })
//   }

//   return (
//     <>
//       <div className="main">
//         <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>    
        
//           <h5>render time {renderCount}</h5>
//           <h5>watched username: {watchedUsername}</h5>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" {...register('username',{
//             required: {
//               value: true, 
//               message: 'username is mandatory'
//             }
//           })}/>
//           <p className="error">{errors.username?.message}</p>  
//           {/* ?. optional chaining for safely access the nested properties in objects */}
//           <label htmlFor="email">email</label>
//           <input type="text" id="email" {...register('email', {
//             validate: {
//               notAdmin : (fieldValue) => {
//                 return (
//                   fieldValue !== "admin@gmail.com" || 'Enter valid email'
//                 )
//               },
//               notBlackListed : (fieldValue) => {
//                 return (
//                   !fieldValue.endsWith('domain.com') || 'This domain is not valid'
//                 )
//               }
//             }
//           })}/>
//           <p className="error">{errors.email?.message}</p>

//           <label htmlFor="channel">channel</label>
//           <input type="text" id="channel" {...register('channel')} />


//           <button>Submit</button>

//           <button type="button" onClick={handleGetValues}>Get values</button>

//           <button type="button" onClick={handleSetValue}>Set values</button>
//         </form>

//         <DevTool control={control}/>
//       </div>
//     </>
//   )
// };

// export default App;




// Touched and validate, and dirty states and handle submission errors and disable form submission
//  Form Submission State(isSubmitting, isSubmitted, isSubmitSuccessful, submitCount)
// reset

// import './style.css'
// import { FieldError, useForm, FieldErrors } from "react-hook-form";
// import { DevTool } from '@hookform/devtools'
// import { watch } from 'fs';
// import { useEffect } from 'react';

// let renderCount = 0;

// //formValues which represents the structure of form data
// type formValues = {
//   username : string
//   channel : string
// }

// const App = () => {
//   const form = useForm<formValues>({
//     defaultValues : {
//       username: 'test',
//       channel:'channel'
//     }
//   });
//   // What type of data form is going to handle thats why here <formValues>

//   const {register, control, handleSubmit, formState, watch, reset } = form;

//   const {errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount}  = formState;

//   renderCount++;
  
//   console.log('isSubmitting, isSubmitted, isSubmitSuccessful, submitCount', {isSubmitting, isSubmitted, isSubmitSuccessful, submitCount})

//   // console.log('form', form)

//   const onSubmit = (data : formValues) => {
//     console.log('submit called')
//     console.log('data', data)
//   }

//   // console.log('touched fields', touchedFields);
//   // console.log("dirty fields", dirtyFields);
  
//   const onError = (errors: FieldErrors<formValues>) => {
//     console.log('form error', errors)
//   }

  
//   useEffect(() => {
//     if(isSubmitSuccessful){
//       reset()
//     }
//   },[isSubmitSuccessful, reset])

//   return (
//     <>
//       <div className="main">
//         <form onSubmit={handleSubmit(onSubmit, onError)} className="form" noValidate>    
        
//           <h5>render time {renderCount}</h5>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" {...register('username',{
//             required: {
//               value: true, 
//               message: 'username is mandatory'
//             }
//           })}/>
//           <p className="error">{errors.username?.message}</p>  
//           {/* ?. optional chaining for safely access the nested properties in objects */}

//           <label htmlFor="channel">channel</label>
//           <input type="text" id="channel" {...register('channel', {
//             // disabled:true
//             disabled: watch('username') === "",
//             required: 'channel is mandatory'
//           })} />


//           <button disabled={!isDirty || !isValid}>Submit</button>
          
//           <button type='button' onClick={() => reset()}>Reset</button>


//         </form>

//         <DevTool control={control}/>
//       </div>
//     </>
//   )
// };

// export default App;





// Async validation, validate the email is exist or not in json placeholder
// Validation modes : onsubmit is default, onBlur, onTouched, onChange is leads multiple re render affect performance,
// all : both onBlur and onChange
// Manual Trigger validation

// import React,{useEffect} from "react";
// import './style.css'
// import { useForm } from "react-hook-form";
// import { DevTool } from '@hookform/devtools'

// let renderCount = 0;

// //formValues which represents the structure of form data
// type formValues = {
//   username : string
//   email : string
//   channel : string
// }

// const App = () => {
//   const form = useForm<formValues>({
//     defaultValues : {
//       username: 'test',
//       email: 'test@gmail.com',
//       channel:'channel'
//     },
//     mode:'onTouched'
//   });
//   // What type of data form is going to handle thats why here <formValues>

//   const {register, control, handleSubmit, formState, trigger } = form;

//   const {errors}  = formState;


//   renderCount++;

//   // console.log('form', form)

//   const onSubmit = (data : formValues) => {
//     console.log('submit called')
//     console.log('data', data)
//   }



//   return (
//     <>
//       <div className="main">
//         <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>    
        
//           <h5>render time {renderCount}</h5>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" {...register('username',{
//             required: {
//               value: true, 
//               message: 'username is mandatory'
//             }
//           })}/>
//           <p className="error">{errors.username?.message}</p>  
//           {/* ?. optional chaining for safely access the nested properties in objects */}
//           <label htmlFor="email">email</label>
//           <input type="text" id="email" {...register('email', {
//             validate: {
//               notAdmin : (fieldValue) => {
//                 return (
//                   fieldValue !== "admin@gmail.com" || 'Enter valid email'
//                 )
//               },
//               notBlackListed : (fieldValue) => {
//                 return (
//                   !fieldValue.endsWith('domain.com') || 'This domain is not valid'
//                 )
//               },
//               emailAvailable : async (fieldValue) => {
//                 const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
//                 const data = await response.json()

//                 return data.length == 0 || 'Email already exist'
//               }
//             }
//           })}/>
//           <p className="error">{errors.email?.message}</p>

//           <label htmlFor="channel">channel</label>
//           <input type="text" id="channel" {...register('channel')} />


//           <button>Submit</button>
//           <button type="button" onClick={() => trigger('username')}>valid</button>
//         </form>

//         <DevTool control={control}/>
//       </div>
//     </>
//   )
// };

// export default App;





// Yup schema integration

// import React,{useEffect} from "react";
// import './style.css'
// import { useForm } from "react-hook-form";
// import { DevTool } from '@hookform/devtools'
// import * as yup from 'yup';
// import { yupResolver } from "@hookform/resolvers/yup";


// let renderCount = 0;


// const schema = yup.object().shape({
//   username: yup.string().required('user name is mandatory').min(5),
//   email : yup.string().email('Not a valid Email').required('Email is mandatory'),
//   channel : yup.string().required().min(5),
// })

// //formValues which represents the structure of form data
// type formValues = {
//   username : string
//   email : string
//   channel : string
// }

// const App = () => {
//   const form = useForm<formValues>({
//     resolver: yupResolver(schema),
//     defaultValues : {
//       username: '',
//       email: '',
//       channel:''
//     },
//   });
//   // What type of data form is going to handle thats why here <formValues>

//   const {register, control, handleSubmit, formState } = form;

//   const {errors}  = formState;


//   renderCount++;

//   // console.log('form', form)

//   const onSubmit = (data : formValues) => {
//     console.log('submit called')
//     console.log('data', data)
//   }



//   return (
//     <>
//       <div className="main">
//         <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>    
        
//           <h5>render time {renderCount}</h5>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" {...register('username')}/>
//           <p className="error">{errors?.username?.message}</p>  

//           <label htmlFor="email">email</label>
//           <input type="text" id="email" {...register('email')}/>
//           <p className="error">{errors.email?.message}</p>

//           <label htmlFor="channel">channel</label>
//           <input type="text" id="channel" {...register('channel')} />
//           <p className="error">{errors.channel?.message}</p>

//           <button>Submit</button>
//         </form>

//         <DevTool control={control}/>
//       </div>
//     </>
//   )
// };

// export default App;



import React from "react";
import MUILoginForm from "./MUILoginForm";

const App = () => {
  return (
    <>
      <MUILoginForm/>
    </>
  )
};

export default App;
