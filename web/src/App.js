import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

/**
 * TRÊS CONCEITOS PARA ENTENDER REACT:
 *    1. Componente
 *    2. Estado
 *    3. Propriedade
 */

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />

            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars0.githubusercontent.com/u/35372047?s=460&v=4" alt="Erika Lopes"/>
                <div className="user-info">
                  <strong> Diego Fernandes</strong>
                  <span>ReactJS, React Native</span>
                </div>
              </header>
              <p>I'm just a student.</p>
              <a href="https://github.com/erikalopes">Acessar perfil no github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars0.githubusercontent.com/u/35372047?s=460&v=4" alt="Erika Lopes"/>
                <div className="user-info">
                  <strong> Diego Fernandes</strong>
                  <span>ReactJS, React Native</span>
                </div>
              </header>
              <p>I'm just a student.</p>
              <a href="https://github.com/erikalopes">Acessar perfil no github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars0.githubusercontent.com/u/35372047?s=460&v=4" alt="Erika Lopes"/>
                <div className="user-info">
                  <strong> Diego Fernandes</strong>
                  <span>ReactJS, React Native</span>
                </div>
              </header>
              <p>I'm just a student.</p>
              <a href="https://github.com/erikalopes">Acessar perfil no github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars0.githubusercontent.com/u/35372047?s=460&v=4" alt="Erika Lopes"/>
                <div className="user-info">
                  <strong> Diego Fernandes</strong>
                  <span>ReactJS, React Native</span>
                </div>
              </header>
              <p>I'm just a student.</p>
              <a href="https://github.com/erikalopes">Acessar perfil no github</a>
            </li>
          </ul>
      </main>
    </div>
  );
}

export default App;
