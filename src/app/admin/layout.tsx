'use client'
import React, { ReactNode } from 'react'
import CustomDrawer from '../components/drawer/CustomDrawer'
import useAdminNavigation from './useAdminNavigation';

const AdminLayout = ({ children }: { children: ReactNode }) => {

    // Use the custom hook to get routing logic
    const { iconsDetail, tabSelected, selectTabHandler } = useAdminNavigation();

    return (
        <div className="w-full h-full flex">
            <CustomDrawer iconsDetail={iconsDetail} tabSelected={tabSelected} selectTabHandler={selectTabHandler} />
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout