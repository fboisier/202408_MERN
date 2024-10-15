import request from 'supertest';
import {app, server} from '../server.js';


afterAll((done) => {
  server.close(done);
});

describe('Pruebas de rutas de usuarios', () => {
  test('GET /api/usuarios debe devolver una lista de usuarios', async () => {
    const response = await request(app).get('/api/usuarios');
    expect(response.statusCode).toBe(200);
    expect(response.body.usuarios).toBeInstanceOf(Array);
  });

  test('POST /api/usuarios debe crear un nuevo usuario', async () => {
    const nuevoUsuario = { id: 4, nombre: 'Luis' };
    const response = await request(app)
      .post('/api/usuarios')
      .send(nuevoUsuario);
    expect(response.statusCode).toBe(201);
    expect(response.body.cuerpo).toMatchObject(nuevoUsuario);
  });

  test('POST /api/usuarios validar el id ', async () => {
    const nuevoUsuario = {nombre: 'Luis' };
    const response = await request(app)
      .post('/api/usuarios')
      .send(nuevoUsuario);
    expect(response.statusCode).toBe(400);
  });

  test('POST /api/usuarios validar el nombre ', async () => {
    const nuevoUsuario = {id: 4};
    const response = await request(app)
      .post('/api/usuarios')
      .send(nuevoUsuario);
    expect(response.statusCode).toBe(400);
  });


  test('POST /api/usuarios validar usuario ya existe ', async () => {
    const nuevoUsuario = { id: 4, nombre: 'Luis' };
    await request(app)
      .post('/api/usuarios')
      .send(nuevoUsuario);

    const responseDos = await request(app)
      .post('/api/usuarios')
      .send(nuevoUsuario);

    expect(responseDos.statusCode).toBe(400);
  });


  test('PUT /api/usuarios/:id debe actualizar un usuario existente', async () => {
    const usuarioActualizado = { id: 1, nombre: 'Juan Actualizado' };
    const response = await request(app)
      .put('/api/usuarios/1')
      .send(usuarioActualizado);
    expect(response.statusCode).toBe(200);
    expect(response.body.cuerpo.nombre).toBe('Juan Actualizado');
  });

  test('DELETE /api/usuarios/:id debe eliminar un usuario existente', async () => {
    const response = await request(app).delete('/api/usuarios/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.mensaje).toBe('Usuario eliminado');
  });

  test('GET /api/usuarios/:id debe devolver el detalle de un usuario', async () => {
    const response = await request(app).get('/api/usuarios/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.usuario).toMatchObject({ id: 1, nombre: 'Juan' });
  });

  test('GET /api/usuarios con nombre debe devolver una lista de usuarios filtrados', async () => {
    const response = await request(app).get('/api/usuarios?nombre=Juan');
    expect(response.statusCode).toBe(200);
    expect(response.body.usuarios).toBeInstanceOf(Array);
    expect(response.body.usuarios).toEqual(expect.arrayContaining([{ id: 1, nombre: 'Juan' }]));
  });
});