import { Header } from "../components/Header"
import { Card } from "../components/Card"
import {HorizontalList} from "../components/HorizontalList"
import { BlockContainer, Container, FlexContainer, Template, Button, TemplateContainer } from "../styles/styledComponents"

export const Home = () => {
  return (
    <div>
        <Header/>
        <Container>
          <TemplateContainer className="flex">          
         <Template>
            <img src="/image-web-3-desktop.jpg" alt="" style={{width:'800px'}} />
             <FlexContainer>
              <h1> The Bright <br /> Future of <br /> Web 3.0 ? </h1>
               <BlockContainer>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur incidunt iure ipsam? Modi earum voluptate consectetur delectus, ut odio optio mollitia ullam quo sit ratione adipisci in numquam iste exercitationem dolore asperiores. Reprehenderit, atque!</h2>
                <Button className='black'> READ MORE </Button>
               </BlockContainer>
             </FlexContainer>
         </Template>
         <Template className="black"> 
            <Card/>        
         </Template>
          </TemplateContainer>
          <TemplateContainer className="flex">
           <HorizontalList/>
          </TemplateContainer>
        </Container>
    </div>
  )
}
