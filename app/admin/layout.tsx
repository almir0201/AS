import { ReactNode } from 'react';
import "@/scss/main.scss";
import "@/styles/globals.css";

type LayoutProps = {children?: ReactNode}

export default function admin ({ children } :
    LayoutProps
  )
{
    return(
        <div className="admin-bg">
            {children}
        </div>
    )
}