import { TemplateContainer } from '../../styles/styledComponents'
import { PostBox, PostBoxDescription, PostBoxNumber, PostBoxTitle } from './HorizontalList'

export const HorizontalList = () => {
  return (
    <TemplateContainer className='flex' style={{marginTop:'3%', marginLeft:'2%'}}>
        <img src="/image-retro-pcs.jpg" alt="" style={{height:'180px'}}/>
        <PostBox>
            <PostBoxNumber>01</PostBoxNumber>
            <PostBoxTitle>Reviving Retro Pcs</PostBoxTitle>
            <PostBoxDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fuga odio corporis corrupti! Libero, officia!
            </PostBoxDescription>
        </PostBox>
        <img src="/image-top-laptops.jpg" style={{height:'180px'}} alt="" />
        <PostBox>
            <PostBoxNumber>02</PostBoxNumber>
            <PostBoxTitle>Top Laptops 2023</PostBoxTitle>
            <PostBoxDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fuga odio corporis corrupti! Libero, officia!
            </PostBoxDescription>    
        </PostBox>
        <img src="/image-gaming-growth.jpg" style={{height:'180px'}} alt="" />
        <PostBox>
        <PostBoxNumber>03</PostBoxNumber>
            <PostBoxTitle>Gaming Growthing</PostBoxTitle>
            <PostBoxDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fuga odio corporis corrupti! Libero, officia!
            </PostBoxDescription>
        </PostBox>
    </TemplateContainer>
  )
}
