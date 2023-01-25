import { Type } from "@/types/service"

interface PropsTypes {
    types: Type[]
    className?: string
}

export const Types = ({types,className}:PropsTypes) => {
	return(
		<ul className={className}>
			<h4>Type</h4>
			{
				types.map(type => <li key={`${type.slot}${type.type.name}`}>{type.type.name}</li>)
			}
		</ul>
	)
}