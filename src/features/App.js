/* @flow */
import * as React from 'react'

import Subtitle from '_components/atoms/subtitle'
import Block from '_components/molecules/block'
import Feature from '_components/organisms/feature'
import view from '_components/templates/default/styles.css'

import './bootstrap'

const App = (): React.Element<*> => (
  <div className={view.default}>
    <Feature
      className={view.hero}
      image="https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg"
    >
      <Block title="Moviedex" button="Get in">
        <p>
           Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </Block>
    </Feature>

    <div className={view.col1}>
      <Subtitle>Moviedex philosophy</Subtitle>
    </div>
    <div className={view.col2}>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
    <div className={view.col1}>
      <Subtitle>Simple text</Subtitle>
    </div>
    <div className={view.col2}>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
  </div>
)

export default App;
