import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Table from './Btap/Table';
import TicTacToe from './Game/TicTacToe';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
function AppRoutes() {
  const IsMatch = (name)=>{
    const location = useLocation().pathname
    if (location === name) {
      return 'activeT'
    } else {
      return ""
    }
  }
  return <>
          <div>
            <nav className='flex h-12 w-full bg-slate-400 items-center'>
              <div className={`ml-5 rounded-xl px-5 p-2 h-10 mt-2 ${IsMatch('/')}`}>
                <NavLink to='/'>Home</NavLink>
              </div>
              <div className={`ml-5 rounded-xl px-5 p-2 h-10 mt-2 ${IsMatch('/table')}`}>
                <NavLink to='table'>Table</NavLink>
              </div>
              <div className={`ml-5 rounded-xl px-5 p-2 h-10 mt-2 ${IsMatch('/game')}`}>
                <NavLink to='game'>Game</NavLink>
              </div>
            </nav>
          </div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/table' element={<Table />}></Route>
            <Route path='/game' element={<TicTacToe />}></Route>
          </Routes>
        </>
}
export default App;
