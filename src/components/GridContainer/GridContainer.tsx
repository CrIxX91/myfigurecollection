import { Col, Container, Row } from "react-bootstrap"
import { sh,koto,nendo,figma, vah, others, bunny, banpresto, popup, cupoche, prize, resfigu } from "../../helpers";

import { GridItem } from "../GridItem/GridItem";


export const GridContainer = () => {

  const fCollection = [...koto,...sh,...figma,...others,...vah,...cupoche,...nendo,...bunny,...banpresto,...popup,...prize,...resfigu];

  console.log(fCollection.length);

  return (
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
  )
}
