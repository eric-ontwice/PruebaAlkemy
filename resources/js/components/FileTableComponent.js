import React from 'react';

export default class FileTable extends React.Component {
    render() {
        return (<tr>
            <td>{this.props.id}</td>
            <td>{this.props.nombre}</td>
            <td>{this.props.apellido}</td>
            <td><button className="btn btn-danger" onClick = {this.props.handleDelete} id={this.props.id}>DELETE</button></td>
            <td><button className="btn btn-warning" idusuario={this.props.id} onClick={this.props.llenarInfoUsuario} data-toggle="modal" data-target="#updateModal">UPDATE</button></td>
        </tr>)
    }

}



