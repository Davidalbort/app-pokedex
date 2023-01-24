
import { Products } from "@/types/product"
import {ParametersGetProductByName, ProductsFromApi } from "@/types/service"
import endPoints from "./api"

const fromApiResponseToProductId = (apiResponse:ProductsFromApi) => {
	const {id,name,types,weight,stats,sprites,height} = apiResponse
	const image = sprites.other.home.front_default
	return {id,name,types,weight,stats,image,height}
}

export const getProductsByName =  ({name}:ParametersGetProductByName):Promise<Products> => {
  
	return fetch(endPoints.products.getProductsName(name))
		.then(response => response.json())
		.then(fromApiResponseToProductId)

}