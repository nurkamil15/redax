import React, {useState} from 'react';

const FormPage = () => {
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [block , setBlock ] = useState([])


    const createPost = (e) =>{
        e.preventDefault()
        setBlock([ title, body, ...block])
    }

    return (
        <>
            <form onSubmit={createPost}>
                <input type="text" placeholder='Введите title' name='title' onInput={(e) =>setTitle(e.target.value)}/>
                <input type="text" placeholder='Введите body' name='body' onInput={(e) =>setBody(e.target.value)}/>
                <button type='submit'>Отправить</button>
            </form>

            <>
                {
                    block.map((el, index ) =>[
                        <div key={index}>
                            {el}
                        </div>

                    ])
                }
            </>

        </>
    );
};

export default FormPage;