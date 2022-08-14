import { Figure } from '../../interface/figure.interface';

interface itemProps{
    fig:Figure;
}


export const GridItem = ({fig}:itemProps) => {
  return (
    <>
    <div className="aug-glow grid-element">
        <div data-augmented-ui="tl-clip-x tr-clip-x r-clip-y bl-clip" className="augborder"  style={{ backgroundImage: `url(${fig.img})` }}>
            {/* <h5 className="core-head">{fig.name}</h5> */}
        </div>
    </div>
    </>
    
  )
}
