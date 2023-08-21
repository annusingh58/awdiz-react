
const MyParentComponent =()=>{
    const handleClick=()=>{
        alert('Button Clicked');
    };
    return<MyChildComponent text ="Click me from parent" onClick={handleClick}/>;

};

const MyChildComponent=({text,onClick})=>{
    return <button onClick={onClick}>hi-{text}</button>;
};

export default MyParentComponent