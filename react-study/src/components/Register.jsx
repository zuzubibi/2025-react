import {useState} from 'react';
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });
    console.log('input', input);

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <div>
                <input 
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input 
                    name="birth"
                    type="date"
                    value={input.birth}
                    onChange={onChange}
                    placeholder={"생년월일"}
                />
            </div>
            <div>
                <select 
                    name='country'
                    onChange={onChange}
                    value={input.country}
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
                <textarea
                    name='bio'
                    placeholder='자기소개를 입력해주세요.'
                    value={input.bio}
                    onChange={onChange}/>
            </div>
        </div>
    )
};

export default Register;