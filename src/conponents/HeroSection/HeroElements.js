import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';



export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
height: 700px;
position: relative;
z-index: 1;
`

export const HeroBg = styled.div`
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
filter: blur(3px);
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
`

export const HeroContent = styled.div`
 z-index: 3;
 max-width: 1200px;
 padding 8px 24px;
 display: flex;
 flex-direction: column;
 align-items: center;
 position: absolute;
 color: #fff;
`
export const HeroBtnWrapper = styled.div`
`
export const HeroH1 = styled.h1`
font-size: 2.5rem;
margin-bottom: 20px;

@media screen and (max-width: 768px){
    font-size: 2rem;
}

`
export const HeroP = styled.p`
 width: 450px;
 text-align: center;
 margin-bottom: 1.5rem;
`
export const ArrowForward = styled(MdArrowForward)`
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`

`