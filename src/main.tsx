import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { MDXProvider } from "@mdx-js/react"

import "./index.css"
import App from "./App.tsx"
import { mdxComponents } from "@/components/mdx/MdxComponents"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MDXProvider components={mdxComponents}>
      <App />
    </MDXProvider>
  </StrictMode>
)
