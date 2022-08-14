import { Col, Container, Row } from "react-bootstrap"
import { sh,koto,nendo } from "../../helpers";

import { GridItem } from "../GridItem/GridItem"


export const GridContainer = () => {

  const fCollection = [...koto,...sh,...nendo];

  return (
    <Container style={{marginTop:'6em'}}>
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
