import { ProviderProduct } from "@/context/ProductContext"
import "@/styles/base/base.scss"
import "@/styles/base/reset.scss"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ProviderProduct>
				<Component {...pageProps} />
			</ProviderProduct>
		</>
	)
    
}
