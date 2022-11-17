require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT

app.use(express.static('public'))

//Motor de plantilla
hbs.registerPartials(__dirname + '/public/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');







// -------------------------ROLES-----------------------
app.get('/inicio', (req, res) => {
    res.render('inicio', {
        nombre: 'inicio'
    })
})

app.get('/registrarRoles', (req, res) => {
    res.render('registrarRoles', {
        nombre: 'Registrar roles'
    })
})

app.get('/listarRoles', (req, res) => {
    res.render('listarRoles', {
        nombre: 'Listar roles'
    })
})

// -------------------------USUARIOS-----------------------
app.get('/registrarUsuarios', (req, res) => {
    res.render('registrarUsuarios', {
        nombre: 'Registrar usuarios'
    })
})
app.get('/listarUsuarios', (req, res) => {
    res.render('listarUsuarios', {
        nombre: 'Listar usuarios'
    })
})


// -------------------------PROVEEDORES-----------------------
app.get('/registrarProveedores', (req, res) => {
    res.render('registrarProveedores', {
        nombre: 'Registrar proveedores'
    })
})
app.get('/listarProveedores', (req, res) => {
    res.render('listarProveedores', {
        nombre: 'Listar proveedores'
    })
})

// -------------------------COMPRAS-----------------------
app.get('/registrarCompras', (req, res) => {
    res.render('registrarCompras', {
        nombre: 'Registrar compras'
    })
})
app.get('/listarCompras', (req, res) => {
    res.render('listarCompras', {
        nombre: 'Listar compras'
    })
})

// -------------------------PRODUCTOS-----------------------
app.get('/registrarProductos', (req, res) => {
    res.render('registrarProductos', {
        nombre: 'Registrar productos'
    })
})
app.get('/listarProductos', (req, res) => {
    res.render('listarProductos', {
        nombre: 'Listar productos'
    })
})

app.get('/categorias', (req, res) => {
    res.render('categorias', {
        nombre: 'categorias'
    })
})

// -------------------------CLIENTES-----------------------
app.get('/registrarClientes', (req, res) => {
    // res.send('Hola Mundo')
    res.render('registrarClientes', {
        nombre: 'Registrar clientes'
    })
})

app.get('/listarClientes', (req, res) => {
    // res.send('Hola Mundo')
    res.render('listarClientes', {
        nombre: 'Listar clientes'
    })
})

// -------------------------VENTAS-----------------------
app.get('/registrarVentas', (req, res) => {
    res.render('registrarVentas', {
        nombre: 'Registrar ventas'
    })
})
app.get('/listarVentas', (req, res) => {
    res.render('listarVentas', {
        nombre: 'Listar ventas'
    })
})

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`)
})


