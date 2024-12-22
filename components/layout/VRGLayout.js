import React, { useState } from 'react';
import { 
  LayoutDashboard,
  Leaf, 
  Factory,
  Map,
  ClipboardList,
  FileSpreadsheet,
  Users,
  Settings,
  Menu,
  Bell,
  Search,
  User,
  ChevronDown
} from 'lucide-react';

const VRGLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({});

  const menuItems = [
    { 
      icon: LayoutDashboard, 
      text: 'Tổng quan', 
      href: '#' 
    },
    { 
      icon: Leaf,
      text: 'Quản lý vườn cây',
      submenu: [
        { text: 'Thông tin vườn cây', href: '#' },
        { text: 'Lịch sử chăm sóc', href: '#' },
        { text: 'Năng suất vườn cây', href: '#' },
        { text: 'Tình trạng sinh trưởng', href: '#' }
      ]
    },
    { 
      icon: Map, 
      text: 'Quản lý đất đai',
      submenu: [
        { text: 'Bản đồ đất', href: '#' },
        { text: 'Phân hạng đất', href: '#' },
        { text: 'Quy hoạch sử dụng', href: '#' }
      ]
    },
    { 
      icon: Factory,
      text: 'Quản lý sản xuất',
      submenu: [
        { text: 'Kế hoạch sản xuất', href: '#' },
        { text: 'Theo dõi khai thác', href: '#' },
        { text: 'Chế biến mủ cao su', href: '#' },
        { text: 'Phân bón & BVTV', href: '#' }
      ]
    },
    { 
      icon: ClipboardList, 
      text: 'Báo cáo & Thống kê',
      submenu: [
        { text: 'Báo cáo tổng hợp', href: '#' },
        { text: 'Báo cáo chi tiết', href: '#' },
        { text: 'Phân tích số liệu', href: '#' }
      ]
    },
    { icon: Users, text: 'Quản lý người dùng', href: '/users' },
    { icon: Settings, text: 'Cài đặt hệ thống', href: '/settings' },
  ];

  const toggleSubmenu = (index) => {
    setExpandedMenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-vrg-green shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-white hover:bg-green-600"
              >
                <Menu size={24} />
              </button>
              <div className="ml-4 font-bold text-xl text-white">VRG-QLKT</div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button className="p-2 rounded-md text-white hover:bg-green-600 relative">
                <Bell size={24} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2 ml-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                  <User size={20} />
                </div>
                <span className="font-medium text-white">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-16 h-full bg-white shadow-sm transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="py-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <div
                  onClick={() => item.submenu && toggleSubmenu(index)}
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 cursor-pointer"
                >
                  <Icon size={24} className="min-w-[24px] text-vrg-green" />
                  {isSidebarOpen && (
                    <>
                      <span className="ml-4 flex-1">{item.text}</span>
                      {item.submenu && (
                        <ChevronDown 
                          size={20} 
                          className={`transform transition-transform ${
                            expandedMenus[index] ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </>
                  )}
                </div>
                {isSidebarOpen && item.submenu && expandedMenus[index] && (
                  <div className="bg-green-50 pl-12 py-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-vrg-green"
                      >
                        {subItem.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main Content */}
      <main className={`pt-16 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default VRGLayout;
