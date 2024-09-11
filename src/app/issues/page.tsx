import React from 'react'
import {Button} from "@nextui-org/react";
import Link from 'next/link';
import CustomTable from '../components/table/Table'
//import './Issue.module.css'


const IssuesPage = () => {
  
  return (
    <div className='flex justify-center mt-20'>
      <div className='w-2/3'>
        <div className='p-5 flex justify-end'>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                <Link href='/issues/new'>Create Issue</Link>
            </Button>
        </div>
        <div>
            <CustomTable />
        </div>
      </div>  
    </div>

  )
}

export default IssuesPage