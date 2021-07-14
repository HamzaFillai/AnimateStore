import './App.css';
import {useState,useCallback} from 'react'
import {Button, Card, Layout,Page,FooterHelp,Link, Select,Stack,RadioButton,TextContainer, RangeSlider, Heading , SkeletonDisplayText , SkeletonBodyText} from '@shopify/polaris';
import Publish from "./Publish"
import Vector from "./Vector.png"
import chat from "./chat.png"

function App() {

  //Select Handlers
  const [selected, setSelected] = useState('bounce');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: 'bounce', value: 'bounce'},
    {label: 'flash', value: 'flash'},
    {label: 'pulse', value: 'pulse'},
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
    const [speedValue, setSpeedValue] = useState(32);

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
                      <button className="btn"><img src={Vector}/> <span>ADD TO CART</span></button>
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