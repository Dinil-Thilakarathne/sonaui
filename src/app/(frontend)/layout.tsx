import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";

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
        <SideBar />
        {children}
      </ThemeProvider>
    </main>
  );
}
