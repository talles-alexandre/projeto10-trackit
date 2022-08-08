import styled from "styled-components";

export default function Topo() {
  return (
    <>
      <Header>
        TrackIt
        <img
          src="https://psicologianoesporte.com.br/wp-content/uploads/2016/03/atencao-teste.jpg"
          alt="logo"
        />
      </Header>
    </>
  );
}
const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  padding-left: 18px;
  padding-right: 18px;
  z-index: 1;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 51px;
    height: 51px;

    background: url(image.png);
    border-radius: 98.5px;
  }

  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  color: #ffffff;
`;
