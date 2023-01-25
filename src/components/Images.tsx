import Image from "next/image"

interface PropsImages {
	source: string
	className?: string
	name: string
}

export const Images = ({source,className,name}:PropsImages) => {
	return(
		<figure className={className}>
			<Image 
				src={source}
				alt={`Image of pokemon ${name}`}
				width={200}
				height={200}
			/>
		</figure>
	)
}