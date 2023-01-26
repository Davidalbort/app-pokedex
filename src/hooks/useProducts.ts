import { getProductsById } from "@/services/getProductById"
import { getProductsByName } from "@/services/getProductByName"
import { Products } from "@/types/product"
import { useState } from "react"

export interface StateUseProducts {
    loading: boolean
    message: string
    pokemon: Products
}



export const useProducts = () => {
	const[loading,setLoading] = useState<StateUseProducts["loading"]>(false)
	const[message,setMessage] = useState<StateUseProducts["message"]>("")
	const[pokemon,setPokemon] = useState<StateUseProducts["pokemon"]>()
	const getPokemonById = (id:number) => {
		setLoading(true)
		getProductsById({id})
			.then((response) => {
				setPokemon(response)
				setLoading(false)
			})
			.catch(() => {
				setMessage("Cannot find the pokemon with this ID, please check and try again.")
				setLoading(false)
			})
	}
	const getPokemonByName = (name:string) => {
		setLoading(true)
		getProductsByName({name})
			.then((response) => {
				setPokemon(response)
				setLoading(false)
			})
			.catch(() => {
				setMessage("Cannot find the pokemon with this NAME, please check and try again.")
				setLoading(false)
			})
	}
	const updateMessage = (text:string) => {
		setMessage(text)
	}
	return {loading,message,pokemon,getPokemonById,getPokemonByName,updateMessage}
}