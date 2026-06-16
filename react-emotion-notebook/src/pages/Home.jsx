import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

const Home = () => {
    return (
        <div>
            <Header
                leftChild={<Button text={"<"}/>}
                title={"2026년 6월"}
                rightChild={<Button text={">"}/>}
            />
            <DiaryList/>
        </div>
    )
}

export default Home;