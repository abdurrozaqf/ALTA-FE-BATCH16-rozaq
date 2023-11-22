import ReactDOM from "react-dom/client";

import { Toaster } from "@/components/ui/toaster";
import App from "@/routes";

import { TokenProvider } from "@/utils/context/token";
import "@/styles/index.css";
import { ThemeProvider } from "./utils/context/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TokenProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      <Toaster />
    </ThemeProvider>
  </TokenProvider>
);
