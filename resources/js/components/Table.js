import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FileTable from './FileTableComponent';
import Modal from './ModalComponent'
import UpdateModal from './UpdateModal'
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.llenarInfoUsuario = this.llenarInfoUsuario.bind(this);
        // Este enlace es necesario para hacer que `this` funcione en el callback
    }
    async handleUpdate(e){
        let txtNombre = document.getElementById('txtNombre');
        let id = e.target.getAttribute('idusuario');
        let txtApellido = document.getElementById('txtApellido');
        let newName = txtNombre.value;
        let newLastName  = txtApellido.value;
        let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
            },
            body: JSON.stringify({ id:id, nuevoNombre : newName, nuevoApellido : newLastName})
        };
        await fetch('/usuarios/update/',requestOptions).
            then(response => response.json())
            .then(data => {
                alert(data)
            })
    }
    async handleAdd(e){
        e.preventDefault(e);
        let name = document.getElementById('nombreUsuario');
        let lastName = document.getElementById('apellidoUsuario');
        console.log(name.value);
        console.log(lastName.value)
        let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
            },
            body: JSON.stringify({ nameUser : name.value, lastNameUser : lastName.value})
        };
       await fetch('/usuarios/create/', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        const nuevo = {
                            id: data.id,
                            nombre: name.value,
                            apellido: lastName.value
                        }
                        
                        this.setState(prevState => ({ usuarios: [...prevState.usuarios, nuevo] }))
                        alert(data.mensaje)

                    });


    }
    async handleDelete(e) {
        e.preventDefault();
        const id = e.target.id;
        let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        let index = 0;
        let cont = 0;
        this.state.usuarios.map(user => {
            if (user.id === parseInt(id)) {
                index = cont;
            }
            cont++;
        })
        const requestOptions = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
            }
        };
        const response = await fetch('/usuarios/delete/'+id, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    usuarios: this.state.usuarios.filter(user => user.id != id)
                })
                alert(data)
            });


    }
   async llenarInfoUsuario(e){

        let txtNombre = document.getElementById('txtNombre');
        let txtApellido = document.getElementById('txtApellido');
        txtNombre.setAttribute('value','');
        txtApellido.setAttribute('value','');
        let id = e.target.getAttribute('idUsuario');
        let btnUpdate = document.getElementById('btnUpdate');
        btnUpdate.setAttribute('idusuario',id);
        const response = await fetch('/usuarios/getUsuario/'+id);
        const usuario = await response.json();
        txtNombre.setAttribute('value',usuario.nombre);
        txtApellido.setAttribute('value',usuario.apellido);
    }
    async componentDidMount() {
        const response = await fetch('/usuarios/getUsuarios');
        const data = await response.json();
        this.setState({ usuarios: data });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <table className="container table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map(user => {
                                    return (<FileTable llenarInfoUsuario={this.llenarInfoUsuario} key={user.id} handleDelete={this.handleDelete} id={user.id} nombre={user.nombre} apellido={user.apellido} />)
                                })
                            }
                        </tbody>
                    </table>

                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-success" data-toggle="modal" data-target="#myModal">ADD</button>
                </div>
                <Modal handleAdd={this.handleAdd}></Modal>
                <UpdateModal handleUpdate={this.handleUpdate}/>
            </div>


        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Table />, document.getElementById('example'));
}