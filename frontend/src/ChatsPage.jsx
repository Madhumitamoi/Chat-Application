import {PrettyChatWindow} from 'react-chat-engine-pretty'


const ChatsPage = (props) => {
   
   return (
    <div style ={{height: '100vh'}}>
        <PrettyChatWindow 
        projectId='4cfa8cb3-4d67-4a5a-93a7-4f4c409bba3f'
        username= {props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
        />

    </div>
   )
}

export default ChatsPage