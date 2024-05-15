import React, { useState } from 'react'
import Dashboard from './pages/Dashboard';
import Sidebar from '../../component/Sidebar';
import { NavigationContext } from '../../context/context';

function MainDashboard() {
  const [activeTab, setActiveTab] = useState('tab1')
  const renderPage = (tab) => {
    switch(tab) {
        case 'tab1':
            return <Dashboard />

        default:

        break;
    }
    
    const handleOnPage = (data) => {
        switch(data.type) {
            case 'tab1':
                setActiveTab('tab1')
            break;

            case 'tab2':
                setActiveTab('tab2')
            break;

            case 'tab3':
                setActiveTab('tab3')
            break;

            case 'tab4':
                setActiveTab('tab4')
            break;
        }
    }

    console.log(activeTab)
  return (
            <div className='flex'>
                <div>
                    {
                    <NavigationContext.Provider value={{ 
                        activePage: (data) => handle
                    }}>
                        <Sidebar />
                    </NavigationContext.Provider>
                    }
                </div>
                <div>
                    {renderPage(activeTab)}
                </div>
            </div>
        )
    }
}

export default MainDashboard