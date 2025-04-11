function App() {
  return (
    <>
      <header>
        <div id="logo">
          <img src="assets/img/favicon.png" alt="Calorii" />
          <h1>Calorii</h1>
        </div>
        <button id="reset" type="button">
          Reiniciar
        </button>
      </header>
      <main>
        <section id="form">
          <form>
            <div className="formline">
              <label htmlFor="category">Categoría:</label>
              <select name="category" id="category">
                <option value="comida">Comida</option>
                <option value="ejercicio">Ejercicio</option>
              </select>
            </div>
            <div className="formline">
              <label htmlFor="activity">Actividad:</label>
              <input
                type="text"
                name="activity"
                id="activity"
                placeholder="Ej. Comida, Juego de Naranja, Ensalada, Ejercicio, Pesas"
              />
            </div>
            <div className="formline">
              <label htmlFor="calories">Calorías:</label>
              <input
                type="number"
                name="calories"
                id="calories"
                defaultValue="0"
                min="0"
                step="1"
              />
            </div>
            <div id="buttons">
              <button type="submit" id="saveActivity">
                Guardar Actividad
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
