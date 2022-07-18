import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col bg-gray-100 text-gray-900 
                    dark:bg-gray-900 dark:text-white shadow">
      <SidebarIcon icon={<FaFire size="28" />} />
      <SidebarIcon icon={<BsPlus size="32" />} />
      <SidebarIcon icon={<BsFillLightningFill size="20" />} />
      <SidebarIcon icon={<FaPoo size="20" />} />
    </div>
  );
}

function SidebarIcon({ icon, text="💡 tooltip" }) {
  return (
    <div className="sidebar-icon group">
      {icon}
      
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
  );
}