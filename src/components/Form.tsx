import { getProductsById } from "@/services/getProductById"
import { getProductsByName } from "@/services/getProductByName"
import React, { useState } from "react"

interface StateForm {
    id:number
    name: string
    options: string
}



export const Form = () => {
	const [inputId,setInputId] = useState<StateForm["id"]>()
	const [inputName,setInputName] = useState<StateForm["name"]>("")
	const [option,setOption] = useState<StateForm["options"]>("")
	const [message,setMessage] = useState<string>("")
	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const {name,value} = event.target
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
					getProductsById({id:inputId}).then(response => console.log(response))
				}
			}else{
				getProductsByName({name:inputName}).then(response => console.log(response))
			}
		}
		else{
			setMessage("please select the id or name button before clicking the search button, thanks")
		}
        
	}
	return (

		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend>Search by</legend>
				<label htmlFor="id">ID</label>
				<input type="radio" name="options" id="id" value="id" onChange={handleChangeOptions}/>
				<label htmlFor="name">NAME</label>
				<input type="radio" name="options" id="name" value="name" onChange={handleChangeOptions}/>
			</fieldset>
			{
				option==="id" ?
					(<input 
						type="number"
						name={"id"}
						onChange={handleChange}
						value={inputId}
						required
						placeholder="Write number id of pokemon"
					/>)
					:
					(<input 
						name={"name"}
						onChange={handleChange}
						value={inputName}
						required
						pattern={"[A-Za-z]+"}
						placeholder="Write name of pokemon"
					/>)
			}
			
			{message ?
				(
					<section>
						<span>X</span>
						<p>{message}</p>
					</section>
				)
				:null}
			<button type="submit">Search</button>
		</form>
	)
}