'use client'
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps} from "@nextui-org/react";
import {EditIcon} from "../editicon/EditIcon";
import {DeleteIcon} from "../deleteicon/DeleteIcon";
import {EyeIcon} from "../eyeicon/EyeIcon";
import {columns, users} from "../../data/UserData";
import { issues } from '@/app/data/IssueData';
import styles from './Table.module.css'
import Link from 'next/link';
import {Issue} from '../../data/IssueData';


const statusColorMap: Record<string, ChipProps["color"]>  = {
    active: "success",
    paused: "danger",
    vacation: "warning",
  };

type User = typeof users[0];

const CustomTable = () => {

    const renderCell = React.useCallback((issue: Issue, columnKey: React.Key) => {

    const user: User = users.find(item => item.id === issue.userId)!;
        
        switch (columnKey) {
          case "name":
            return (
              <User
                avatarProps={{radius: "lg", src: user.avatar}}
                description={user.email}
                name={user.name}
              >
                {user.email}
              </User>
            );
          case "role":
            return (
              <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">{user.role}</p>
                <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
              </div>
            );
          case "issue":
            return (
                <div>
                    <p>{issue.title}</p>
                </div>
            );
          case "status":
            return (
              <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                {user.status}
              </Chip>
            );
          case "actions":
            return (
              <div className="relative flex items-center gap-2 justify-center">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <Link href={`/issues/${user.id}`}><EyeIcon /></Link>
                  </span>
                </Tooltip>
                <Tooltip content="Edit user">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                  </span>
                </Tooltip>
              </div>
            );
          default:
            return null;
        }
      }, []);
    
      return (
            <div className={`${styles.customContainer}`}>
                <Table aria-label="Example table with custom cells">
                    <TableHeader columns={columns}>
                        {(column) => (
                        <TableColumn allowsSorting key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={issues}>
                        {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>    
        );
    
}

export default CustomTable