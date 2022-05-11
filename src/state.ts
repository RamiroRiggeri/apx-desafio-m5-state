const state = {
  data: {},
  //guarda la data

  listeners: [],
  //guarda los callbacks de cada componente

  getState() {
    return this.data;
  },
  //devuelve la información actual

  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  //recibe una data nueva
  //ejecuta los callbacks (funciones) en "listeners[]"

  subscribe(cb: (any) => any) {
    this.listeners.push(cb);
  },
  //agrega un callback nuevo en "listeners[]"
};

export { state };
