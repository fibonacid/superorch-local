import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReadArea from "./ReadArea";
import WriteArea from "./WriteArea";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledSplashScreen = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 { font-size: 20px; font-weight: bold; }
  p { margin-top: 5px; }  
`;


class Chat extends Component {


  /**
   * RENDER CHAT
   * ==========
   * @returns {*}
   */
  renderChat() {
    return (
      <div>
        <ReadArea />
        <WriteArea/>
      </div>
    )
  }

  renderSplashScreen() {
    return (
      <StyledSplashScreen>
        <h1>No Active Chats</h1>
        <p>Choose a user on the sidebar on the left</p>
      </StyledSplashScreen>
    )
  }

  render() {
    const { activeChat } = this.props;
    return (
      <StyledContainer>
        {activeChat !== undefined ?
          this.renderChat.bind(this) :
          this.renderSplashScreen()
        }
      </StyledContainer>
    )
  }
}


const mapStateToProps = state => ({
  activeChat: state.base.activeChat
});

export default connect(mapStateToProps)(Chat);
