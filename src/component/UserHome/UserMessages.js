// import React from 'react'
// import Button from 'react-bootstrap/Button';

// export default function UserMessege() {
//   return (
//     <div>   <Button variant="outline-secondary">לכל ההודעות</Button>{' '}
//     </div>
//   )
// }


import { useRef,useState, Component  } from "react";
import Button from 'react-bootstrap/Button';

import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleStyled extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
<>

      
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
כותרת ההודעה
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
          גוף ההודעה
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
כותרת ההודעה
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
        גוף ההודעה
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
כותרת ההודעה      
  </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
          גוף ההודעה
          </p>
          <p>
         גוף ההודעה
          </p>
        </Accordion.Content>
      </Accordion>
      
      <Button variant="outline-secondary">לצפייה בכל ההודעות שלי</Button>{' '}




      </>      
      
    )
  }
}