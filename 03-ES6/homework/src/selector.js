var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
if (matchFunc(startEl)) {
  resultSet.push(startEl)
}
for (let i = 0; i < startEl.children.length; i++) {
let collectedelements = traverseDomAndCollectElements(matchFunc, startEl.children[i]) 
resultSet = [...resultSet, ...collectedelements]
}
return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id"
  if (selector[0] === ".") return "class"
  if (selector.includes(".")) return "tag.class"
  return "tag"
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {

    matchFunction = function (elemento) {

      if (`#${elemento.id}` === selector) return true
      else return false

    }

  } else if (selectorType === "class") {

    matchFunction = function (elemento) {
      for (let i = 0; i < elemento.classList.length; i++) {
        if (`.${elemento.classList[i]}` === selector) return true
      } return false
    }

  } else if (selectorType === "tag.class") {

    matchFunction = function (elemento) {

      let [etiqueta, clase] = selector.split(".")
      let functionetiqueta = matchFunctionMaker(etiqueta)
      let functionclase = matchFunctionMaker(`.${clase}`)
      return functionetiqueta(elemento) && functionclase(elemento)
    }

  } else if (selectorType === "tag") {

    matchFunction = function (elemento) {
      if (elemento.tagName === selector.toUpperCase()) return true

      return false
    }

  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
