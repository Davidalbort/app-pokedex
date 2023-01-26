import { Stat } from "@/types/service"

interface PropsStats {
    stats: Stat[]
    className?: string
}

export const Stats = ({stats,className}:PropsStats) => {
	return (
		<ul className={className}>
			{
				stats.map(stat => (
					<li key={stat.stat.name}>
						<span>{stat.stat.name}</span>
						<p>{stat.base_stat}</p>

					</li>)
				)
			}
		</ul>
	)
}