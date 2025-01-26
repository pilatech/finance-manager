import React, { useContext, useState } from 'react';
import { genId } from '../../../utils/utils';
import { FinanceContext } from '../Store/FinanceContext';
import { useRouter } from 'next/navigation';

export default function AddAccountForm( { setFormActive }) {

    const { dispatch } = useContext(FinanceContext);
    const router = useRouter();


    const [account, setAccount] = useState({
        title: '',
        isPiggy: false
    });

    function handleInputChange(e){
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        })
    }

    function handleCheckbox(e) {
        setAccount(
            {
                ...account,
                isPiggy: e.target.checked
            }
        )
    }

    function handleSubmit(e){
        e.preventDefault();
        const title = account.title.trim()
        if (title.length < 3) {
            console.log('Title Too Short')
        } else {
            const id = genId()
            dispatch({
                type: 'add_account',
                payload: {
                    id,
                    ...account,
                    created_at: new Date(),
                }
            })
            setFormActive(false);
        }
    }

  return (
   <form className="form form--add" onSubmit={handleSubmit}>
    <div className="form__content-container">
        <div className="form__fields form__account-name">
            <label htmlFor="account-name" className="form__label">Account Name</label>
            <input type="text" id='title' name="title" className="form__input" onChange={handleInputChange}/>
        </div>
        <div className="form__fields form__piggy">
            <p className="input__label">Piggy</p>
        <label className="switch">
            <input type="checkbox" name="isPiggy" onChange={handleCheckbox}/>
            <span className="slider round"></span>
        </label>
        </div>
        </div>
        <button className="btn">Save</button>
    </form>
  )
}
