import { useProvider } from "@/hooks/useProvider"
import React, { useState } from "react"
import styles from "@/styles/components/Form.module.scss"
import { useRouter } from "next/router"
interface StateForm {
    id:number
    name: string
    options: string
}
export const Form = () => {
	const [inputId,setInputId] = useState<StateForm["id"]>()
	const [inputName,setInputName] = useState<StateForm["name"]>("")
	const [option,setOption] = useState<StateForm["options"]>("")
	const product= useProvider()
	const router= useRouter()
	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target
		if(option==="id"){
			setInputId(Number(value))
		}
		setInputName(value)
	}
	const handleChangeOptions = (event:React.ChangeEvent<HTMLInputElement>) => {
		const {value}=event.target
		setOption(value)
	}
	const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if(option){
			if(option==="id"){
				if(inputId){
					if(inputId<1){
						product?.updateMessage("Write number greater than 0")
					}
					product?.getPokemonById(inputId)
				}
			}else{
				const name = inputName.toLocaleLowerCase()
				product?.getPokemonByName(name)
			}
		}
		else{
			product?.updateMessage("please select the id or name button before clicking the search button, thanks")
		}
	}
	const handleReset = () => {
		router.reload()
	}
	console.log(typeof(inputId))
	return (

		<form onSubmit={handleSubmit} className={styles.container}>
			<h1>Pokedex</h1>
			<fieldset>
				<legend>Search by</legend>
				<input type="radio" name="options" id="id" value="id" onChange={handleChangeOptions}/>
				<label htmlFor="id">ID</label>
				<input type="radio" name="options" id="name" value="name" onChange={handleChangeOptions}/>
				<label htmlFor="name">NAME</label>
			</fieldset>
			{
				option==="id" ?
					(<input
						type={"number"}
						name={"id"}
						onChange={handleChange}
						value={inputId}
						required
						placeholder="Write number id of pokemon"
						title="Write only number"
					/>)
					:
					(<input
						name={"name"}
						onChange={handleChange}
						value={inputName}
						required
						pattern={"[A-Za-z]+"}
						placeholder="Write name of pokemon"
						title="Write only letters not numbers"
					/>)
			}
			{product?.message ?
				(
					<section className={styles.error}>
						<span onClick={handleReset}>X</span>
						<p>{product?.message}</p>
					</section>
				)
				:null}
			<button type="submit">Search</button>
		</form>
	)
}