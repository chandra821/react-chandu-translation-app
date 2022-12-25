import React,{Component} from 'react'
import './App.css';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class App extends Component {

  handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  
  render() {
    const { t } = this.props;

    return (
      <div className="App">
        <nav style={{ width: '100%', padding: '.5rem', backgroundColor: 'gray'}}>
          <button onClick={() => this.handleClick('en')} >
            English
        </button>
          <button onClick={() => this.handleClick('ko')} >
            Korean
        </button>
          <button onClick={() => this.handleClick('chi')} >
            Chinese
       </button>
       <button onClick={() => this.handleClick('hin')} >
            Hindi
       </button>
       <button onClick={() => this.handleClick('spn')} >
            Spanish
       </button>
        </nav>
        <header className="App-header">
          <div>
            {/* <h1><iframe width="560" height="315" src="https://www.youtube.com/embed/cHqxgLhOl5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></h1> */}
          <h3 style={{ fontSize: "1rem", color: "red"}}>{t('chandu.1')}</h3>
            <h3 style={{ fontSize: "1rem", color: "yellow"}}>{t('Thanks.1')}</h3>
            <h3 style={{ fontSize: "1rem", color: "green"}}>{t('Why.1')}</h3>
          </div>
        </header>
      </div>
    )
  }
}

export default withTranslation()(App);