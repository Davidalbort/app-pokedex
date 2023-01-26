interface PropsInformation {
    height:number
    weight:number
	className?: string
}

export const Information = ({weight,height,className}:PropsInformation) => {
	return(
		<ul className={className}>
			<li key={weight}>
				<span>Weight: </span>
				<p>{`${weight/10} Kg`}</p>
			</li>
			<li key={height}>
				<span>Height: </span>
				<p>{`${height/10} m`}</p>
			</li>
		</ul>
	)
}