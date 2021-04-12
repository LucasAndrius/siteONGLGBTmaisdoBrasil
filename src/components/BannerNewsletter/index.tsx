import { Container } from "./styles";
import { Modal } from "../Modal/index"
import {useState} from "react"

interface BannerProps {
  pageName: string;
}

export function BannerNewsletter(props: BannerProps) {
  const[isModalVisible, setIsModalVisible] = useState(false)
  
  function setModal(){
      setIsModalVisible(true)
  }

  return (
    <Container className={props.pageName}>
      <a href="#" onClick={setModal}>Assine a newsletter da Ong LGBT+ do Brasil</a>
      {isModalVisible ? <Modal onClose={ () => setIsModalVisible(false) }/> : null}
    </Container>
  );
}
