import { Type } from "@/types/service"

interface PropsTypes {
    types: Type[]
    className?: string
}

export const Types = ({types,className}:PropsTypes) => {
	return(
		<ul className={className}>
			<h3>Type:</h3>
			<div>
				{
					types.map((type,index) => {
						return(
							index>0 ?
								<li key={type.type.name}>{`/${type.type.name}`}</li>
								:
								<li key={type.type.name}>{type.type.name}</li>
						)
					})
				}
			</div>
		</ul>
	)
}