* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
body {
  font-family: "Poppins", sans-serif;
  background-image: linear-gradient(90deg, #964ae8d4, #e447afd0, #ed3434cf);
  height: 100vh;
  overflow: hidden;
}
h1 {
  white-space: nowrap; /* Prevents the text from wrapping */
  overflow: hidden; /* Hides any overflowed text */
  text-overflow: ellipsis; /* Adds "..." if the text overflows */
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0%);
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  background: linear-gradient(90deg,#4fbb2e, #780aed, #ec049f, #9b0303);
  background-clip: text;
  color: transparent;
  
}
.close-icon {
  top: 2%;
  right: 8%;
  position: absolute;
  z-index: 3;
  font-size: 2rem;
  font-weight: bold;
  color: rgb(15, 13, 13);
  cursor: pointer;
}
.close-icon:hover {
    transform: rotate(30deg);  
    transition: transform 0.2s ease;
}
.close-icon:active {
  transform: scale(0.7);
  transition: transform 1s step-start;
}
#img-cont {
    width: 90%;
    overflow-y: scroll;
    display: grid;
    scrollbar-width: none; /* For Firefox */
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    height: 85vh;
    margin: 10px;
    border-radius: 10px;
    top: 10%;
    transform: translateX(3.6%);
    position: relative;
    padding: 20px;
    border: 2px solid rgba(249, 249, 249, 0.614);
    justify-content: space-around;
    align-content: space-evenly;
    z-index: 1;
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 100px  rgba(3, 0, 0, 0.653);
    /* overflow-x: hidden; */
}
#root {
  opacity: 0;
  overflow: hidden;
  min-width: 50%;
  overflow-y: auto;
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 30%;
  height: 0;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 4px 4px 100px rgba(0, 0, 0, 1);
  transition: opacity 0.5s ease, height 0.1s ease;
  z-index: 2;
  scrollbar-width: none; /* For Firefox */
}
.img {
  width: 90%;
  min-height: 300px;
  max-height: auto;
  object-fit: fill;
  border-radius: 10px;

}
@media screen and (max-width: 600px) {
  #root{
    width: 80%;
  }
  #img-cont{
    height: 80vh;
  }
  
}
#img-selected{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: auto;
    position: absolute;
    margin-top: 10px;
    
}
p{
  position: absolute;
  bottom:10px ;
}
.imgC{
    margin: auto;
    width: 150px;
    height: 150px;
    border-radius: 10px;
}
.imgC:hover{
    box-shadow: 4px 4px 100px black;
    transform: rotate(10deg) scale(1.05);
    transition: transform 0.5s ease;
}
.blurred {
    filter: blur(5px); /* Adjust the value (e.g., 5px) to control the blur intensity */
    transition: filter 0.5s ease; /* Smooth transition when applying or removing blur */
  }
 
