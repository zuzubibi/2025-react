import {useState} from 'react';
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    };

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeBio = (e) => {
        setBio(e.target.value);
    };

    return (
        <div>
            <div>
                <input 
                    value={name}
                    onChange={onChangeName}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input 
                    type="date"
                    value={birth}
                    onChange={onChangeBirth}
                    placeholder={"생년월일"}
                />
            </div>
            <div>
                <select 
                    onChange={onChangeCountry}
                    value={country}
                >
                    <option value=""></option>
                    <option value="한국">한국</option>
                    <option value="미국">미국</option>
                    <option value="일본">일본</option>
                    <option value="중국">중국</option>
                    <option value="프랑스">프랑스</option> 
                </select>
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio}/>
            </div>
        </div>
    )
};

export default Register;