import React from 'react'
import { useForm } from 'react-hook-form'

export default function Prac1() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();

    const onValid = (data)=>{
        console.log('onValid >> ', data);
    }

    const errValid = (err)=>{
        console.log('errValid >> ', err);
    }

    console.log('errors >> ', errors);
    console.log('watch >> ', watch('name'));

  return (
    <div>
        <h1>react-hook-form 실습</h1>
        <form onSubmit={handleSubmit(onValid, errValid)}>
            <input 
                type="text"
                placeholder='name'
                {...register('name', {
                    required: '이름은 필수 항목입니다.',
                })}
            />
            {errors.name?.message}
            <br />
            <input 
                type="text"
                placeholder='age'
                {...register('age', {
                    pattern: {
                        message: '0 이상의 숫자만 가능합니다.',
                        value: /^[0-9]*$/
                    }
                })}
            />
            {errors.age?.message}
            <br />
            <button type='submit'>제출</button>
        </form>
    </div>
  )
}
