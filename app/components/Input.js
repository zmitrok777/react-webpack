import React from 'react';

class Input extends React.Component {

    render() {
        const placeholders = ['Blogging is a conversation, not a code.', 'Blogging is like work, but without coworkers thwarting you at every turn.', 'A blog is only as interesting as the interest shown in others.', 'Blogging is just writing — writing using a particularly efficient type of publishing technology.'];
        const randomNumber = Math.abs(Math.ceil(Math.random()*10 - 6));
        let input;

        return (
            <div className='input'>
                <textarea placeholder={placeholders[randomNumber]}
                          ref={node => {input = node;}
                          }> </textarea>
                <button onClick={()=>{
                    this.props.addTodo(input.value);
                    input.value = '';
                }}>
                    Add
                </button>
            </div>
        );
    }
}
export default Input;