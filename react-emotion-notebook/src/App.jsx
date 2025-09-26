import './App.css'
import { useReducer } from "react";
import { 
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import Button from './components/Button';
import Header from './components/Header';

const mockData =[
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용입니다",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용입니다",
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: "3번 일기 내용입니다",
  },
]

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  return (
    <>
      <Header
        title={"header"}
        leftChild={<Button text={'Left'}></Button>}
        rightChild={<Button text={'Right'}></Button>}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
