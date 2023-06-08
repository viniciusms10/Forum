import React from 'react'
import "./Forum.css"

const Forum = () => {
  return (
    <div>
            <div className="card">
                <div className="upLine">
                    <h1>Tem alguém na fila do resun?</h1>
                    <p>15 minutos atrás</p>
                </div>
            
            <div className="underline"><hr></hr></div>

            <div className="downLine">
                    <p>Alguém na fila pelo amor de god. Quero comer!</p>
                    
            </div>
            
            <div className="complaint">
                        <p>Dionísio</p> 
                        <img width="25" height="25" src="https://img.icons8.com/sf-ultralight/25/error.png" alt="error"/>
            </div>

            <div className="favorite">
                    <button><img width="20" height="24" src="https://img.icons8.com/ios/50/like--v1.png" alt="like"/></button>
                    <p className="number">1</p>
            </div>
        </div>

        <div className="inputField">
            <input type="text" name="answer" className="answer" placeholder="Responder comentário"></input>
            <input type="submit" value="Responder" className="submit"></input>
        </div>

        <div className="chat">
            <div className="first"> 
                <div className="user">
                    <p>Ícaro - 5 minutos atrás</p>
                </div>
                
                <div className="coment">
                    <p>O almoço no resun hoje é cuscuz seco com rato :[</p>
                </div>

                <button className='like'><img width="20" height="24" src="https://img.icons8.com/ios/50/like--v1.png" alt="like"/></button>
                <button><img className='respond' width="20" height="24" src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/></button>
                <hr></hr>
            </div>
            
            <div className="second"> 
                <div className="user">
                    <p>LoboPidao254 - 2 minutos atrás</p>
                </div>
                
                <div className="coment">
                    <p>Meu preferido , mim de papai.</p>
                </div>

                <button className='like'><img width="20" height="24" src="https://img.icons8.com/ios/50/like--v1.png" alt="like"/></button>
                <button><img width="20" height="24" src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/></button>
                <hr></hr>
            </div>
            
            <div className="third"> 
                <div className="user">
                    <p>Dionísio - 2 minutos atrás</p>
                </div>
                
                <div className="coment">
                    <p>Sai fora Lobo</p>
                </div>

                <button className='like'><img width="20" height="24" src="https://img.icons8.com/ios/50/like--v1.png" alt="like"/></button>
                <button><img width="20" height="24" src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/></button>
            </div>

        </div>
    </div>
  )
}

export default Forum