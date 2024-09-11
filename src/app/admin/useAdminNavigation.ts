import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';

// Define your tab details
const iconsDetail = [
    {
        id: 1,
        label: 'Dashboard',
        icon: DashboardIcon,
        route: '/admin/dashboard',
    },
    {
        id: 2,
        label: 'Create User',
        icon: CreateIcon,
        route: '/admin/create-user',
    },
]

// Create the custom hook
const useAdminNavigation = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [tabSelected, setTabSelected] = useState(1);

    useEffect(() => {
        const currentTab = iconsDetail.find((icon) => icon.route === pathname)?.id || 1;
        setTabSelected(currentTab);
    }, [pathname]);

    const selectTabHandler = (id: number, route: string) => {
        router.push(route);
    };

    return {
        iconsDetail,
        tabSelected,
        selectTabHandler,
    };
};

export default useAdminNavigation;
