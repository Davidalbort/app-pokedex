import { Form } from "@/components/Form"
import { Product } from "./Product"
import styles from "@/styles/containers/Layout.module.scss"
export const Layout = () => {
	return (
		<main className={styles.container}>
			<Product/>
			<Form/>
		</main>
	)
}