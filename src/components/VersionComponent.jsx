import React from 'react';

class VersionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: '',
    };
  }

  componentDidMount() {
    // Realizar una solicitud HTTP para obtener el archivo version.json
    fetch('https://raw.githubusercontent.com/helloOrigen/Origen-Studios-Website/main/version.json')
      .then((response) => response.json())
      .then((data) => {
        const version = data.version;
        this.setState({ version });
      })
      .catch((error) => {
        console.error('Error al obtener la versión:', error);
      });
  }

  render() {
    return (
      <div>
        <p>Versión de la web: {this.state.version}</p>
      </div>
    );
  }
}

export default VersionComponent;