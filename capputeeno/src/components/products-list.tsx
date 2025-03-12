"use client"
import { useProducts } from "@/hooks/useProducts"

interface ProductListProps {}

export default function ProductList(props : ProductListProps){
    const { data } = useProducts();
    console.log(data)
    return(
        <></>
    )
}