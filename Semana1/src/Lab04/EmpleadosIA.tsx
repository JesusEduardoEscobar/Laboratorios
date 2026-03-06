import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody
} from "reactstrap";

interface Empleado {
  id: number;
  nombre: string;
  edad: string;
  rol: string;
  correo: string;
}

const data: Empleado[] = [
  { id: 1, nombre: "Jesus Escobar", edad: "23", rol: "Administrador", correo: "jesus@kfkf.com" },
  { id: 2, nombre: "Ana Torres", edad: "25", rol: "Usuario", correo: "ana.torres@mail.com" },
  { id: 3, nombre: "Carlos Mendoza", edad: "30", rol: "Moderador", correo: "carlos.mendoza@mail.com" },
  { id: 4, nombre: "Mariana López", edad: "27", rol: "Usuario", correo: "mariana.lopez@mail.com" },
  { id: 5, nombre: "Luis Hernández", edad: "35", rol: "Administrador", correo: "luis.hernandez@mail.com" },
  { id: 6, nombre: "Sofía Ramírez", edad: "22", rol: "Usuario", correo: "sofia.ramirez@mail.com" },
  { id: 7, nombre: "Pedro Castillo", edad: "29", rol: "Moderador", correo: "pedro.castillo@mail.com" },
  { id: 8, nombre: "Valeria Gómez", edad: "24", rol: "Usuario", correo: "valeria.gomez@mail.com" },
  { id: 9, nombre: "Fernando Ruiz", edad: "31", rol: "Administrador", correo: "fernando.ruiz@mail.com" },
  { id: 10, nombre: "Daniela Vargas", edad: "26", rol: "Usuario", correo: "daniela.vargas@mail.com" }
];

interface State {
  data: Empleado[];
  modalEditar: boolean;
  modalInsertar: boolean;
  form: Empleado;
}

class EmpleadosIA extends React.Component<{}, State> {

  state: State = {
    data: data,
    modalEditar: false,
    modalInsertar: false,
    form: {
      id: 0,
      nombre: "",
      edad: "",
      rol: "",
      correo: ""
    }
  };

  mostrarModalEditar = (empleado: Empleado) => {
    this.setState({
      form: { ...empleado },
      modalEditar: true
    });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
      form: { id: 0, nombre: "", edad: "", rol: "", correo: "" }
    });
  };

  cerrarModalEditar = () => this.setState({ modalEditar: false });

  cerrarModalInsertar = () => this.setState({ modalInsertar: false });

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      } as Empleado
    });
  };

  insertar = () => {

    const nuevoEmpleado: Empleado = {
      ...this.state.form,
      id: this.state.data.length + 1
    };

    this.setState({
      data: [...this.state.data, nuevoEmpleado],
      modalInsertar: false
    });
  };

  editar = () => {

    const listaNueva = this.state.data.map(emp =>
      emp.id === this.state.form.id ? this.state.form : emp
    );

    this.setState({
      data: listaNueva,
      modalEditar: false
    });
  };

  eliminar = (empleado: Empleado) => {

    const confirmacion = window.confirm(`¿Eliminar a ${empleado.nombre}?`);

    if (confirmacion) {
      const listaNueva = this.state.data.filter(e => e.id !== empleado.id);
      this.setState({ data: listaNueva });
    }
  };

  render() {

    return (
      <Container style={{ marginTop: "40px" }}>

        {/* HEADER */}

        <div style={{
          textAlign: "center",
          marginBottom: "30px"
        }}>
          <h1 style={{ fontWeight: "bold" }}>
            Sistema de Empleados IA 🤖
          </h1>
          <p style={{ color: "#6c757d" }}>
            Administración de usuarios del sistema
          </p>
        </div>

        <Card style={{
          boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
          borderRadius: "12px"
        }}>
          <CardBody>

            <Button
              color="success"
              size="lg"
              onClick={this.mostrarModalInsertar}
            >
              ➕ Agregar Empleado
            </Button>

            <br />
            <br />

            <Table
              hover
              striped
              responsive
              style={{
                borderRadius: "10px",
                overflow: "hidden"
              }}
            >

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Rol</th>
                  <th>Correo</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>

                {this.state.data.map(emp => (

                  <tr key={emp.id}>

                    <td><strong>{emp.id}</strong></td>
                    <td>{emp.nombre}</td>
                    <td>{emp.edad}</td>
                    <td>
                      <span className="badge bg-info">
                        {emp.rol}
                      </span>
                    </td>
                    <td>{emp.correo}</td>

                    <td>

                      <Button
                        color="primary"
                        size="sm"
                        onClick={() => this.mostrarModalEditar(emp)}
                      >
                        ✏️ Editar
                      </Button>{" "}

                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => this.eliminar(emp)}
                      >
                        🗑 Eliminar
                      </Button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </Table>

          </CardBody>
        </Card>

        {/* MODAL EDITAR */}

        <Modal isOpen={this.state.modalEditar}>

          <ModalHeader toggle={this.cerrarModalEditar}>
            ✏️ Editar Empleado
          </ModalHeader>

          <ModalBody>

            <FormGroup>
              <label>Nombre</label>
              <input
                className="form-control"
                name="nombre"
                value={this.state.form.nombre}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Edad</label>
              <input
                className="form-control"
                name="edad"
                value={this.state.form.edad}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Rol</label>
              <input
                className="form-control"
                name="rol"
                value={this.state.form.rol}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Correo</label>
              <input
                className="form-control"
                name="correo"
                value={this.state.form.correo}
                onChange={this.handleChange}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>

            <Button color="primary" onClick={this.editar}>
              Guardar Cambios
            </Button>

            <Button color="secondary" onClick={this.cerrarModalEditar}>
              Cancelar
            </Button>

          </ModalFooter>

        </Modal>

        {/* MODAL INSERTAR */}

        <Modal isOpen={this.state.modalInsertar}>

          <ModalHeader toggle={this.cerrarModalInsertar}>
            ➕ Nuevo Empleado
          </ModalHeader>

          <ModalBody>

            <FormGroup>
              <label>Nombre</label>
              <input className="form-control" name="nombre" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <label>Edad</label>
              <input className="form-control" name="edad" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <label>Rol</label>
              <input className="form-control" name="rol" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <label>Correo</label>
              <input className="form-control" name="correo" onChange={this.handleChange}/>
            </FormGroup>

          </ModalBody>

          <ModalFooter>

            <Button color="success" onClick={this.insertar}>
              Crear Empleado
            </Button>

            <Button color="secondary" onClick={this.cerrarModalInsertar}>
              Cancelar
            </Button>

          </ModalFooter>

        </Modal>

      </Container>
    );
  }
}

export default EmpleadosIA;