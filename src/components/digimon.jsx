import { Component } from "react";
import axios from "axios";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: "",
      name: "Patamon",
      sprite: "",
      level: "?",
    };
  }

  componentDidMount() {
    axios
      .get(`https://digimon-api.vercel.app/api/digimon/name/${this.state.name}`)
      .then(({ data }) => {
        console.log(data[0].name);
        console.log(data[0].img);
        this.setState({
          reveal: data[0].name,
          name: data[0].name,
          sprite: data[0].img,
          level: data[0].level,
        });
      });
  }

  onChange = (e) => this.setState({ name: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.componentDidMount(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <p>It's {this.state.reveal} ! </p>
        <img src={this.state.sprite} alt="Digivolution !" />
        <p>Level : {this.state.level}</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Choose your Digimon"
            value={this.state.name}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default Hello;
