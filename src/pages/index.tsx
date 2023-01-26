import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import { getProductsById } from "@/services/getProductById"
import { Layout } from "@/containers/Layout"


export default function Home() {
	getProductsById({id:6}).then(response => console.log(response))
	return (
		<>
			<Head>
				<meta name="description" content="solucion de la prueba tecnica Trascender Global" />
				<title>Trascender Global</title>
				<meta property="og:locale" content="es" />
				<meta property="og:type" content="WebPage" />
				<meta property="og:title" content="solucion de la prueba tecnica Trascender Global" />
				<meta property="og:description" content="solucion de la prueba tecnica Trascender Global" />
				<meta property="og:image" content="https://www.trascenderglobal.com/wp-admin/admin-ajax.php?action=rank_math_overlay_thumb&id=5830&type=trascender-global&hash=581a3cf8580ebf65e87a5cd8853412aa" />
				<meta property="og:site_name" content="Trascender Global" />
				<meta property="og:url" content="https://www.trascenderglobal.com/" />
				<link rel="canonical" href="https://www.trascenderglobal.com/" />
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout />
		</>
	)
}
