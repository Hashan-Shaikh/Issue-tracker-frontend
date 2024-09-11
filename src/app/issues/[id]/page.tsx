import React from 'react'
import {users, User} from '../../data/UserData';
import { notFound } from 'next/navigation';

interface Props {
    params: {id: string},
}

const IssueDetailPage = ({params}: Props) => {
    const user: User = users.find(item => item.id.toString() === params.id)!;
    
    if(!user)
        notFound();
  
    return (
    <div>IssueDetailPage of {`${user.name}`}</div>
  )
}

export default IssueDetailPage