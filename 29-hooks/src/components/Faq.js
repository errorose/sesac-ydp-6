// Frequently Asked Questions = 자주 묻는 질문
import React from 'react';
import useToggle from '../hooks/useToggle';

export default function Faq() {
    const [isFaqOpen, setIsFaqOpen] = useToggle();
    // return [value, toggleValue];
    console.log('isFaqOpen >>>>> ', isFaqOpen); // false, true
    console.log('setIsFaqOpen >>>>> ', setIsFaqOpen); // toggleValue {setValue(!value)}

    return (
        <div>
            <h1>custom hook (useToogle) ex</h1>
            <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
                Q. 리액트에서 커스텀 훅 만들 수 있습니까?
            </div>
            {isFaqOpen && <div>A. 네 가능합니다 ^ ^</div>}
        </div>
    );
}