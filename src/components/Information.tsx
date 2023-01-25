interface PropsInformation {
    height:number
    weight:number
}

export const Information = ({weight,height}:PropsInformation) => {
	return(
		<ul>
			<li key={weight}>
				<span>Weight: </span>
				<span>{`${weight/10} Kg`}</span>
			</li>
			<li key={height}>
				<span>Height: </span>
				<span>{`${height/10} m`}</span>
			</li>
		</ul>
	)
}