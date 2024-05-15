import React, { useState } from 'react'
import Dashboard from './pages/Dashboard';
import Sidebar from '../../component/Sidebar';
import { NavigationContext } from '../../context/context';
import Registration from './pages/Registration';
import Booking from './pages/Booking';
import Login from '../Auth/Login';

function MainDashboard() {
  const [activeTab, setActiveTab] = useState('tab1')
  const renderPage = (activeTab) => {
        switch(activeTab) {
            case 'tab1':
                return <Dashboard />

            case 'tab2':
                return <Registration />

            case 'tab3':
                return <Booking />

            default:
                return <Dashboard />
        }
    }

    const handleOnClick = (activeTab) => {
        switch(activeTab){
            case 'tab1':
                setActiveTab('tab1')
            break;

            case 'tab2':
                setActiveTab('tab2')
            break;

            case 'tab3':
                setActiveTab('tab3')
            break;
        }
    }
  return (
            <div className='flex'>
                <div>
                    <NavigationContext.Provider value={{ 
                        activePage: (data) => handleOnClick(data)
                     }}>
                        <Sidebar />
                    </NavigationContext.Provider>
                </div>
                <div className='w-full border-8 items-center mt-3'>
                    <div className='w-full border-8 border-blue-800 flex justify-between'>
                        test
                    </div>
                    <div className='w-full'>
                        <NavigationContext.Provider value={{ 
                            activePage: (data) => handleOnClick(data)
                         }}>
                            {renderPage(activeTab)}
                        </NavigationContext.Provider>
                    </div>
                </div>
            </div>
        )
}

export default MainDashboard