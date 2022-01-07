import React, {useState} from 'react'

function ButtonWithHooks() {

    const [greeting, setGreeting] = useState({key1: 'HELLO WITH HOOKS', key2: 'HEJ MED KOBLER'});
    const [title, setTitle] = useState('2008');

    return (
        <div>
            <h2>{title}</h2>
            <p>{greeting.key1}</p>
            <p>{greeting.key2}</p>
            <button onClick={() => setGreeting({key1: 'HELLO AGAIN WITH HOOKS', key2: 'HEJ IGEN MED KOBLER'})}>CLICK ME</button>
            <button onClick={() => setTitle('2009')}>CLICK ME TOO</button>
        </div>
    )
}

export default ButtonWithHooks
