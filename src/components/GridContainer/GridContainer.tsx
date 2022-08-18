import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { sh,koto,nendo,figma, vah, others, bunny, banpresto, popup, cupoche, prize, resfigu } from "../../helpers";
import useLazyLoad from "../../hooks/useLazyLoad";

// import useObserver from "../../hooks/useObserver";

import { GridItem } from "../GridItem/GridItem";

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;

// useLazyLoad


export const GridContainer = () => {

  const fCollection = [...koto,...sh,...figma,...others,...vah,...cupoche,...nendo,...bunny,...banpresto,...popup,...prize,...resfigu];

  const triggerRef = useRef(null);

  console.log(fCollection.length);
  // useObserver()

  return (
    <>
    <Container className="marginPage">
      <Row >
        {
          fCollection.map((figure,index)=>(
            <Col key={index} xl={2} lg={3} md={4} sm={6} xs={6}>
              <GridItem fig={figure}/>
            </Col>
          ))
        }
        
      </Row>
    </Container>

    {/* <div ref={triggerRef} >
            <h2>Cargando</h2>
        </div>*/}
    </> 
    
  )
}
