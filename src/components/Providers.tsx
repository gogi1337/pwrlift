"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

type Props = {
    children: ReactNode;
}

export default function Providers({ children }: Props) {
    return (
        <>  
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />

            <NextUIProvider>
                {children}
            </NextUIProvider>
        </>
    )
}