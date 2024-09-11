'use client';
import React, {forwardRef, useState} from 'react'
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import {Spinner} from "@nextui-org/react";
// Dynamically import SimpleMDE with no SSR
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });


interface IssueForm {
    title: string,
    description: string,
}


const NewIssuePage = () => {
    const { register, handleSubmit, control } = useForm<IssueForm>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const onSubmit = (data: IssueForm) => {
        setIsSubmitting(true);
        //call service for submitting the create request
        setIsSubmitting(false);
        router.push('/issues');
    };

  return (
    <div className='m-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
            type="text"
            label="Title"
            variant="flat"
            placeholder="Enter the issue title"
            className="w-6/12"
            {...register('title', { required: 'Title is required' })}
            />
            <Controller 
                name='description'
                control={control}
                defaultValue=''
                render = {({field}) => <SimpleMDE placeholder='Description' className='pt-5 w-6/12' {...field} />}
            />
            <div className='pt-5'>
                <Button disabled={isSubmitting} radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" type="submit">
                    Submit Issue
                    {isSubmitting && <Spinner size='sm' />}
                </Button>
            </div>
        </form>
    </div>
  )
}

export default NewIssuePage