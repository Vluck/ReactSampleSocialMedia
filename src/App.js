import './App.css';
import { useEffect, useRef, useState } from 'react';
import ImageContainer from './Components/ImageBox/ImageContainer';
import SortSearch from './Components/SortBox/SortSearchContainer';

function App() {
  const [pics, setPics] = useState(null);
  const initialPics = useRef(null);

  useEffect(() => {
    const mainAsync = async() => {
      const response = await fetch("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json");
      const data = await response.json();
      setPics(data.pics);
      initialPics.current = data.pics;
    }
    mainAsync();
  }, [])
	const handleLikes = (id, totalLikes) => {
		const picArr = [...pics];
    picArr.find(x=> x.id === id).likes = totalLikes;
    setPics(picArr);
  }
  const addComment = (id, comment) => {
    const picArr = [...pics];
    const updateObj = picArr.find(x=> x.id === id);
    const comments = updateObj.comments;
    updateObj.comments = [comment, ...comments];
    setPics(picArr);
  }

  const getMostLiked = () => {
    const picArr = [...pics];
    picArr.sort((a,b) => {
      return b.likes - a.likes;
    })
    setPics(picArr);
  }

  const getMostCommented = () => {
    const picArr = [...pics];
    picArr.sort((a,b) => {
      return b.comments.length - a.comments.length;
    })
    setPics(picArr);
  }
  const deleteComment = (id, index) => {
    const picArr = [...pics];
    picArr.find(x=> x.id === id).comments.splice(index, 1);
    setPics(picArr);
  }
  const searchImages = (searchText) => {
    const picArr = [...initialPics.current];
    const searchResult = searchText ? picArr.filter(x=> x.category.toLowerCase().indexOf(searchText.toLowerCase()) > -1) : initialPics.current;
    setPics(searchResult);
  }
  return (
    <div className="App">
      <div className="container">
        <div  className="sortsearch"> 
          <SortSearch sortMostLiked={getMostLiked} sortMostCommented={getMostCommented} searchImages = {searchImages}/>
        </div>
        <div className="picContainer">
          {
          pics && pics.map( pic => {
              return  <ImageContainer key={pic.id} {...pic} handleLikes={handleLikes}  addComment={addComment} deleteComment = {deleteComment}/>
            })
          }
        </div>
       
      </div>
    </div>
  );
}

export default App;
