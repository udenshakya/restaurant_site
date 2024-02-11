import React from "react";
import styled from "styled-components";
import { BASE_URL } from "./Menu";

const Searchresult = ({ data }) => {
  return (
    <Bg>
    <Foodcardcontainer>
      <Foodcards>
        {data?.map(({name,image,text,price}) => (
          <Foodcard key={name}>
            <div className="food_image">
                <img src={BASE_URL + image} />
            </div>
            <div className="food_info">
                <div className="info">
                    <h3>{name} </h3>
                    <p>{text} </p>
                </div>
                <Button>${price.toFixed(2)} </Button>
            </div>

              </Foodcard>
        ))}
      </Foodcards>
    </Foodcardcontainer>
    </Bg>
  );
};

export default Searchresult;

const Bg=styled.section`
background-image: url("/bg1.png");
`;

const Foodcardcontainer = styled.section`
  background-size: cover;
  min-height: 100vh;
  color: white;
  max-width: 1200px;
  margin: 0 auto;

`;

const Foodcards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;

`;

const Foodcard = styled.div`
width: 340px;
height: 167px;

border-radius: 19.447px;
background: url("/rectangle.png"), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);
border: 0.2px solid white;

display: flex;
padding: 8px;

.food_info{
    display: flex;
    flex-direction: column;
    justify-content:space-between ;
    align-items: end;
}
`;

const Button = styled.button`
  border-radius: 20px;
`
