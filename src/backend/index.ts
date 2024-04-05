import { Server } from 'azle';
import express, { Request,NextFunction,Response} from 'express';

type Usuario = {
   id_Usuario: number,
    nombreEmpleado: string,
    area: string,
    telefono: string;
}

//Arreglo para usuarios
let usuarios: Usuario[] = [{
    id_Usuario: 1312,
    nombreEmpleado: "Richard Elias",
    area: "Produccion de leche",
    telefono: "4492314322"
}]


// Arreglo para ganado tabla principal
type Ganado = {
    numRegistro: number,
    fechaNac: string,
    tipoAnimal: string;
    Raza: string;
    fechaIngreso: string;
    sexo: string;
    pesoInicial : string;
    pesoActual: string;
    departamento: string;
    estado: string;
    precio_compra: string;
    precio_venta: string
    
}
//Arreglo para ganado tabla principal
let ganadoReg: Ganado[] = [{
    numRegistro: 5234,
    fechaNac: '12-01-2024',
    tipoAnimal: 'Vaca',
    Raza: 'negra xd',
    fechaIngreso: '17-03-2024',
    sexo: 'Hembra',
    pesoInicial : '180 Kg',
    pesoActual: '324 Kg',
    departamento:'A1' ,
    estado: 'activo',
    precio_compra:'$2000',
    precio_venta:''
    
}]


// Arreglo para Cliente
type Clientes = {
    idCliente: number,
    nombre: string,
    domicilio: string,
    correo: string,
    telefono: string
}

//Arreglo para clientes
let cliente: Clientes[] = [{
    idCliente: 112,
    nombre: "juan",
    domicilio: 'Barrio negro',
    correo: '@gmail',
    telefono: '555555521'
}]



// Arreglo para venta de ganado
type VentaGanado = {
    idVenta: number,
    numRegistro: number,
    fechaVenta: string,
    idCliente:Number,
    monto: string,
    tipoPago: string
}

//venta de ganado

let venta_ganado: VentaGanado[] = [{
    idVenta: 123,
    numRegistro: 5234,
    fechaVenta: '12-21-2024',
    idCliente:112,
    monto: '$2000',
    tipoPago: 'Efectivo'
}]



// Arreglo para control de ganado
type controlGanado = {
    idControl: number,
    numRegistro: number,
    usuario: string,
    pesoActual:string,
    DarBaja: string,
    Departamento: string
}
let control_ganado: controlGanado[] = [{
    idControl: 123,
    numRegistro: 5234,
    usuario:'Richard',
    pesoActual:'120 kg',
    DarBaja: 'vendida',
    Departamento: 'A1'
}]





// Arreglo para transacciones
type Transacciones = {
    idTransaccion: number,
    usuario: string,
    numRegistro: number
    fechaTrans:string,
    Departamento: string,
    Estado: string
}

let transaccion: Transacciones[] = [{
    idTransaccion: 123,
    numRegistro: 5234,
    usuario:'Richard',
    fechaTrans:'12-12-2024',
    Departamento: 'A1',
    Estado: 'En progreso'
}]


// Arreglo para SeguimientoSalud

type SeguimientoSalud = {
    idSegSalud: number,
    numRegistro: number,
    fecha:string,
    incidencia:string
    nombreVeterinario: string,
    tratamiento: string,
    estado:string
}

// Arreglo para SeguimientoSalud

let seguimiento_salud:SeguimientoSalud[]= [{
    idSegSalud: 132,
    numRegistro: 123,
    fecha:'21-03-1999',
    incidencia:'Enfermo', 
    nombreVeterinario: 'Victor Arturo',
    tratamiento: 'penicilina ',
    estado:'observacion',
}]







export default Server(() => {
    const app = express();
    app.use(express.json());


    // GET
    app.get("/usuarios", (req, res) => {
        res.json(usuarios);
    });

    // POST
    app.post("/usuarios", (req, res) => {
        const newUser: Usuario = req.body;
        //Validar si existe el usuario
        const existeUsuario = usuarios.find((Usuarios) => Usuarios.id_Usuario === newUser.id_Usuario);
        if (existeUsuario){
            res.status(400).send("Ya existe un usuario con este Id");
        }
        else {
            usuarios = [...usuarios,newUser];
            res.send("Registro creado correctamente");
        }
        
    });


    // UPDATE
    app.put("/usuarios/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const usuario = usuarios.find((usuario) => usuario.id_Usuario === id);
        if (!usuario) {
            res.status(404).send("No existe el usuario");
            return;
        }
       
        const updatedUsuario = { ...usuario, ...req.body };
        usuarios = usuarios.map((m) => m.id_Usuario === updatedUsuario.id_Usuario ? updatedUsuario : m);
        res.send("Actualizado correctamente");
    });

    // DELETE
    app.delete("/usuarios/:id", (req, res) => {
        const id = parseInt(req.params.id);
        usuarios = usuarios.filter((usuario) => usuario.id_Usuario !== id);
        res.send("Eliminado correctamente");
    });


//----------------------------------------Ganado------------------------------------------------------------------

    // GET
    app.get("/ganado", (req, res) => {
        res.json(ganadoReg);
    });

    // POST
    app.post("/ganado", (req, res) => {
        const newAnimal: Ganado= req.body;
        const existeGanado = ganadoReg.find((Ganado) => Ganado.numRegistro === newAnimal.numRegistro);
        if (existeGanado){
            res.status(400).send("Ya existe un animal con este Id");
        }
        else {
            ganadoReg = [...ganadoReg,newAnimal];
            res.send("Registro creado correctamente");
        }
    });

    // UPDATE
    app.put("/ganado/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const animales= ganadoReg.find((animales) => animales.numRegistro === id);
        if (!animales) {
            res.status(404).send("No existe el animal");
            return;
        }
        const updateAnimal = { ...animales, ...req.body };
        ganadoReg = ganadoReg.map((m) => m.numRegistro === updateAnimal.numRegistro ? updateAnimal : m);
        res.send("Actualizado correctamente");
    });
    
    

    // DELETE
    app.delete("/ganado/:id", (req, res) => {
        const id = parseInt(req.params.id);
        ganadoReg = ganadoReg.filter((animales) => animales.numRegistro !== id);
        res.send("Eliminado correctamente");
    });

//------------------------------------Clientes-------------------------------------------------------

    // GET
    app.get("/clientes", (req, res) => {
        res.json(cliente);
    });

    // POST
    app.post("/clientes", (req, res) => {
        const newCliente: Clientes = req.body;
        const existeCliente = cliente.find((Clientes) => Clientes.idCliente === newCliente.idCliente);
        if (existeCliente){
            res.status(400).send("Ya existe un usuario con este Id");
        }
        else {
            cliente = [...cliente,newCliente];
            res.send("Se ha agregado un nuevo usuario");
        }
    });
    // POST
    app.post("/ganado", (req, res) => {
        const newAnimal: Ganado= req.body;
        const existeGanado = ganadoReg.find((Ganado) => Ganado.numRegistro === newAnimal.numRegistro);
        if (existeGanado){
            res.status(400).send("Ya existe un animal con este Id");
        }
        else {
            ganadoReg = [...ganadoReg,newAnimal];
            res.send("Registro creado correctamente");
        }
    });


    // UPDATE
    app.put("/clientes/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const clienteUp = cliente.find((clienteUp) => clienteUp.idCliente === id);
        if (!clienteUp) {
            res.status(404).send("No existe el empleado");
            return;
        }
        const updatedCliente = { ...clienteUp, ...req.body };
        cliente = cliente.map((m) => m.idCliente === updatedCliente.idCliente ? updatedCliente : m);
        res.send("Actualizado correctamente");
    });
        


    // DELETE
    app.delete("/clientes/:id", (req, res) => {
        const id = parseInt(req.params.id);
        cliente = cliente.filter((client) => client.idCliente !== id);
        res.send("Eliminado correctamente");
    });


//------------------------Ventas------------------------------------
   
    function validateVentaGanId(req: Request, res: Response, next: NextFunction) {
        const { id } = req.body;
        if (venta_ganado.some(ventaganado => ventaganado.idVenta === id)) {
            return res.status(400).json({ error: 'Ya existe un cliente con este ID' });
        }
        next();
    }

    // GET
    app.get("/ventaGanado", (req, res) => {
        res.json(venta_ganado);
    });

    // POST
    app.post("/ventaGanado", validateVentaGanId, (req, res) => {
        const newVentaG: VentaGanado = req.body;
        const existeVentaG = venta_ganado.find((VentaGanado) => VentaGanado.idVenta === newVentaG.idVenta);
        if (existeVentaG){
            res.status(400).send("Ya existe un venta con este Id");
        }
        else {
            venta_ganado = [...venta_ganado,newVentaG];
            res.send("La venta se creado correctamente");
        }
    });

    // UPDATE
    app.put("/ventaGanado/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const venta = venta_ganado.find((venta) => venta.idVenta=== id);
        if (!venta) {
            res.status(404).send("No existe el la venta");
            return;
        }
        const upDateVenta = { ...venta, ...req.body };
        venta_ganado = venta_ganado.map((m) => m.idVenta === upDateVenta.idVenta ? upDateVenta : m);
        res.send("Actualizada venta correctamente");
    });

    
    // DELETE
    app.delete("/ventaGanado/:id", (req, res) => {
        const id = parseInt(req.params.id);
        venta_ganado = venta_ganado.filter((venta) => venta.idVenta !== id);
        res.send("Eliminado correctamente");
    });

     
    
    
//-----------------------------------------ControlGanado--------------------------------------------------

    // GET
    app.get("/controlGanado", (req, res) => {
        res.json(control_ganado);
    });

    // POST
    app.post("/controlGanado", (req, res) => {
        const newControl: controlGanado = req.body;
        const existeControl = control_ganado.find((controlGanado) => controlGanado.idControl === newControl.idControl);
        if (existeControl){
            res.status(400).send("Ya existe un venta con este Id");
        }
        else {
            control_ganado = [...control_ganado,newControl];
            res.send("La venta se creado correctamente");
        }
    });

    // UPDATE
    app.put("/controlGanado/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const control= control_ganado.find((control) => control.idControl=== id);
        if (!control) {
            res.status(404).send("No existe el animal");
            return;
        }
        const updatedControl = { ...control, ...req.body };
        control_ganado= control_ganado.map((m) => m.idControl === updatedControl.idControl ? updatedControl : m);
        res.send("Actualizado correctamente");
    });

       


    // DELETE
    app.delete("/controlGanado/:id", (req, res) => {
        const id = parseInt(req.params.id);
        control_ganado = control_ganado.filter((control) => control.idControl !== id);
        res.send("Eliminado correctamente");
    });

   
   
//-------------------------------------------Transacciones-------------------------------------------------
    // GET
    app.get("/transacciones", (req, res) => {
        res.json(transaccion);
    });

    // POST
    app.post("/transacciones", (req, res) => {
        const newTransaccion: Transacciones = req.body;
        const existeTransaccion = transaccion.find((Transacciones) => Transacciones.idTransaccion === newTransaccion.idTransaccion);
        if (existeTransaccion){
            res.status(400).send("Ya existe un venta con este Id");
        }
        else {
            transaccion = [...transaccion,newTransaccion];
            res.send("La transaccion se creado correctamente");
        }
    });

    // UPDATE
    app.put("/transacciones/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const trans= transaccion.find((trans) => trans.idTransaccion=== id);
        if (!trans) {
            res.status(404).send("No existe la transaccion");
            return;
        }
        const updatedTransaccion = { ...trans, ...req.body };
        transaccion= transaccion.map((m) => m.idTransaccion === updatedTransaccion.idTransaccion ? updatedTransaccion : m);
        res.send("Actualizado correctamente");
    });

        // UPDATE
        app.put("/controlGanado/:id", (req, res) => {
            const id = parseInt(req.params.id);
            const control= control_ganado.find((control) => control.idControl=== id);
            if (!control) {
                res.status(404).send("No existe el animal");
                return;
            }
            const updatedControl = { ...control, ...req.body };
            control_ganado= control_ganado.map((m) => m.idControl === updatedControl.idControl ? updatedControl : m);
            res.send("Actualizado correctamente");
        });
    


    // DELETE
    app.delete("/transacciones/:id", (req, res) => {
        const id = parseInt(req.params.id);
        transaccion = transaccion.filter((trans) => trans.idTransaccion !== id);
        res.send("Eliminado correctamente");
    });

//----------------------------------------------Seguimiento-----------------------------------------------

    // GET
    app.get("/seguimientos", (req, res) => {
        res.json(seguimiento_salud);
    });

    // POST
    app.post("/seguimientos", (req, res) => {
        const newSeguimiento: SeguimientoSalud = req.body;
        const existeSeguimiento = seguimiento_salud.find((Transacciones) => Transacciones.idSegSalud === newSeguimiento.idSegSalud);
        if (existeSeguimiento){
            res.status(400).send("Ya existe un seguimiento con este Id");
        }
        else {
            seguimiento_salud = [...seguimiento_salud,newSeguimiento];
            res.send("El seguimiento se ha creado correctamente");
        }
    });


    // UPDATE
    app.put("/seguimientos/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const seguimiento= seguimiento_salud.find((seguimiento) => seguimiento.idSegSalud=== id);
        if (!seguimiento) {
            res.status(404).send("No existe el empleado");
            return;
        }
        const updatedSeguimiento = { ...seguimiento, ...req.body };
        seguimiento_salud= seguimiento_salud.map((m) => m.idSegSalud === updatedSeguimiento.idSegSalud? updatedSeguimiento : m);
        res.send("Actualizado correctamente");
    });


    // DELETE
    app.delete("/seguimientos/:id", (req, res) => {
        const id = parseInt(req.params.id);
        seguimiento_salud= seguimiento_salud.filter((segui) => segui.idSegSalud !== id);
        res.send("Eliminado correctamente");
    });




    return app.listen();
});