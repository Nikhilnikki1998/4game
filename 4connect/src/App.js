import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <center>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0, fontSize:30, fontFamily:'serif'}}>
            <li>&emsp;
              <Link to="/">Home</Link>
            &emsp;
              <Link to="/Game">Game</Link>
              &emsp;

            </li>
          </ul>
        </nav>
        </center>
        <Switch>
          <Route path="/Game">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

class Home extends React.Component {
  render() {
    return (  
      <div>
        
       <center> <h1 style={{ fontSize:40, fontFamily:'monospace', color:"white" }} >Rules:</h1></center>
        <ul style={{ fontSize:20, fontFamily:'monospace', color:"white" }} >
         <li>
            Each player has to select a diffirent colour from the given colors
             </li>
          <li>
            The player should start the game by clicking any box and then the other player gets his turn
             </li>
          <li>
            When a player gets 4 of his colors in a row that is top to bottom or left to right or dialognal and vice versa he wins the game
             </li>
             
        </ul>
        
        
      </div>
    )
  }
}
// export default Home;

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      
      player1: "",
      player2: "",
      g1color: "",
      g2color: ""
    }
  }
  render() {
    return (
      <div class="container" style={{ fontSize:20, fontFamily:'monospace', color:"white"}}>
        <center>
        <div class="row">
          <div class="col">
          <label>Gamer1: </label>
            <input type="text" placeholder="Player1 Name" onChange={this.readp1} value={this.state.player1} />&emsp;
            <label>Select color of your choice: </label>
            <input type="color" onChange={this.readcolorp1} value={this.state.g1color} />
          </div><br />
          <div class="col">
            <label>Gamer2: </label>
            <input type="text" placeholder="Player2 Name" onChange={this.readp2} value={this.state.player2} />&emsp;
            <label>Select color of your choice: </label>
            <input type="color" onChange={this.readcolorp2} value={this.state.g2color}></input>
            </div>
            <Router><br />
              <button><Link to="/board">Begin</Link></button>
              <Switch>
                <Route path="/board">
                  <Board />
                </Route>
              </Switch>
            </Router>
          
        </div>
        </center>
      </div>
    )
  }
  readp1 = (event) => {
    localStorage.setItem("P1",event.target.value);
    this.setState({ player1: event.target.value });
  };
  readp2 = (event) => {
    localStorage.setItem("P2",event.target.value);
    this.setState({ player2: event.target.value });
  };
  readcolorp1 = (event) => {
    localStorage.setItem("g1color",event.target.value);
    this.setState({ g1color: event.target.value });
  };
  readcolorp2 = (event) => {
    localStorage.setItem("g2color",event.target.value);
    this.setState({ g2color: event.target.value });
  };
}
// export default About;


// export default Contact;
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      // color : "pink",
      secs:0,
      gamestart:true,
      count:0,
      turn: true,
      time:0,
      P1:"",
      P2:"",
      color1:"",
      color2:""
    }
  }

  componentDidMount(){
    var play1=localStorage.getItem("P1");
    var play2=localStorage.getItem("P2");
    var col1=localStorage.getItem("g1color");
    var col2=localStorage.getItem("g2color");
    this.setState({
      P1:play1,
      P2:play2,
      color1:col1,
      color2:col2
    });
    this.start();
  }
  render() {
    
    return (
      <div>
          <label id="minutes">00</label>:<label id="seconds">00</label>
         <center> <h1 style={{ fontSize:30, fontFamily:'monospace', color:"white" }}> TURN : <span id="disp">{this.state.P1}</span> </h1></center>
          <table border="1">
          <tr height="50">
            <td width="50" id="0" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="1" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="2" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="3" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="4" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="5" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="6" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
          <tr height="50">
            <td width="50" id="7" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="8" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="9" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="10" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="11" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="12" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="13" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
          <tr height="50">
            <td width="50" id="14" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="15" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="16" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="17" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="18" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="19" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="20" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
          <tr height="50">
            <td width="50" id="21" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="22" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="23" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="24" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="25" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="26" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="27" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
          <tr height="50">
            <td width="50" id="28" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="29" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="30" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="31" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="32" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="33" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="34" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
          <tr height="50">
            <td width="50" id="35" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="36" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="37" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="38" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="39" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="40" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
            <td width="50" id="41" onClick={this.col1} style={{ backgroundColor: 'white' }}></td>
          </tr>
        </table>
      </div>
    );
  }
  
  start(){
    this.state.time = setInterval(() => {
      // alert(typeof(time));
      var totalSeconds=this.state.secs;
      this.setState({
        secs:totalSeconds+1
      });
      var minutesLabel = document.getElementById("minutes");
      var secondsLabel = document.getElementById("seconds");
      secondsLabel.innerHTML = this.pad(this.state.secs % 60);
      minutesLabel.innerHTML = this.pad(parseInt(this.state.secs / 60));
    }, 1000)
    return ()=> {
      // clearInterval(time);
    };
  }

  close = () => {
    clearInterval(this.state.time);
  }
  col1 = (event) => {
    // alert(this.state.color1);
    
    var ans=this.check();
    if(ans==1){
      
      this.state.gamestart=false;
      this.close();
      ReactDOM.render(<Winner name={this.state.P1} time={this.state.secs} moves={this.state.count}/>,document.getElementById("root"));
    }
    else if(ans==2){
      // alert();
      this.close();
      this.state.gamestart=false;
      ReactDOM.render(<Winner name={this.state.P2} time={this.state.secs} moves={this.state.count}/>,document.getElementById("root"));
    }
    else{
      const x = Number(event.target.id);
      const col = x % 7;
      for (var i = 41; i >= 0; i--) {
        var d = String(i);
        if (i % 7 == col && document.getElementById(String(i)).style.backgroundColor=="white" ) {
          if (this.state.turn) { 
            if (event.target.style.backgroundColor == "white") {
              document.getElementById(String(i)).style.backgroundColor=this.state.color1;
              this.setState({ turn: !this.state.turn ,count:this.state.count+1});
              document.getElementById("disp").innerHTML=this.state.P2;
              break;
            }
          }
          else {
            if (event.target.style.backgroundColor == "white") {
              document.getElementById(String(i)).style.backgroundColor=this.state.color2;
              this.setState({ turn: !this.state.turn ,count:this.state.count+1 });
              document.getElementById("disp").innerHTML=this.state.P1;
              break;
            }
          }
        }
      }
    }

  }

  check(){
    var countblue=0;
    var countred=0;
    // alert(document.getElementById(String(41)).style.backgroundColor);
    //   alert(this.state.color2); 
    //   alert(this.state.color1);
    for(var j=0;j<41;j=j+7){
    for(var i=0;i<7;i++){
       
      if(this.RGBToHex(document.getElementById(String(j+i)).style.backgroundColor)==this.state.color2){ 
        countblue++;
        countred=0;
      }
      else if(this.RGBToHex(document.getElementById(String(j+i)).style.backgroundColor)==this.state.color1){
        countred++;
        countblue=0;
      }
      else{
        countblue=0;
        countred=0;
      }
      if(countred>=4){
        return 1;
      }
      if(countblue>=4){
        return 2;
      }
    }
  } 


  var countblue = 0;
    var countred = 0;
    for (var j = 0; j < 7; j ++) {
      for (var i = 0; i < 42; i = i+7) {
        if (this.RGBToHex(document.getElementById(String(j + i)).style.backgroundColor) == this.state.color2) {
          countblue++;
          countred = 0;
        }
        else if (this.RGBToHex(document.getElementById(String(j + i)).style.backgroundColor) == this.state.color1) {
          countred++;
          countblue = 0;
        }
        else {
          countblue = 0;
          countred = 0;
        }
        if (countred >= 4) {
          return 1;
        }
        if (countblue >= 4) {
          return 2;
        }
      }
    }

  return this.checkdiagonal();
  }
  checkdiagonal(){
    var countblue = 0;
    var countred = 0;
    for(var i=0;i<21;i++){
      if(i<3 || (i>6 && i<10) || (i>13 && i<17)){
        if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+8)).style.backgroundColor)) && 
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+16)).style.backgroundColor)) &&
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+24)).style.backgroundColor))){
          if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color1){
            return 1;
          }
          else if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color2){
            return 2;
          }
        }
      }
      else if((i>3 && i<7) || (i>10 && i<14) || (i>17 && i<21)){
        if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+6)).style.backgroundColor)) && 
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+12)).style.backgroundColor)) &&
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+18)).style.backgroundColor))){
          if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color1){
            return 1;
          }
          else if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color2){
            return 2;
          }
        }
      }
      else{
        if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+6)).style.backgroundColor)) && 
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+12)).style.backgroundColor)) &&
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+18)).style.backgroundColor))){
          if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color1){
            return 1;
          }
          else if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color2){
            return 2;
          }
        }
        else if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+8)).style.backgroundColor)) && 
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+16)).style.backgroundColor)) &&
        (this.RGBToHex(document.getElementById(String(i)).style.backgroundColor) == 
        this.RGBToHex(document.getElementById(String(i+24)).style.backgroundColor))){
          if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color1){
            return 1;
          }
          else if((this.RGBToHex(document.getElementById(String(i)).style.backgroundColor))== this.state.color2){
            return 2;
          }
        }
      }
    }
    return 0;
  }

  RGBToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    return "#" + r + g + b;
  }

// var minutesLabel = document.getElementById("minutes");
// var secondsLabel = document.getElementById("seconds");
// var totalSeconds = 0;
// setInterval(setTime, 1000);

setTime() {
  
  alert("giii");
  var totalSeconds=this.state.secs;
  this.setState({
    secs:totalSeconds+1,
    gamestart:false
  });
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  secondsLabel.innerHTML = this.pad(this.state.secs % 60);
  minutesLabel.innerHTML = this.pad(parseInt(this.state.secs / 60));
}

pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}


}

class Winner extends React.Component{
  constructor(){
    super();
    this.state={
      move:0,
      min:"",
      sec:""
    }
  }

  componentDidMount(){
    // alert(typeof(this.props.moves));
    // alert(this.props.moves)
    var count=this.props.moves;
    // alert(count);
    var secs=this.props.time;
    this.setState({
      sec:this.pad(secs % 60),
      min:this.pad(parseInt(secs / 60)),
      move:Math.ceil((count/2))
    })
  }

  pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  render(){
    return(
      <center><h1 style={{ color:'white' }}>Game won by : {this.props.name} <br />The Time taken {this.state.min } minutes : {this.state.sec} seconds <br />The total moves taken by the player is  {this.state.move}</h1></center>
    );

  }
}
