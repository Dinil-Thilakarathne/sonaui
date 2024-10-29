import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <div className="container relative mx-auto overflow-hidden">
          <SidebarProvider className="sidebar-h">
            <SideBar />
            <div className="w-full">
              <SidebarTrigger />
              {children}
            </div>
          </SidebarProvider>
        </div>
      </ThemeProvider>
    </main>
  );
}
