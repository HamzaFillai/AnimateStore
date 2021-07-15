import './App.css';
import {useState,useCallback} from 'react'
import {Button, Card, Layout,Page,FooterHelp,Link, Select,Stack,RadioButton,TextContainer, RangeSlider, Heading , SkeletonDisplayText , SkeletonBodyText} from '@shopify/polaris';
import Publish from "./Publish"
import Vector from "./Vector.png"
import chat from "./chat.png"
import 'animate.css'

function App() {

  
  

  //Select Handlers
  const [selected, setSelected] = useState('bounce');

  const selecan="btnh animate__animated animate__"+selected

  const handleSelectChange = useCallback((value) =>
  setSelected(value),
   []);
   
   console.log(selected);

  const options = [
    {label: 'Bounce', value: 'bounce'},
    {label: 'Flash', value: 'flash'},
    {label: 'Pulse', value: 'pulse'},
    {label: 'RubberBand', value: 'rubberBand'},
    {label: 'ShakeX', value: 'shakeX'},
    {label: 'ShakeY', value: 'shakeY'},
    {label: 'HeadShake', value: 'headShake'},
    {label: 'Swing', value: 'swing'},
    {label: 'Tada', value: 'tada'},
    {label: 'Wobble', value: 'wobble'},
    {label: 'Jello', value: 'jello'},
    {label: 'HeartBeat', value: 'heartBeat'},
  ];

  //Select Handlers

  //RadioButton Handlers
    const [value, setValue] = useState('always');
  
    const handleChange = useCallback(
      (_checked, newValue) => setValue(newValue),
      [],
    );

    const handleHover=()=>{
      if(value==='hover'){
        
      }
    }
  //RadioButton Handlers

  //

  //SpeedSlider Handlers
    const [speedValue, setSpeedValue] = useState(5);

    const realValue=speedValue/10+'s'

    const handleSpeedSliderChange = useCallback(
      (value) => setSpeedValue(value),
      [],
    );

  //SpeedSlider Handlers

  return (
    <div className="App">
     <Page>
     <Layout>
          <Layout.Section oneThird>
            <Card title="Visual Settings" sectioned>
              <Card.Section>
                <Select
                  label="Animations"
                  options={options}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </Card.Section>
              <Card.Section >
                <Stack vertical alignment="trailling">
                  <Heading>Trigger</Heading>
                  <RadioButton
                    label="Always"
                    checked={value === 'always'}
                    id='always'
                    onChange={handleChange}
                  />
                  <RadioButton
                    label="On hover"
                    checked={value === 'hover'}
                    id='hover'
                    onChange={handleChange}
                  />
                </Stack>
              </Card.Section>
              <Card.Section title="speed of the animation">
                <RangeSlider
                  value={speedValue}
                  min={0}
                  max={50}
                  onChange={handleSpeedSliderChange}
                  output
                />
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section twoThird>
                <Card title={<Publish />} sectioned actions={[{content: <Button primary>Save</Button>}]}></Card>
                <Card sectioned title="Preview">
                  <TextContainer>
                    <SkeletonDisplayText size="extraLarge" />
                    <div className="alignbtn">
                      <button className={selecan} style={{animationDuration:realValue}} onMouseEnter={handleHover}><img src={Vector}/> <span>ADD TO CART</span></button>
                    </div>
                    <SkeletonBodyText lines={1}/>
                    <SkeletonBodyText lines={1}/>
                    <SkeletonBodyText lines={1}/>
                    <br/>
                  </TextContainer>
                </Card>
              </Layout.Section>
          <Layout.Section>
            <FooterHelp>
              Learn more about{' '}
              <Link external url="https://help.shopify.com/manual/orders/fulfill-orders">
                Cart Animator
              </Link>
            </FooterHelp>
          </Layout.Section>
      </Layout>
     </Page>
     <div className="imagechat">
      <img src={chat}/>
     </div>
    </div>
  );
}

export default App;