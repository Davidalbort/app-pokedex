import styles from "@/styles/components/Loading.module.scss"
export const Loading = () => {
	return (
		<div className={styles.Loading_container}>
			<div className={styles.Loading_Container_content}>

				<span className={styles.Loading_title}></span>
				<span className={styles.Loading_header}></span>
				<span className={styles.Loading_body}></span>
				<span className={styles.Loading_body}></span>
				<span className={styles.Loading_body}></span>
				<span className={styles.Loading_body}></span>
				<span className={styles.Loading_body}></span>
				<span className={styles.Loading_body}></span>
				<span className={styles.Loading_body}></span>
				<span className={styles.Loading_body}></span>
			</div>
		</div>
	)
}