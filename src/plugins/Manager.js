import * as React from 'react';
import autobind from 'auto-bind';

import {
  Row,
  Col,

  Button,

  CardBlock,

  Form,
  FormGroup,

  Label,

  InputGroup,
  InputGroupButton,
  Input
} from 'reactstrap';

import {
  Toolbox,
  towercgConnect
} from '@towercg/dashboard';


export class Manager extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    const {timers} = this.props;

    return (
      <Toolbox.DashboardPluginBody
        key="timers.manager"
        title="Timer Management"
        xs={12} sm={12} md={6}
      >
        <CardBlock>
        </CardBlock>
      </Toolbox.DashboardPluginBody>
    );
  }
}

const wrapped = towercgConnect(GameInfo, (state, ownProps) => ({
  channelInfo: state.timers
}));
export default wrapped;
