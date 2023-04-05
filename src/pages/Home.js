import { Container } from "react-bootstrap";
import backgroundImage from "../assets/images/1_6344.jpg";

export default function Home(){
    return(
        <Container>
            <h1>Home</h1>
            <img className="" src={backgroundImage}></img>
        </Container>
    )
}