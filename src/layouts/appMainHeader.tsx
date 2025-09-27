import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserAvatar } from '@/components/UserProfile';
import { Home } from 'lucide-react';

const AppMainHeader = () => {
  return (
    <div className="flex items-center h-[48px] border-b w-full box-content px-2">
      <SidebarTrigger />
      <Breadcrumb className="flex-1">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/login" className="flex items-center space-x-1">
              <Home size={15}></Home>
              <span>主题</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* 用户头像和个人信息组件 */}
      <div className="ml-auto mr-6">
        <UserAvatar />
      </div>
    </div>
  );
};

export default AppMainHeader;
