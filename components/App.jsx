import React from 'react';
import PropTypes from 'prop-types';
import { ScreenClassProvider, Container } from 'react-grid-system';
import { addLocales, setLocale, setTranslations } from 'react-i18nify';
import en from 'date-fns/locale/en-US';
import nl from 'date-fns/locale/nl';
import CreateColumn from './CreateColumn.jsx';
import SimpleTextComponent from './SimpleTextComponent.jsx';

function App({ fallbackScreenClass }) {
  setTranslations({
    en: {
      title: 'Awesome app with i18n!',
      date: 'MMMM do, yyyy',
    },
    nl: {
      title: 'Toffe app met i18n!',
      date: 'd MMMM yyyy',
    },
  });
  addLocales({ nl, en });
  setLocale('nl', false);

  return (
      <Container>
        <h1>
          Observability at Client end
        </h1>
        <h2>
          Sample Columns
        </h2>
        <CreateColumn />

        <h2>
          Observability for front-end web clients
        </h2>
        <SimpleTextComponent />
      </Container>
  );
}

App.propTypes = {
  fallbackScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
};

App.defaultProps = {
  fallbackScreenClass: 'xl',
};

export default App;
