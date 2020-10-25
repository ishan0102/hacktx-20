import React, { Component } from 'react';
import feedback from "../dummyFeedback.json";
import { Container, Grid, Header, List } from "semantic-ui-react";
import { PieChart } from 'react-minimal-pie-chart';
// import "./Feedback.css";


class Feedback extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
    render() {
        return (
            listFeedback()
        );
    }
}

function listFeedback() {
  if (localStorage.getItem('person') == null) return null;

  var personImprove, moodImprove, voiceImprove = false;
  var personData = JSON.parse(localStorage.getItem('person'));
  personData.sort((a, b) => parseFloat(a.count) - parseFloat(b.count));
  var personDataRefined = [];
  for (const data of personData) {
    personDataRefined.push(data.value);
  }
  if (personData.length > 0) {
    personImprove = personData[0].value != "FIRST";
  } else {
    personImprove = true;
  }
  var moodData = JSON.parse(localStorage.getItem('mood'));
  moodData.sort((a, b) => parseFloat(a.count) - parseFloat(b.count));
  var moodDataRefined = [];
  for (const data of moodData) {
    moodDataRefined.push(data.value);
  }
  if (moodData.length > 0) {
    moodImprove = moodData[0].value != "INDICATIVE";
  } else {
    moodImprove = true;
  }
  var voiceData = JSON.parse(localStorage.getItem('voice'));
  voiceData.sort((a, b) => parseFloat(a.count) - parseFloat(b.count));
  var voiceDataRefined = [];
  for (const data of voiceData) {
    voiceDataRefined.push(data.value);
  }
  if (voiceData.length > 0) {
    voiceImprove = voiceData[0].value != "ACTIVE";
  } else {
    voiceImprove = true;
  }
  console.log(voiceImprove);
  return (
    <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>Feedback for your video</Header>
              <List>
                <List.Item>
                  <List.Content>
                    <List.Header>Person</List.Header>
                    <List.Description>
                      Your top persons used were {JSON.stringify(personDataRefined)}
                      {personImprove ? "You should try to speak more in the first person" : "You focus on yourself and your ideas well"}
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header>Mood</List.Header>
                    <List.Description>
                      Your top moods used were {JSON.stringify(moodDataRefined)}
                      {moodImprove ? "You should try to speak with more facts" : "You speak well and focus on the facts"}
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header>Voice</List.Header>
                    <List.Description>
                      Your top voices used were {JSON.stringify(voiceDataRefined)}
                      {voiceImprove ? "You should focus on speaking in active voice" : "You speak in active voice well"}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
  );
}

export default Feedback;