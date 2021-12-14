import React from "react"

export default function App() {
    const [formData , setFormData] = React.useState({
        email : '', password : '' , confirmPass : '', isChecked : false
    })
    
    
    
    function handleChange(event){
        const {value , name , id , type , checked} = event.target
        setFormData(prevData=>{
           return {
                ...prevData,
                [name] : type==="checkbox" ? !prevData.isChecked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        alert('Check the console')
        formData.password===formData.confirmPass ? console.log(formData) : console.log('Password Did not Match')
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    value={formData.email}
                    name='email'
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                />
                <input 
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                />
                <input 
                    onChange={handleChange}
                    value={formData.confirmPass}
                    name='confirmPass'
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                />
                
                <div className="form--marketing">
                    <input
                        onChange={handleChange}
                        checked={formData.isChecked}
                        id="okayToEmail"
                        type="checkbox"
                        name="isChecked"
                        
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
