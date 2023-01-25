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
						<span>{stat.base_stat}</span>

					</li>)
				)
			}
		</ul>
	)
}