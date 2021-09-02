import React from 'react'

export default class UpdateModal extends React.Component {

    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog" id="updateModal" aria-hidden="true" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">UPDATE THIS USER</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label forhtml="txtNombre" className="col-sm-2 col-form-label">NOMBRE</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="txtNombre" placeholder="Nombre"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label forhtml="txtApellido" className="col-sm-2 col-form-label">APELLIDO</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="txtApellido" placeholder="Apellido"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" id='btnUpdate' idusuario='' onClick={this.props.handleUpdate} className="btn btn-primary">ADD</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}