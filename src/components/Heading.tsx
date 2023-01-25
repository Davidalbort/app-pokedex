export interface PropsHeading {
    typeHeading: "h1" | "h2" | "h3" | "h4"
    title: string
}

export const Heading = ({typeHeading,title}:PropsHeading) => {
	const createHeading =
        typeHeading === "h1" ? (<h1>{title}</h1>
        ): typeHeading === "h2" ? (<h2>{title}</h2>
        ): typeHeading === "h3" ? (<h3>{title}</h3>
        ): typeHeading === "h4" ? (<h4>{title}</h4>
        ): null
	return (
		<>
			{createHeading}
		</>
	)
}