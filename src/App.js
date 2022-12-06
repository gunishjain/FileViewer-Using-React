import {useState} from "react";

function App() {
  return <div>
    <Folder name="Desktop">
      <File name="cat.jpg"></File>
      <File name="snoop.mp3"></File>
    </Folder>
    <Folder name="Projects">
      <File name="index.js"></File>
    </Folder>
  </div>
}

const Folder = (props)=>{

  const [isOpen,setIsOpen]=useState(true);
  const direction = isOpen ? "down" : "right";
  const {name , children}=props;

  const handleClick = ()=> setIsOpen(!isOpen);

  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{marginLeft: '17px'}}>
      { isOpen ? children: null}
    </div>
  </div>
}

const File = (props)=>{
  const {name} = props;
  const extension = name.split('.')[1];
  const fileIcons = {
    mp3: 'music',
    jpg: 'file image',
    js: 'js'
  };

  return <div>
    <i className={`${fileIcons[extension]} icon`}></i>
    {name}
    </div>
}












export default App;
