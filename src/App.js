import './App.css';
import {useState,useCallback} from 'react'
import {Button, Card, Layout,Page,FooterHelp,Link, Select,Stack,RadioButton,TextContainer, RangeSlider, Heading , SkeletonDisplayText , SkeletonBodyText} from '@shopify/polaris';
import Publish from "./Publish"
import Vector from "./Vector.png"
import chat from "./chat.png"
import 'animate.css'
import React from 'react';

function App() {


  //Select Handlers
  const [selected, setSelected] = useState('Select animation');

  const handleSelectChange = useCallback((value) =>
  setSelected(value),
  []);

  var classbutton ="btn";

  console.log(document.getElementById("eltbtn"));

  const options = [
    {label: 'Select animation', value: 'selectanim'},
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
    const [value, setValue] = useState('hover');
  
    const handleChange = useCallback(
      (_checked, newValue) => setValue(newValue),
      [],
    );
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


const handleHover=()=>{
  document.getElementById("eltbtn").className="btn animate__animated animate__"+selected;
}

if(value==='always'){
  classbutton = "btn animate__animated animate__"+selected;
}

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
                  onChange={handleSpeedSliderChange}
                  output
                />
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section twoThird>
                <Card title={<Publish />} sectioned actions={[{content: <React.Fragment><Button primary>Save</Button></React.Fragment>}]}></Card>
                <Card sectioned title="Preview">
                  <TextContainer>
                    <SkeletonDisplayText size="extraLarge" />
                    <div className="alignbtn">
                      <button id="eltbtn" className={classbutton}  style={{animationDuration:realValue}} onMouseEnter={handleHover}><img src={Vector}/> <span>ADD TO CART</span></button>
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
              <Link external url="https://animate.style/">
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