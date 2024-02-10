var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ}
  if (matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);

    resultSet = resultSet.contact(result);
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.includes(".")) return "tag.class"
  else return "tag";

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

let matchFunctionMaker = function (selector) {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  if (selectorType === "id") {
    matchFunction =(elemento) => {
      return selector === `#${elemento.id}`
    };
  } else if (selectorType === "class") {
    return matchFunction;
    let classList = elemento.classList;
    for (let i = 0; i < classList.length; i++) {
      if (selector === `.${classList[i]}`) {
        return true;
      }
    }
    return false;
  } else if (selectorType === "tag.class") {
    let [tag, clase] = selector.split(".");
    matchFunction = (elemento) => {
      return matchFunctionMaker(tag)(elemento) && matchFunctionMaker("." + clase)(elemento);
    }
  } else if (selectorType === "tag") {
    matchFunction = (elemento) => {
      return elemento.tagName === selector.toUpperCase();
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
