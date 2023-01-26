import { Heading } from "@/components/Heading"
import { Images } from "@/components/Images"
import { Information } from "@/components/Information"
import { Loading } from "@/components/Loading"
import { Stats } from "@/components/Stats"
import { Types } from "@/components/Types"
import { useProvider } from "@/hooks/useProvider"
import styles from "@/styles/containers/Product.module.scss"

export const Product = () => {
	const product= useProvider()
	return(
		<section className={styles.container}>
			{(product?.loading && !product.message)?
				(
					<>
						<Loading />
					</>
				)
				:(product?.pokemon && !product.loading)?
					(
						<>
							<Heading 
								title={product.pokemon.name}
								typeHeading="h2"
							/>
							<Images 
								source={product?.pokemon?.image}
								name={product?.pokemon.name}
							/>
							<Information 
								weight={product.pokemon.weight}
								height={product.pokemon.height}
								className={styles.information}
							/>
							<Types 
								types={product.pokemon.types}
								className={styles.type}
							/>
							<Stats 
								stats={product.pokemon.stats}
								className={styles.stats}
							/>
						</>
					)
					:null
			}
		</section>
	)
}