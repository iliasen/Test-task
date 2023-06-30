import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addUserAction, removeUserAction} from "./store/userReducer";
import {fetchUsers} from "./asyncAction/users";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const users = useSelector(state => state.users.users)

  const addCash = (cash) =>{
      dispatch({type: 'ADD_CASH', payload: Number(prompt(cash))})
  }

  const getCash = (cash) =>{
      dispatch({type: 'GET_CASH', payload: Number(prompt(cash))})
  }


  const addUser=(name)=>{
      const user = {
          name,
          id: Date.now(),
      }
      dispatch(addUserAction(user))
  }

  const removeUser=(user)=>{
      dispatch(removeUserAction(user.id))
  }
  return (
    <div className="App">
      <h4>Ваш текущий баланс: {cash}</h4>
      <div className='d-flex justify-content-center'>
        <button style={{marginRight: 15}} onClick={()=>addCash()}>Пополнить счёт</button>
        <button onClick={()=>getCash()}>Cнять деньги со счёта</button>
      </div>


      <div className='mt-5 d-flex justify-content-center'>
          <button style={{marginRight: 15}} onClick={()=>addUser(prompt())}>Добавить пользователя</button>
          <button onClick={()=> dispatch(fetchUsers())}>Получить пользователей из базы</button>
      </div>
        {users.length > 0 ? <div className='mt-5'>
            <span>Наши пользователи</span>
            {users.map(user =><div onClick={()=>removeUser(user)}>{user.name}</div>)}
        </div>: <h5 style={{marginTop: 10}}>Пользователей пока нет (</h5>}

    </div>
  );
}

export default App;
