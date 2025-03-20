"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "@/contexts/filter-context";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

interface DefaultProvidersProps {
    children: ReactNode
}

const theme = {
    desktopBreakpoint: "768px"
}

export default function DefaultProviders({ children } : DefaultProvidersProps){
    const client = new QueryClient();
    return(
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}