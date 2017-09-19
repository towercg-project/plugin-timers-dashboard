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
  Input,

  Table
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

  async _toggleTimer(timerName) {
    try {
      const {towercg} = this.props;
      await towercg.invoke('timers.toggleTimer', { name: timerName });
    } catch (error) {
      console.error(error);
    }
  }

  async _resetTimer(timerName) {
    try {
      const {towercg} = this.props;
      await towercg.invoke('timers.resetTimer', { name: timerName });
    } catch (error) {
      console.error(error);
    }
  }

  async _deleteTimer(timerName) {
    try {
      const {towercg} = this.props;
      await towercg.invoke('timers.deleteTimer', { name: timerName });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {timers} = this.props;

    return (
      <Toolbox.DashboardPluginBody
        key="timers.manager"
        title="Timer Management"
        xs={12} sm={12} md={12}
      >
        <CardBlock>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Running</th>
                <th>Elapsed</th>
                <th>Value</th>
                <th>Duration</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.values(timers).map((timer, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{timer.name}</td>
                      <td>{timer.type}</td>
                      <td>{timer.running ? "yes" : "no"}</td>
                      <td>{timer.elapsed ? "yes" : "no"}</td>
                      <td>{timer.value}</td>
                      <td>{timer.duration}</td>
                      <td>
                        <Button color="primary"
                                onClick={() => this._toggleTimer(timer.name)}
                        >
                          TOG
                        </Button>
                        &nbsp;
                        <Button color="warning"
                                onClick={() => this._resetTimer(timer.name)}
                        >
                          RST
                        </Button>
                        &nbsp;
                        <Button color="danger"
                                onClick={() => this._deleteTimer(timer.name)}
                        >
                          DEL
                        </Button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        </CardBlock>
      </Toolbox.DashboardPluginBody>
    );
  }
}

const wrapped = towercgConnect(Manager, (state, ownProps) => ({
  timers: state.timers
}));
export default wrapped;
