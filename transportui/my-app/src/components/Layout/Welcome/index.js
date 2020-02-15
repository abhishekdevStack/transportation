import React from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown";
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const DropDownGrid = styled(Grid)`
  padding: 0px 10px;
`;
const ButtonFloatingDiv = styled(Paper)`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  width: 100%;
  position: absolute;
  background-color: #fff;
  bottom: 0;
  z-index: 3;
  left: 0;
`;
const StyledButton = styled(Button)`
  margin: 20px 0px 20px 20px;
`;
class WelcomeSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownData: [
        { key: "ar", value: "ADD A RIDE" },
        { key: "pr", value: "PICK A RIDE" }
      ],
      transportOptionSelected: { key: "ar", value: "ADD A RIDE" }
    };

    this.gotoSection = this.gotoSection.bind(this);
  }
  handlepreTransportsChange = data => {
    console.log(data);
    this.setState({
      [data.name]: data.selected
    });
  };
  gotoSection = () => {};
  render() {
    return (
      <div>
        <Typography variant="h6">Welcome</Typography>
        <Divider />
        <Typography variant="h6">Welcome</Typography>
        <Divider />
        <Typography variant="h6">
          As an Indian Citizen, What comes to your mind when you think about the
          Republic Day? Is it all about watching the parade by the Indian Army
          or watching some movies to evoke patriotism in you? But have you ever
          thought about how actively you are trying to contribute to making
          India a better place…
        </Typography>
        <Divider />
        <Typography variant="h6">
          Lets choose the option and start our Journey!
        </Typography>
        <Divider />
        <Grid container>
          <DropDownGrid item xs={6} xl={4} lg={4} sm={10}>
            <Dropdown
              data={this.state.dropDownData}
              name="transportOptionSelected"
              title="Select Your options"
              selectedItem={this.state.transportOptionSelected}
              action={this.handlepreTransportsChange}
            />
          </DropDownGrid>
        </Grid>
        <ButtonFloatingDiv>
          <Link
            to={{
              pathname: "/transport/action",
              state: { option: this.state.transportOptionSelected }
            }}
            style={{ textDecoration: "none" }}
          >
            <StyledButton
              variant="contained"
              color="primary"
              onClick={() => this.gotoSection()}
            >
              LET'S GO!
            </StyledButton>
          </Link>
        </ButtonFloatingDiv>
      </div>
    );
  }
}
export default WelcomeSetup;
