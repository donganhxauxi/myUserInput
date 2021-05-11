import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length ===0) {
            return;
        }
        if (+enteredAge <= 0) {
            return
        }
        let userData = {
            enteredUsername,
            enteredAge
        }
        console.log(userData)
        setEnteredUsername('')
        setEnteredAge('')
    }
    const addUsernameHandler = event => {
        setEnteredUsername(event.target.value)
    }
    const addAgeHandler = event => {
        setEnteredAge(event.target.value)
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username: </label>
                <input type='text' id='username' onChange={addUsernameHandler} value={enteredUsername}/>
                <label htmlFor='age'>age: </label>
                <input type='number' id='age' onChange={addAgeHandler} value={enteredAge}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser