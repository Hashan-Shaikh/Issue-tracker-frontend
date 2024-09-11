'use client'
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {Input, Button} from "@nextui-org/react";
import {Box} from '@mui/material';
import {Avatar} from "@nextui-org/react";

const urlPaths = [{
  label: 'Manager',
  path: '/manager.svg',
  },
  {
    label: 'Developer',
    path: '/developer.svg',
  },
  {
    label: 'Tester',
    path: '/tester.svg',
  }
];

const Step2 = ({ handleBack, handleNext, activeStep, steps }: any) => {
  const { register, handleSubmit } = useForm();
  const [selectedRole, setSelectedRole] = useState(null);
  const [avatar, setAvatar] = useState('');

  const handleNextForStep2 = (data: any) => {
    const role = {
      name: selectedRole,
      avatar: avatar,
    }
    handleNext('role', role);
  }

  const handleBackForStep2 = () => {
    handleBack();
  }

  const selectRole = (item: any) => {
    setSelectedRole(item.label);
    setAvatar(item.path);
  }
  
  return (
    <div className='w-2/3 h-2/3'> 
      <div className="grid grid-cols-1 md:grid-cols-3">
        {urlPaths.map((item, index) => (
          <div className='mt-5 flex flex-col items-center' key={index} onClick={() => selectRole(item)}>
            <Avatar className="h-32 w-32 md:h-40 md:w-40" isBordered={item.label === selectedRole} src={item.path} />
            <div className='pt-2'>
              <h2 className='text-2xl'>{item.label}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5 flex flex-col md:flex-row md:justify-between p-5'>
         <Button
              className="my-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              disabled={activeStep === 0}
              onClick={handleBackForStep2}
            >
              Back
            </Button>
            {selectedRole && <Button
              className="my-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              onClick={handleNextForStep2}
            >
              {activeStep === steps.length ? 'Finish' : 'Next'}
          </Button>}   
      </div>    
    </div>
  );
};

export default Step2;
