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
        <div className="overflow-hidden">
          <SidebarProvider>
            <SideBar />
            <div>
              <SidebarTrigger />
              {children}
            </div>
          </SidebarProvider>
        </div>
      </ThemeProvider>
    </main>
  );
}
