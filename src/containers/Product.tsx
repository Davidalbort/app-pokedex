import { Heading } from "@/components/Heading"
import { Images } from "@/components/Images"
import { Information } from "@/components/Information"
import { Stats } from "@/components/Stats"
import { Types } from "@/components/Types"
import { useProvider } from "@/hooks/useProvider"

export const Product = () => {
	const product= useProvider()
	return(
		<section>
			{product?.pokemon?
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
						/>
						<Types 
							types={product.pokemon.types}
						/>
						<Stats 
							stats={product.pokemon.stats}
							
						/>
					</>
				)
				: null
			}
		</section>
	)
}