const getBrowserLang = () => {
    return (navigator.languages && navigator.languages[0]) ||
      navigator.language
  }

  export {getBrowserLang}