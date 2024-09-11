'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import {Input, Button} from "@nextui-org/react";
import {Box} from '@mui/material';

const Step1 = ({ handleBack, handleNext, activeStep, steps }: any) => {
  const { register, handleSubmit } = useForm();

  const handleNextForStep1 = (data: any) => {
    const profile = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      password: data.password,
    }
    handleNext('profile', profile);
  }

  const handleBackForStep1 = () => {
    handleBack();
  }
  
  return (
    <form className='w-1/3 h-1/3' onSubmit={handleSubmit(handleNextForStep1)}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Input
              type="text"
              label="First Name"
              variant="flat"
              className="md:col-span-1 col-span-2"
              {...register('fname', { required: 'first name is required' })}
        />
        <Input
              type="text"
              label="Last Name"
              variant="flat"
              className="md:col-span-1 col-span-2"
              {...register('lname', { required: 'last name is required' })}
        />
        <Input
              type="email"
              label="Email"
              variant="flat"
              className="col-span-2"
              {...register('email', { required: 'email is required' })}
        />
        <Input
              type="password"
              label="Password"
              variant="flat"
              className="col-span-2"
              {...register('password', { required: 'password is required' })}
        />
      </div>
      <Box sx={{width: '100%', marginTop: 2 }}>
          <div className='flex flex-col md:flex-row md:justify-between'>
            <Button
              className="my-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              disabled={activeStep === 0}
              onClick={handleBackForStep1}
            >
              Back
            </Button>
            <Button
              className="my-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              type="submit"
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
      </Box>
    </form>
  );
};

export default Step1;
