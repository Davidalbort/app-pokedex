
import { Products } from "@/types/product"
import { ParametersGetProductById, ProductsFromApi } from "@/types/service"
import endPoints from "./api"

const fromApiResponseToProductId = (apiResponse:ProductsFromApi) => {
	const {id,name,types,weight,stats,sprites,height} = apiResponse
	const image = sprites.other.home.front_default
	return {id,name,types,weight,stats,image,height}
}

export const getProductsById =  ({id}:ParametersGetProductById):Promise<Products> => {
  
	return fetch(endPoints.products.getProductsId(id))
		.then(response => response.json())
		.then(fromApiResponseToProductId)

}