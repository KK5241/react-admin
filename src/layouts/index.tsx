import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from './appSidebar';
import AppMainHeader from './appMainHeader';

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppMainHeader />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
