import React, { Component } from 'react';
import feedback from "../dummyFeedback.json";
import { Container, Grid, Header, List } from "semantic-ui-react";


class Feedback extends Component {
    render() {
        return (
            listFeedback()
        );
    }
}



function listFeedback() {
  return (
    <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>Feedback for your video</Header>
              <List>
                {feedback.map(el => {
                  return (
                    <List.Item  key={el.id}>
                      <List.Content>
                        <b>{el.criteria}:</b> {el.message}
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
  );
}

export default Feedback;