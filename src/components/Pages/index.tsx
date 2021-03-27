import {Container} from './styles';

import radio from "../../assets/logo-radio.svg";
import podcast from "../../assets/logo-podcast.svg";
import tv from "../../assets/logo-tv.svg";
import mktplace from "../../assets/logo-marketplace.svg";


interface PagesProps {
  pageName: string;
}


export function Pages(props: PagesProps) {
  return (
    <Container className={props.pageName}>
        <div>
            <a href="/radio" target="_blank">
              <img src={radio} alt="LGBT Rádio"/>
            </a>
            <a href="/podcast" target="_blank">
              <img src={podcast} alt="LGBT Podcast"/>
            </a>
            <a href="/tv" target="_blank">
              <img src={tv} alt="LGBT Tv"/>
            </a>
            <a href="/marketplace" target="_blank">
              <img src={mktplace} alt="LGBT MktPlace"/>
            </a>
        </div>
    </Container>
  );
  
}
