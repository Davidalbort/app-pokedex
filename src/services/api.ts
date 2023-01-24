const API = process.env.NEXT_PUBLIC_API_URL
const VERSION = process.env.NEXT_PUBLIC_API_VERSION

const endPoints = {
	products: {
		getProductsId: (id:number) => `${API}/${VERSION}/pokemon/${id}`,
		getProductsName: (name:string) => `${API}/${VERSION}/pokemon/${name}`,
	}
}

export default endPoints
