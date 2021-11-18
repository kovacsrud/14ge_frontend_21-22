var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {
    var ertek = 100;
    var szamok = [12, 39, 455, 76, 557, 1299, 411, 425, 991, 2337];

    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        szamlalo = _React$useState2[0],
        setSzamlalo = _React$useState2[1];

    var _React$useState3 = React.useState(true),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        isLathato = _React$useState4[0],
        setLathato = _React$useState4[1];

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Jsx szintaxis'
        ),
        React.createElement(
            'h2',
            null,
            'A sz\xE1m \xE9rt\xE9ke:',
            ertek
        ),
        React.createElement(
            'h2',
            null,
            'A sz\xE1ml\xE1l\xF3:',
            szamlalo
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return setSzamlalo(function (elozo) {
                        return elozo + 1;
                    });
                } },
            'N\xF6vel\xE9s'
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return setSzamlalo(function (elozo) {
                        return elozo - 1;
                    });
                } },
            'Cs\xF6kkent\xE9s'
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return setLathato(!isLathato);
                } },
            'Lista kapcsol\xE1s'
        ),
        React.createElement(Buttons, { setSzamlalo: setSzamlalo }),
        isLathato ? React.createElement(
            'ul',
            null,
            szamok.map(function (ertek, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    ertek
                );
            })
        ) : React.createElement('ul', null)
    );
}

function Buttons(_ref) {
    var setSzamlalo = _ref.setSzamlalo;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return setSzamlalo(function (elozo) {
                        return elozo + 1;
                    });
                } },
            '+++'
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return setSzamlalo(function (elozo) {
                        return elozo - 1;
                    });
                } },
            '---'
        )
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app-container'));