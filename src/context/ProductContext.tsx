import { useProducts } from "@/hooks/useProducts"
import { Products } from "@/types/product"
import { createContext } from "react"

interface StateProductContext {
    pokemon: Products | undefined
    loading: boolean
    message: string
    getPokemonById: (id:number) => void
    getPokemonByName: (name:string) => void
    updateMessage: (text:string) => void
}
interface PropsProviderProduct {
    children: React.ReactNode
}

export const ProductContext = createContext<StateProductContext | null >(null)

export const  ProviderProduct = ({children}:PropsProviderProduct) => {
	const {pokemon,loading,message,getPokemonById,getPokemonByName,updateMessage}= useProducts()
	const product = {
		pokemon:pokemon,
		loading:loading,
		message:message,
		getPokemonById: getPokemonById,
		getPokemonByName:getPokemonByName,
		updateMessage: updateMessage
	}
	return <ProductContext.Provider value={product}>{children}</ProductContext.Provider>
}