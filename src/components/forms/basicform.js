import React, { useState } from 'react'

const BasicForm = () => {
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <form action=''>
                <div className='c1'>
                    <label htmlFor='email'>Gmail</label>
                    <input type='text' name='email' id='email' autoComplete='off' value={gmail}  onChange={(e)=>setGmail(e.target.value)}/>
                </div>

                <div className='c2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <button type='submit'>Login</button>
            </form>
        </>

    )
}

export default BasicForm;