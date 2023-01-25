import { ProductContext } from "@/context/ProductContext"
import { useContext } from "react"

export const useProvider = () => {
	return useContext(ProductContext)
}